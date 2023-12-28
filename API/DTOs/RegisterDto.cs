using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required] public string Username { get; set; }

        [Required] public string KnownAs { get; set; }
        [Required] public string gender { get; set; }
        [Required] public DateOnly? DateOfBirth { get; set; } // optional to make required work!
        [Required] public string city { get; set; }
        [Required] public string country { get; set; }

        [Required] [StringLength(8, MinimumLength = 4)] public string Password { get; set; }
    }
}