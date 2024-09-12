using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WeeklyWorkouts.Models;

namespace WeeklyWorkouts.Data
{
    public class WeeklyWorkoutsContext : DbContext
    {
        public WeeklyWorkoutsContext (DbContextOptions<WeeklyWorkoutsContext> options)
            : base(options)
        {
        }

        public DbSet<WeeklyWorkouts.Models.Workout> Workout { get; set; } = default!;
    }
}
