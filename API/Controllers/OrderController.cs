using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using API.Data.Migrations;
using API.DTOs;
using API.Entities;
using API.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class OrderController : BaseApiController
    {
        private readonly StoreContext _context;
        public OrderController(StoreContext context) {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Order>>> GetOrders() {
            return await _context.Orders
                    .Include(o => o.OrderItems)
                    .Where(x => x.UserId == User.Identity.Name)
                    .ToListAsync();
        }

        [HttpGet("{id}", Name = "GetOrder")]
        public async Task<ActionResult<Order>> GetOrderById(int id) {
            return await _context.Orders
            .Include(o => o.OrderItems)
            .Where(x => x.UserId == User.Identity.Name && x.Id == id)
            .FirstOrDefaultAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Order>> CreateOrder(OrderDTO orderDTO, string userEmail) {
            var cart = await _context.Carts
                    .RetrieveBasketWithItems(orderDTO.UserId)
                    .FirstOrDefaultAsync();

            if(cart == null) { return BadRequest(new ProblemDetails { Title = "Cart do not exists!" }); }

            var items = new List<CartItem>();

            // Find the user by email
            var user = await _context.Users.SingleOrDefaultAsync(u => u.Email == userEmail);
            if (user == null)
            {
                return NotFound("User not found");
            }

            foreach (var product in cart.Products) {
                items.Add(product);
            }

            long TotalPrice = items.Sum(item => item.Product.Price * item.Quantity);

            var order = new Order {
                OrderItems = items,
                UserId = user.Id,
                TotalPrice = TotalPrice,
            }; 

            _context.Orders.Add(order);
            // _context.Carts.Remove(cart);

            var result = await _context.SaveChangesAsync() > 0;

            if(result) return CreatedAtRoute("GetOrder", new {id = order.Id});

            return BadRequest("Problem with creating order");

        }
    }
}