using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace API.Services
{
    public class EmailService
    {
        private readonly IConfiguration _configuration;

        public EmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

       public async Task SendEmailAsync(string email, int orderId)
        {
            var apiKey = _configuration[""];
            
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("etechwebshop@yopmail.com", "Etech Web Shop");
            var subject = "Information about successful order!";
            var to = new EmailAddress(email);
            var plainTextContent = $"This is your order id: {orderId}";
            var htmlContent = $"<h1>You have successfully placed your order!</h1>"
                            + $"<p>This is your order id: {orderId}</p>";
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);
            var response = await client.SendEmailAsync(msg);
        }
    }
}