using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Website_Background.Models;

namespace Website_Background.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        //// requires using Microsoft.Extensions.Configuration;
        //static IConfiguration Configuration;
        //public NewsController(IConfiguration configuration) {
        //    Configuration = configuration;
        //}

        //https://localhost:44367/
        // Postman https://websitebackground20200420071406.azurewebsites.net/api/News/GetNewsAll
        public Website_BackgroundContext WB_Context = new Website_BackgroundContext();
        // GET: api/News
        [HttpGet, Route("GetNewsAll")]
        public async Task<ActionResult<IEnumerable<News>>> GetNews()
        {
            return await WB_Context.News.ToListAsync();
        }

        // GET: api/News/5
        // Postman https://websitebackground20200420071406.azurewebsites.net/api/News/GetNews?id=1
        [HttpGet, Route("GetNews")]
        public async Task<ActionResult<News>> GetNews(int id)
        {
            var news = await WB_Context.News.FindAsync(id);

            if (news == null)
            {
                return NotFound();
            }

            return news;
        }

        // PUT: api/News/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        // https://websitebackground20200420071406.azurewebsites.net/api/News/PutNews?id=
        [HttpPut, Route("PutNews")]
        public async Task<IActionResult> PutNews(int id,News news)
        {
            if (id != news.Id)
            {
                return BadRequest();
            }

            news.CreatedAt = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");

            WB_Context.Entry(news).State = EntityState.Modified;

            try
            {
                await WB_Context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NewsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/News
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        // https://websitebackground20200420071406.azurewebsites.net/api/News/PostNews
        [HttpPost, Route("PostNews")]
        public async Task<ActionResult<News>> PostNews(News news)
        {
            WB_Context.News.Add(news);
            await WB_Context.SaveChangesAsync();

            return CreatedAtAction("GetNews", new { id = news.Id }, news);
        }

        // DELETE: api/News/5
        [HttpDelete, Route("DeleteNews")]
        public async Task<ActionResult<News>> DeleteNews(int id)
        {
            var news = await WB_Context.News.FindAsync(id);
            if (news == null)
            {
                return NotFound();
            }

            WB_Context.News.Remove(news);
            await WB_Context.SaveChangesAsync();

            return news;
        }

        private bool NewsExists(int id)
        {
            return WB_Context.News.Any(e => e.Id == id);
        }
    }
}
