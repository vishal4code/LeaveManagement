using System.ComponentModel.DataAnnotations;

namespace LeaveManagement.Models
{
    public class LeaveRequest
    {

        [Key]
        public int LeaveId { get; set; }

        [Required]
        public string EmployeeName { get; set; }

        [Required]
        public string LeaveType { get; set; }

        [Required]
        public DateTime FromDate { get; set; }

        [Required]
        public DateTime ToDate { get; set; }

        public string Reason { get; set; }

        public string Status { get; set; } = "Pending";

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}