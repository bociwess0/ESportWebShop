using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class changingOrders2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "329b50cf-27c8-4fc7-a22b-120b5985d118");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a6c43df1-421e-4554-b972-3e1d3edf7501");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "699f75bb-9151-4ca5-8bdf-3ef8f7ccba75", null, "Member", "MEMBER" },
                    { "e5fc0a09-efad-4f94-8d19-16146a61643d", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "699f75bb-9151-4ca5-8bdf-3ef8f7ccba75");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e5fc0a09-efad-4f94-8d19-16146a61643d");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "329b50cf-27c8-4fc7-a22b-120b5985d118", null, "Admin", "ADMIN" },
                    { "a6c43df1-421e-4554-b972-3e1d3edf7501", null, "Member", "MEMBER" }
                });
        }
    }
}
