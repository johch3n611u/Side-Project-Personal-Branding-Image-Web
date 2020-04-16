using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Website_Background.Models;
using Dapper;
using Microsoft.EntityFrameworkCore;

namespace Website_Background.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SiteReceptionController : ControllerBase
    {
        //https://localhost:44367/
        // GET: api/SiteReception/5
        [HttpGet("{id}")]
        public async Task<ActionResult<News>> GetNews(int id)
        {
            // ㊝㊝㊝㊝㊝ https://ithelp.ithome.com.tw/articles/10225378 ㊝㊝㊝㊝㊝
            // https://esofar.gitbooks.io/dapper-tutorial-cn/content/methods/query-first.html
            using (var Connection = new Website_BackgroundContext().Database.GetDbConnection()) {
            
            
            
            
            
            
            
            





            
            }

            //var news = await news;

            //if (news == null)
            //{
            //    return NotFound();
            //}


            return NotFound() /*news*/;
        }

    }
}