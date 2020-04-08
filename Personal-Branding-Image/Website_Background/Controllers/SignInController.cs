using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Website_Background.Models;

namespace Angular.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SignInController : ControllerBase
    {
        // Postman https://localhost:44367/api/LogIn Post{ "Username":"liu","Password":"12345"}
        [HttpPost]
        [Produces("application/json")]
        public IActionResult verification([FromBody] Users ?Users)
        {
            // [Bind("Username,Password")] Users? Users -> 不確定 Post JSON 格式
            // [FromBody] Users ?Users
            // https://blog.walterlv.com/post/use-postman-to-debug-asp-net-core-api.html
            // 必須吃 FromBody 物件才好處理
            //https://docs.microsoft.com/zh-tw/dotnet/standard/exceptions/how-to-use-the-try-catch-block-to-catch-exceptions
            try
            {
                var WB_SingIn = new Website_Background.Models.SingIn();
                var verificationInfo = "failure";
                verificationInfo = WB_SingIn.verification(Users.Username, Users.Password);
                // https://stackoverflow.com/questions/10286056/what-is-the-command-to-exit-a-console-application-in-c 
                //https://docs.microsoft.com/zh-tw/aspnet/core/web-api/advanced/formatting?view=aspnetcore-3.1
                //https://stackoverflow.com/questions/42360139/asp-net-core-return-json-with-status-code
                return Ok(verificationInfo);

            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
            //return "success";
        }
    }
}
