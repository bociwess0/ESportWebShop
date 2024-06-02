using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class CartExtensions
    {
        public static IQueryable<Cart> RetrieveBasketWithItems(this IQueryable<Cart> query, string userId) {
            return query.Include(i => i.Products).ThenInclude(p => p.Product).Where(p => p.UserId == userId);
        } 

    }
}