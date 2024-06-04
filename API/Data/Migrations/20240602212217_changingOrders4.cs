using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class changingOrders4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0443fab4-33db-4e38-aabc-cffdc56853dd");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "74542a91-eb6f-48c4-a573-4bcafaf6a262");

            migrationBuilder.RenameColumn(
                name: "ProductName",
                table: "OrderItem",
                newName: "Name");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "a580a05d-00b2-467c-a712-64fb01018520", null, "Member", "MEMBER" },
                    { "ffa545a3-f39c-44f4-8673-1b4152a57ce6", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a580a05d-00b2-467c-a712-64fb01018520");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ffa545a3-f39c-44f4-8673-1b4152a57ce6");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "OrderItem",
                newName: "ProductName");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0443fab4-33db-4e38-aabc-cffdc56853dd", null, "Admin", "ADMIN" },
                    { "74542a91-eb6f-48c4-a573-4bcafaf6a262", null, "Member", "MEMBER" }
                });
        }
    }
}
