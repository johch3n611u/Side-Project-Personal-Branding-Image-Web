using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Website_Background.Models;
using Dapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Website_Background.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class SiteReceptionController : ControllerBase
    {
        //// requires using Microsoft.Extensions.Configuration;
        //private readonly IConfiguration Configuration;
        //public SiteReceptionController(IConfiguration configuration)
        //{
        //    Configuration = configuration;
        //}

        //https://localhost:44367/
        // GET: api/SiteReception/5
        // https://websitebackground20200420071406.azurewebsites.net/api/SiteReception/GetPosts?id=1
        [HttpGet,Route("GetPosts")]
        public async Task<ActionResult<dynamic>> GetPosts(int id)
        {
            // ㊝㊝㊝㊝㊝ https://ithelp.ithome.com.tw/articles/10225378 ㊝㊝㊝㊝㊝
            // https://esofar.gitbooks.io/dapper-tutorial-cn/content/methods/query-first.html
            List<dynamic> result = new List<dynamic>();
             try
            {   
                using (var Connection = new Website_BackgroundContext().Database.GetDbConnection())
                {   
                    
                    switch (id)
                    {   
                        case 1:
                            // ㊀ aboutmepage 四篇內容，四張圖，四則純文字與文章 id (隨機選四篇)

                            //https://dotblogs.com.tw/skyline0217/2011/01/26/21063
                            //用於組合結果
                            List<dynamic> Combine = new List<dynamic>();

                            result = Connection.Query("SELECT id,sort,title,content_text,img_url,created_at FROM news").ToList();

                            int[] CheckRepeat = new int[4];  // 紀錄 4 個整數亂數
                            Random random = new Random(Guid.NewGuid().GetHashCode()); // https://ksjolin.pixnet.net/blog/post/150115680

                            // https://dotnetfiddle.net/Mobile?id=XVLAcH#code-editor
                            for (int i = 0; i <= 3; i++)
                            {
                                int RandomNumber = random.Next(result.Count) + 1; //產生 0 - result.count 亂數
                                bool same = false;      // 檢查亂數是否重複
                                foreach (int chkNum in CheckRepeat)  // 逐一檢查 CheckRepeat 陣列元素
                                {
                                    if (RandomNumber == chkNum) { same = true; break; }  //若相同就設 same = true 並離開迴圈
                                    if (chkNum == 0) { same = false; break; } //若是0代表沒亂數設 same = false 離開迴圈
                                }
                                if (same == false)
                                {  //若same= false;
                                    CheckRepeat[i] = RandomNumber; //將亂數存入陣列中
                                    Combine.Add(result[RandomNumber - 1]);
                                }
                                else
                                {
                                    i--;     //i減1重新產生亂數
                                }
                            }

                            result = Combine;
                            break;

                        case 2:
                            // ㊁ productspage 年份月份 sort 每年分月份文章數量 隨機渲染顏色 icon 與副標題小字與 id (年份月份或純年份依照整理出來的文章數量待訂)
                            result = Connection.Query("SELECT id,YEAR(created_at) AS year,MONTH(created_at) AS month  FROM news ORDER BY created_at ASC").ToList();
                            break;
                        case 3:
                            // ㊂ 所有文章數量 與 圖片連結與文章純文字與 id
                            result = Connection.Query("SELECT id,title,subtitle,content_text,img_url,CONVERT(VARCHAR,CONVERT(datetime,created_at),111) as created_at  FROM news ORDER BY created_at DESC").ToList();
                            break;

                        default:

                            result = null;
                            break;
                    }

                }
            }
            catch (InvalidCastException e)
            {
                Console.Write(e);
            }

            if (result == null)
            {
                return NotFound();
            }

            return result;
        }

    }
}