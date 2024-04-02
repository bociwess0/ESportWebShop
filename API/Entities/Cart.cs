using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Cart
    {
        public int Id { get; set; }

        public string UserId { get; set; }

        public List<CartItem> Products { get; set; } = [];

        public void AddCartItem(Product product, int quantity) {
            if(Products.All(item => item.Product.Id != product.Id)) { //product does not exists in our list
                Products.Add(new CartItem{Product = product, Quantity = quantity});
            }

            var existingProduct = Products.FirstOrDefault(item => item.Product.Id == product.Id);

            if(existingProduct != null) existingProduct.Quantity += quantity;
        }

        public void RemoveCartItem(int productId, int quantity) {
            var product = Products.FirstOrDefault(item => item.Product.Id == productId);
            if(product == null) return;
            product.Quantity -= quantity;
            if(product.Quantity == 0) Products.Remove(product);
        }
        
    }
}