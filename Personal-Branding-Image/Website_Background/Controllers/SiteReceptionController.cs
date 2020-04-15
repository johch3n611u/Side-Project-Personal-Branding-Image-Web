using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Website_Background.Models;

namespace Website_Background.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SiteReceptionController : ControllerBase
    {
        //https://localhost:44367/
        public Website_BackgroundContext WB_Context = new Website_BackgroundContext();

        // GET: api/SiteReception/5
        [HttpGet("{id}")]
        public async Task<ActionResult<News>> GetNews(int id)
        {
            var news = await WB_Context.News.FindAsync(id);

            if (news == null)
            {
                return NotFound();
            }

            return news;
        }

    }
}