using Microsoft.EntityFrameworkCore;
using API.Entities;
namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) :
            base(options)
        {
            //this.Options = options;
        }

        public DbSet<AppUser> Users { get; set; }
    }
}
