using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Data.Migrations;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;


namespace API.Controllers
{   
    public class ProductsController : BaseApiController
    {
        private readonly StoreContext _context;
        private readonly UserManager<User> _userManager;

        public ProductsController(StoreContext context, UserManager<User> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        [HttpPost("initProducts")]
        public async Task<IActionResult> InitProducts() 
        {
            await DbInitializer.Initialize(_context, _userManager);
            return StatusCode(201);
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts() 
        {
            return await _context.Products.ToListAsync();
        }

        [HttpGet("{id}")] //api/products/3
        public async Task<ActionResult<Product>> GetProduct(int id) 
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null) 
            {
                return NotFound();
            }
            return product;
        }
    }
}