using System;
using System.Collections.Generic;

namespace Website_Background.Models
{
    public partial class News
    {
        public int Id { get; set; }
        public string Sort { get; set; }
        public string Title { get; set; }
        public string Subtitle { get; set; }
        public string ContentText { get; set; }
        public string ContentHtml { get; set; }
        public string ImgUrl { get; set; }
        public byte[] CreatedAt { get; set; }
    }
}
