using System.Linq;

namespace Website_Background.Models
{
    public class SingIn
    {

        //https://stackoverflow.com/questions/12870478/how-to-convert-vb-net-function-to-c
        public string verification(string Username, string Password)
        {

            var users = new Users();
            var verificationInfo = "failure";
            var queryPassword = "";

            //https://blog.darkthread.net/blog/ef-core-notes-4/
            //https://docs.microsoft.com/zh-tw/ef/ef6/querying/

            using (var WB_Context = new Website_BackgroundContext())
            {
                queryPassword = WB_Context.Users
                    .Where(Users => Users.Username == Username)
                    .FirstOrDefault().Password;
                if (queryPassword == Password)
                {
                    verificationInfo = "success";
                }

            };

            return verificationInfo;
        }

    }
}
