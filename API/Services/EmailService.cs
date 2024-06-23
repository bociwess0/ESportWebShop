using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SendGrid;
using SendGrid.Helpers.Mail;
using Microsoft.Extensions.Configuration;

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
            var apiKey = Environment.GetEnvironmentVariable("SENDGRID_API_KEY");

            if (string.IsNullOrEmpty(apiKey))
            {
                throw new InvalidOperationException("SendGrid API key is not set in the environment variables.");
            }

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
