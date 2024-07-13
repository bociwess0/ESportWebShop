using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class createAdmin : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "83f8ecb2-b5af-43cf-8e31-62370092a0e6");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "aa618132-65a0-4a2b-bca4-90c9f95eca7d");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "3c6bfe53-37bb-4458-bfcb-7bf53028caee", null, "Member", "MEMBER" },
                    { "4ae6643f-2308-4290-a272-6c9859c3a9e6", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3c6bfe53-37bb-4458-bfcb-7bf53028caee");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4ae6643f-2308-4290-a272-6c9859c3a9e6");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "83f8ecb2-b5af-43cf-8e31-62370092a0e6", null, "Member", "MEMBER" },
                    { "aa618132-65a0-4a2b-bca4-90c9f95eca7d", null, "Admin", "ADMIN" }
                });
        }
    }
}
