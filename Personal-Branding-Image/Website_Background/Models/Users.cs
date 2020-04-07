using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Website_Background.Models
{
    public partial class Users
    {
        [DisplayName("使用者編號")]
        public int Id { get; set; }
        [DisplayName("使用者名稱")]
        public string Username { get; set; }
        [DisplayName("使用者密碼")]
        public string Password { get; set; }
        [DisplayName("建立時間")]
        public byte[] CreatedAt { get; set; }
    }
}
