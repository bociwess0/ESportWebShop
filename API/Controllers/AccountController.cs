using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {

        private readonly UserManager<User> _userManager;
        private readonly TokenService _tokenService;
        

        public AccountController(UserManager<User> userManager, TokenService tokenService)
        {
            _userManager = userManager;
            _tokenService = tokenService;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDTO) {
            var user = await _userManager.FindByEmailAsync(loginDTO.Email); // find user by email
            if (user == null || !await _userManager.CheckPasswordAsync(user, loginDTO.Password)) {
                return Unauthorized();
            }

            return new UserDTO {
                Email = user.Email,
                Token = await _tokenService.GenerateToken(user)
            };
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register(RegisterDTO registerDTO) {
            var user = new User {
                UserName = registerDTO.Email, // Set UserName to Email
                Email = registerDTO.Email,
                FirstName = registerDTO.FirstName,
                LastName = registerDTO.LastName,
                Address = registerDTO.Address,
                City = registerDTO.City,
                PhoneNumber = registerDTO.Phone
            };

            var result = await _userManager.CreateAsync(user, registerDTO.Password);

            if (!result.Succeeded) {
                foreach (var error in result.Errors) {
                    ModelState.AddModelError(error.Code, error.Description);
                }

                return BadRequest(ModelState); // Return detailed error information
            }

            await _userManager.AddToRoleAsync(user, "Member");

            return StatusCode(201);
        }

        [HttpGet("currentUser")]
        public async Task<ActionResult<UserDTO>> GetCurrentUser(string email, string token) {

            // Validate the token
            var validUser = await _tokenService.ValidateToken(token);
            if (validUser == null)
            {
                return Unauthorized("Invalid token");
            }

            // Fetch all users (this is a placeholder, replace with actual user fetching logic)
            var user = await _userManager.FindByEmailAsync(email);

            if (user == null) {
                return Unauthorized();
            }

            // Map users to RegisterDTO (adjust this as per your actual data source)
            var currentUser = new RegisterDTO
            {
                Email = user.Email,
                Password = user.PasswordHash, // Note: Do not expose passwords in a real application
                FirstName = user.FirstName,
                LastName = user.LastName,
                Address = user.Address,
                City = user.City,
                Phone = user.PhoneNumber,
            };

            return Ok(currentUser);
        }
            
        [HttpPut("updateUser")]
        public async Task<ActionResult<UserDTO>> UpdateUser(UpdatedUser updateUserDTO) {
            // Find the user by email
            var user = await _userManager.FindByEmailAsync(updateUserDTO.Email);
            if (user == null) {
                return NotFound("User not found");
            }

            // Update user properties
            user.FirstName = updateUserDTO.FirstName;
            user.LastName = updateUserDTO.LastName;
            user.Address = updateUserDTO.Address;
            user.City = updateUserDTO.City;
            user.PhoneNumber = updateUserDTO.Phone;

            var changePasswordResult = await _userManager.ChangePasswordAsync(user, updateUserDTO.CurrentPassword, updateUserDTO.NewPassword);

            // return BadRequest(changePasswordResult);

            if (!changePasswordResult.Succeeded)
            {
                foreach (var error in changePasswordResult.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);
                }
                return BadRequest(ModelState);
            }

            // Update user in database
            var result = await _userManager.UpdateAsync(user);

            if (!result.Succeeded) {
                foreach (var error in result.Errors) {
                    ModelState.AddModelError(error.Code, error.Description);
                }
                return BadRequest(ModelState);
            }

            // Create a UserDTO to return
            var userDTO = new UserDTO {
                Email = user.Email,
                Token = await _tokenService.GenerateToken(user)
            };

            return Ok(userDTO);
        }

    }
}