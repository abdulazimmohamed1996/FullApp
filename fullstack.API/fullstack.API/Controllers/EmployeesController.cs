using fullstack.API.Data;
using fullstack.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace fullstack.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly FullStackDbContect _fullStackDbContect;
        public EmployeesController(FullStackDbContect fullStackDbContect)
        {
            _fullStackDbContect = fullStackDbContect;
            
        }
        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var employee = await _fullStackDbContect.Employees.ToListAsync();
            return Ok(employee);
        }
        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody] Employee employeeRequest)
        {
            employeeRequest.Id = Guid.NewGuid();
            await _fullStackDbContect.Employees.AddAsync(employeeRequest);
            await _fullStackDbContect.SaveChangesAsync();
            return Ok(employeeRequest);
        }
        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult>GetEmployee([FromRoute]Guid id)
        {
            var employee = await _fullStackDbContect.Employees.FirstOrDefaultAsync(x => x.Id == id);
            if(employee == null) 
            {
                return NotFound();
            }
            else
            return Ok(employee);    
        }
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> updateEmployee([FromRoute] Guid id , Employee updateEmployeeRequest)
        {
            var employee = await _fullStackDbContect.Employees.FindAsync(id);
               if(employee == null)
               {
                 return NotFound();
               }
               employee.Name = updateEmployeeRequest.Name;
               employee.Email = updateEmployeeRequest.Email;
               employee.Phone = updateEmployeeRequest.Phone;
               employee.Salary = updateEmployeeRequest.Salary;
               employee.Department = updateEmployeeRequest.Department;

            await _fullStackDbContect.SaveChangesAsync();
            return Ok(employee);

        }
        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] Guid id)
        {
            var employee = await _fullStackDbContect.Employees.FindAsync(id);
            if(employee == null)
            {
                return NotFound();
            }
            _fullStackDbContect.Employees.Remove(employee);
            await _fullStackDbContect.SaveChangesAsync();
            return Ok(employee);
        }






    }
}
