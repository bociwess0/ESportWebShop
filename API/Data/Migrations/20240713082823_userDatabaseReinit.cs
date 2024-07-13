using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class userDatabaseReinit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3ce50bce-1757-4416-8f5c-76b189d441d1");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9cb6a509-af1c-42ac-bc5a-885a47a7c7e1");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "43a6c9c4-38c9-4c20-9e33-8295a0ce3fd9", null, "Member", "MEMBER" },
                    { "f7ad2908-8d7d-4155-87b3-5a67d37cf5d8", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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
                    { "3ce50bce-1757-4416-8f5c-76b189d441d1", null, "Member", "MEMBER" },
                    { "9cb6a509-af1c-42ac-bc5a-885a47a7c7e1", null, "Admin", "ADMIN" }
                });
        }
    }
}
