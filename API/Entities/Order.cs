using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;

namespace API.Entities
{
    public class Order
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public DateTime OrderDate { get; set; } = DateTime.Parse(DateTime.Now.ToString(), null, DateTimeStyles.RoundtripKind);

        public List<OrderItem> OrderItems { get; set; }

        public long TotalPrice { get; set; }

    }
}