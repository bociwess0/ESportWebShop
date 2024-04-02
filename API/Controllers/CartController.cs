using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data.Migrations;
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
        public async Task<ActionResult<Cart>> GetCart()
        {
            var cart = await _context.Carts
            .Include(i => i.Products)
            .ThenInclude(p => p.Product)
            .FirstOrDefaultAsync(x => x.UserId == Request.Cookies["userId"]);

            return cart;

        }

        [HttpPost]
        public async Task<ActionResult> AddToCart(int productId, int quantity) {
            return StatusCode(201);
        }

        [HttpDelete]
        public async Task<ActionResult> RemoveFromCart(int productId, int quantity) {
            return Ok();
        }

    }
}