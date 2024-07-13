using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data.Migrations;
using API.Entities;
using Microsoft.AspNetCore.Identity;

namespace API.Data
{
    public class DbInitializer
    {
        public static async Task SeedAdminUser(IServiceProvider serviceProvider) {
            var userManager = serviceProvider.GetRequiredService<UserManager<User>>();
            var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();

            string[] roleNames = { "Member", "Admin" };
            IdentityResult roleResult;

            foreach (var roleName in roleNames)
            {
                var roleExist = await roleManager.RoleExistsAsync(roleName);
                if (!roleExist)
                {
                    // Create the roles and seed them to the database
                    roleResult = await roleManager.CreateAsync(new IdentityRole(roleName));
                }
            }

            // Check if the admin user exists
            var admin = await userManager.FindByEmailAsync("admin@test.com");
            if (admin == null)
            {
                admin = new User
                {
                    UserName = "admin@test.com",
                    Email = "admin@test.com",
                    FirstName = "Admin",
                    LastName = "User",
                    Address = "Admin Address",
                    City = "Admin City"
                };
                var result = await userManager.CreateAsync(admin, "Pa$$w0rd");
                if (result.Succeeded)
                {
                    await userManager.AddToRolesAsync(admin, roleNames);
                }
            }
        }
        public static async Task Initialize(StoreContext context, UserManager<User> userManager) {

            if(!userManager.Users.Any()) {
                var user = new User { 
                    UserName = "bob",
                    Email = "bob@test.com",
                };

                await userManager.CreateAsync(user, "Pa$$w0rd"); //kreiranje usera
                await userManager.AddToRoleAsync(user, "Member");


            }

            if(context.Products.Any()) return;

            var products = new List<Product> {
                		new Product
                {
                    Name = "MX Master 3S",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 23,
                    PictureUrl = "/images/products/logitech_mouse_1.jpg",
                    Brand = "Logitech",
                    Type = "Mouses",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "MX Master 3S For Mac",
                    Description = "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
                    Price = 40,
                    PictureUrl = "/images/products/logitech_mouse_2.jpg",
                    Brand = "Logitech",
                    Type = "Mouses",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "GENIUS MOUSE X-G200",
                    Description =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Price = 50,
                    PictureUrl = "/images/products/genius_mouse_1.jpg",
                    Brand = "Genius",
                    Type = "Mouses",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Genius GX Gaming Ammox X1-400 ",
                    Description =
                        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
                    Price = 100,
                    PictureUrl = "/images/products/genius_mouse_2.jpg",
                    Brand = "Genius",
                    Type = "Mouses",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "HyperX Pulsefire Haste",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 70,
                    PictureUrl = "/images/products/hyperx_mouse_1.webp",
                    Brand = "HyperX",
                    Type = "Mouses",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Corsair Dark Core RGB Pro",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 90,
                    PictureUrl = "/images/products/corsair_mouse.jpg",
                    Brand = "Corsair",
                    Type = "Mouses",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Genius Pro Headphones HS-G500V",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 150,
                    PictureUrl = "/images/products/genius_headphones.png",
                    Brand = "Genius",
                    Type = "Headphones",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "HyperX Wireless Gaming Headset",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 140,
                    PictureUrl = "/images/products/hyperx_headphones_1.webp",
                    Brand = "HyperX",
                    Type = "Headphones",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Cloud III Wireless + HX3D Horns Bundle",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 180,
                    PictureUrl = "/images/products/hyperx_headphones_2.webp",
                    Brand = "HyperX",
                    Type = "Headphones",
                    QuantityInStock = 100
                    
                },
                new Product
                {
                    Name = "Razer Nommo V2 Pro - 2.1 PC Gaming Speakers",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 385,
                    PictureUrl = "/images/products/razer_speakers.png",
                    Brand = "Razer",
                    Type = "Speakers",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Razer Leviathan V2 Speakers",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 270,
                    PictureUrl = "/images/products/razer_speakers2.png",
                    Brand = "Razer",
                    Type = "Speakers",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "JBL Xtreme 2",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 250,
                    PictureUrl = "/images/products/jbl_speaker.webp",
                    Brand = "JBL",
                    Type = "Speakers",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "JBL Partybox Encore Essential",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 300,
                    PictureUrl = "/images/products/jbl_speaker2.webp",
                    Brand = "JBL",
                    Type = "Speakers",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Rampage SHINE K14 Siyah Keyboard",
                    Description =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Price = 120,
                    PictureUrl = "/images/products/rampage_keyboard.png",
                    Brand = "Rampage",
                    Type = "Keyboards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Rampage KB-R34 WINNER Semi Mekanik Keyboard",
                    Description =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Price = 160,
                    PictureUrl = "/images/products/rampage_keyboard2.png",
                    Brand = "Rampage",
                    Type = "Keyboards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Genius Gx Scorpion Keyboard",
                    Description =
                        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
                    Price = 100,
                    PictureUrl = "/images/products/genius_keyboard.jpg",
                    Brand = "Genius",
                    Type = "Keyboards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Logitech G915 TKL keyboard",
                    Description = "Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.",
                    Price = 230,
                    PictureUrl = "/images/products/logitech_keyboard.webp",
                    Brand = "Logitech",
                    Type = "Keyboards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Logitech PRO X TKL keyboard",
                    Description = "Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.",
                    Price = 200,
                    PictureUrl = "/images/products/logitech_keyboard2.webp",
                    Brand = "Logitech",
                    Type = "Keyboards",
                    QuantityInStock = 100
                },
            };

            foreach (var item in products)
            {
                context.Products.Add(item);
            }

            context.SaveChanges();

        }
    }
}