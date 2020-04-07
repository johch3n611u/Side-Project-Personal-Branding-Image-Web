using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Website_Background.Models;

namespace Angular.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LogInController : ControllerBase
    {
        [HttpPost]
        public IActionResult verification([FromBody] Users ?Users)
        {
            // [Bind("Username,Password")] Users? Users -> 不確定 Post JSON 格式
            // https://blog.walterlv.com/post/use-postman-to-debug-asp-net-core-api.html
            // 必須吃 FromBody 物件才好處理
            //https://docs.microsoft.com/zh-tw/dotnet/standard/exceptions/how-to-use-the-try-catch-block-to-catch-exceptions
            try
            {
                var WB_LogIn = new Website_Background.Models.LogIn();
                var verificationInfo = "failure";
                verificationInfo = WB_LogIn.verification(Users.Username, Users.Password);
                // https://stackoverflow.com/questions/10286056/what-is-the-command-to-exit-a-console-application-in-c 
                return CreatedAtAction("verification", verificationInfo);

            }
            catch (Exception e)
            {
                return CreatedAtAction("verification", e.Message);
            }
            //return "success";
        }
    }
}
