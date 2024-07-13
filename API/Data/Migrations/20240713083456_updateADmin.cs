using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class updateADmin : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "43a6c9c4-38c9-4c20-9e33-8295a0ce3fd9");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f7ad2908-8d7d-4155-87b3-5a67d37cf5d8");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "83f8ecb2-b5af-43cf-8e31-62370092a0e6", null, "Member", "MEMBER" },
                    { "aa618132-65a0-4a2b-bca4-90c9f95eca7d", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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
                    { "43a6c9c4-38c9-4c20-9e33-8295a0ce3fd9", null, "Member", "MEMBER" },
                    { "f7ad2908-8d7d-4155-87b3-5a67d37cf5d8", null, "Admin", "ADMIN" }
                });
        }
    }
}
