using System;
using System.Collections.Generic;

namespace Website_Background.Models
{
    public partial class Users
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public byte[] CreatedAt { get; set; }
    }
}
