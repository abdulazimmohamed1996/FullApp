using fullstack.API.Models;
using Microsoft.EntityFrameworkCore;

namespace fullstack.API.Data
{
    public class FullStackDbContect:DbContext
    {
        public FullStackDbContect(DbContextOptions options) : base(options)
        {
            
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            var builder = new ConfigurationBuilder().AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
            IConfigurationRoot configuration = builder.Build();
            var constring = configuration.GetConnectionString("MyConnection");
            optionsBuilder.UseSqlServer(constring);
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }


        public DbSet<Employee> Employees { get; set; }

    }
}
