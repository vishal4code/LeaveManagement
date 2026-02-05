using LeaveManagement.Data;
using LeaveManagement.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LeaveManagement.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeaveController : ControllerBase
    {
        private readonly AppDbContext _context;

        public LeaveController(AppDbContext context)
        {
            _context = context;
        }

        // POST: api/leave
        // Apply for leave
        [HttpPost]
        public async Task<IActionResult> ApplyLeave([FromBody] LeaveRequest leave)
        {
            leave.Status = "Pending";
            leave.CreatedAt = DateTime.Now;

            _context.LeaveRequests.Add(leave);
            await _context.SaveChangesAsync();

            return Ok(leave);
        }

        // GET: api/leave
        // Get all leave requests
        [HttpGet]
        public async Task<IActionResult> GetAllLeaves()
        {
            var leaves = await _context.LeaveRequests.ToListAsync();
            return Ok(leaves);
        }

        // PUT: api/leave/{id}
        // Update leave status
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateLeaveStatus(int id, [FromBody] string status)
        {
            var leave = await _context.LeaveRequests.FindAsync(id);

            if (leave == null)
                return NotFound();

            leave.Status = status;
            await _context.SaveChangesAsync();

            return Ok(leave);
        }
    }
}
