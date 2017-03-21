namespace GuinessTravelGuideSP.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    /* https://docs.microsoft.com/en-us/aspnet/web-api/overview/data/using-web-api-with-entity-framework/part-3 */

    internal sealed class Configuration : DbMigrationsConfiguration<GuinessTravelGuideSP.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "GuinessTravelGuideSP.Models.ApplicationDbContext";
        }

        protected override void Seed(GuinessTravelGuideSP.Models.ApplicationDbContext context)
        {

            context.Locations.AddOrUpdate(x => x.ID, new Models.Location() { ID = 1, City = "Bergen", Country = "Norway", Name = "Garage", Rating = 1 },
                new Models.Location() { ID = 2, City = "Bergen", Country = "Norway", Name = "Scruffy Murphys", Rating = 1 },
                new Models.Location() { ID = 3, City = "Athens", Country = "Greece", Name = "Scruffy Murphys", Rating = 2 }
                );
        }
    }
}
