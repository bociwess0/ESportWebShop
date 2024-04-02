using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    [Table("CartItems")]
    public class CartItem
    {
        public int Id { get; set; }

        public int Quantity { get; set; }

        public Cart Cart { get; set; }

        public Product Product { get; set; }

    }
}