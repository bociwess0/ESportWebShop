using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class CartExtensions
    {

        public static CartDTO MapCartDto(Cart cart)
        {
            return new CartDTO
            {
                Id = cart.Id,
                UserId = cart.UserId,
                Products = cart.Products.Select(product => new CartItemDTO
                {
                    Id = product.Product.Id,
                    Name = product.Product.Name,
                    Description = product.Product.Description,
                    Price = product.Product.Price,
                    Type = product.Product.Type,
                    Brand = product.Product.Brand,
                    Quantity = product.Quantity,
                    PictureUrl = product.Product.PictureUrl
                }).ToList()
            };
        }

        public static CartItemDTO MapCartItemDto(CartItem product) {
            return new CartItemDTO {
                Id = product.Product.Id,
                Name = product.Product.Name,
                Description = product.Product.Description,
                Price = product.Product.Price,
                Type = product.Product.Type,
                Brand = product.Product.Brand,
                Quantity = product.Quantity
            };
        }
        
        public static IQueryable<Cart> RetrieveBasketWithItems(this IQueryable<Cart> query, string userId) {
            return query.Include(i => i.Products).ThenInclude(p => p.Product);
        } 

    }
}