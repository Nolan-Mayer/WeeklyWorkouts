namespace WeeklyWorkouts.Models
{
    public class Workout
    {
        public int Id { get; set; }

        public string WeekDay { get; set; }

        public string Exercise { get; set; }

        public int Sets { get; set; }

        public int Reps { get; set; }

        public int Weight { get; set; }

        // Constructor
        public Workout() { }
    }
}
