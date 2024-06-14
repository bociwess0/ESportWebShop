using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class emailSender : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a580a05d-00b2-467c-a712-64fb01018520");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ffa545a3-f39c-44f4-8673-1b4152a57ce6");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "5a08aeff-4980-4b35-9d9b-2b3988bb9d94", null, "Admin", "ADMIN" },
                    { "c22fb086-a2ca-47fa-a44e-5ec06ccd041f", null, "Member", "MEMBER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5a08aeff-4980-4b35-9d9b-2b3988bb9d94");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c22fb086-a2ca-47fa-a44e-5ec06ccd041f");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "a580a05d-00b2-467c-a712-64fb01018520", null, "Member", "MEMBER" },
                    { "ffa545a3-f39c-44f4-8673-1b4152a57ce6", null, "Admin", "ADMIN" }
                });
        }
    }
}
