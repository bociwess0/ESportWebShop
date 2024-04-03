using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data.Migrations;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CartController : BaseApiController
    {
        private readonly StoreContext _context;
        public CartController(StoreContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<CartDTO>> GetCart()
        {
            var cart = await RetrieveCart();

            return new CartDTO{
                Id = cart.Id,
                UserId = cart.UserId,
                Products = cart.Products.Select(product => new CartItemDTO {
                    ProductId = product.Id,
                    Name = product.Product.Name,
                    Description = product.Product.Description,
                    Price = product.Product.Price,
                    Type = product.Product.Type,
                    Brand = product.Product.Brand,
                    Quantity = product.Quantity
                }).ToList()
            };

        }

        [HttpPost] // api/Cart?productId=3&quantity=2
        public async Task<ActionResult> AddToCart(int productId, int quantity) {
            var cart = await RetrieveCart();

            if(cart == null) cart = CreateCart();

            var product = await _context.Products.FindAsync(productId);
            
            cart.AddCartItem(product, quantity);

            var result = await _context.SaveChangesAsync() > 0; // returns int of number of changes made in db

            if(result) return StatusCode(201);

            return null;
            
        }


        [HttpDelete]
        public async Task<ActionResult> RemoveFromCart(int productId, int quantity) {
            return Ok();
        }

        private async Task<Cart> RetrieveCart()
        {
            return await _context.Carts
                        .Include(i => i.Products)
                        .ThenInclude(p => p.Product)
                        .FirstOrDefaultAsync(x => x.UserId == Request.Cookies["userId"]);
        }

        private Cart CreateCart()
        {
            var userId = Guid.NewGuid().ToString(); //random id
            var cookieOptions = new CookieOptions{IsEssential = true, Expires = DateTime.Now.AddDays(30)};
            Response.Cookies.Append("userId", userId, cookieOptions);
            var cart = new Cart{UserId= userId};
            _context.Carts.Add(cart);

            return cart;
        }

    }
}