using System;
using System.Collections.Generic;
using System.Linq;
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
        public async Task<ActionResult<List<Order>>> GetOrders(string userEmail) {
            var user = await _context.Users.SingleOrDefaultAsync(u => u.Email == userEmail);
            if (user == null) {
                return NotFound("User not found");
            }

            return await _context.Orders
                    .Include(o => o.OrderItems)
                    .Where(x => x.UserId == user.Id)
                    .ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Order>> CreateOrder(string userEmail) {
            var userId = Request.Cookies["userId"];
            if (string.IsNullOrEmpty(userId)) {
                return BadRequest(new ProblemDetails { Title = "User ID is missing!" });
            }

            var cart = await _context.Carts
                        .Include(i => i.Products)
                        .ThenInclude(p => p.Product)
                        .FirstOrDefaultAsync(x => x.UserId == userId);
            
            if(cart == null) { 
                return BadRequest(new ProblemDetails { Title = "Cart does not exist!" }); 
            }

            var items = new List<OrderItem>();

            // Find the user by email
            var user = await _context.Users.SingleOrDefaultAsync(u => u.Email == userEmail);
            if (user == null) {
                return NotFound("User not found");
            }

            foreach (var product in cart.Products) {
                if (product?.Product == null) {
                    return BadRequest(new ProblemDetails { Title = "Product not found in cart item!" });
                }

                var mappedProduct = new OrderItem {
                    ProductId = product.Product.Id,
                    Name = product.Product.Name,
                    Price = product.Product.Price,
                    Quantity = product.Quantity,
                    PictureUrl = product.Product.PictureUrl
                };

                items.Add(mappedProduct);
            }

            if (!items.Any()) {
                return NotFound("Items not found");
            }

            long TotalPrice = items.Sum(item => item.Price * item.Quantity);

            var order = new Order {
                UserId = user.Id,
                OrderItems = items,
                TotalPrice = TotalPrice,
                OrderStatus = "To be delivered"
            }; 

            _context.Orders.Add(order);
            // _context.Carts.Remove(cart);

            var result = await _context.SaveChangesAsync() > 0;

            if(result) return order;

            return BadRequest("Problem with creating order");
        }

        [HttpPut("changeOrderStatus")]
        public async Task<IActionResult> ChangeOrderStatus (int orderId) {
            

            var order = await _context.Orders
                                .Include(i => i.OrderItems)
                                .FirstOrDefaultAsync(x => x.Id == orderId);
            
            if(order == null) {
                return NotFound("Order with this ID does not exists.");
            }

            order.OrderStatus = "Delivered";

            try
            {
                await _context.SaveChangesAsync();
                return Ok("Order status updated successfully.");
            }
            catch (Exception)
            {
                return BadRequest("Problem with changing order status.");
            }

        }

    }
}
