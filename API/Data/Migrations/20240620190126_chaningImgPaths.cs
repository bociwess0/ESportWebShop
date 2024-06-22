using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class chaningImgPaths : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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
                    { "2950e1ac-0250-479f-a6ff-56c48409597b", null, "Member", "MEMBER" },
                    { "8742c1aa-d72f-47d1-bbb4-c62bb95c3ee7", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2950e1ac-0250-479f-a6ff-56c48409597b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8742c1aa-d72f-47d1-bbb4-c62bb95c3ee7");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "5a08aeff-4980-4b35-9d9b-2b3988bb9d94", null, "Admin", "ADMIN" },
                    { "c22fb086-a2ca-47fa-a44e-5ec06ccd041f", null, "Member", "MEMBER" }
                });
        }
    }
}
