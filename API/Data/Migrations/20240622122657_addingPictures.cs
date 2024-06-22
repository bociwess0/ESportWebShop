using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class addingPictures : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2950e1ac-0250-479f-a6ff-56c48409597b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8742c1aa-d72f-47d1-bbb4-c62bb95c3ee7");

            migrationBuilder.AddColumn<string>(
                name: "PictureUrl",
                table: "OrderItem",
                type: "TEXT",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1a9138cb-837e-4789-a661-28259bf48d21", null, "Admin", "ADMIN" },
                    { "f19f3972-6aac-48a9-9b48-ef491b8c304f", null, "Member", "MEMBER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1a9138cb-837e-4789-a661-28259bf48d21");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f19f3972-6aac-48a9-9b48-ef491b8c304f");

            migrationBuilder.DropColumn(
                name: "PictureUrl",
                table: "OrderItem");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2950e1ac-0250-479f-a6ff-56c48409597b", null, "Member", "MEMBER" },
                    { "8742c1aa-d72f-47d1-bbb4-c62bb95c3ee7", null, "Admin", "ADMIN" }
                });
        }
    }
}
