﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

namespace Website_Background.Models
{
    public partial class Website_BackgroundContext : DbContext
    {
        public Website_BackgroundContext()
        {
        }

        //// requires using Microsoft.Extensions.Configuration;
        //private readonly IConfiguration Configuration;
        //public Website_BackgroundContext(IConfiguration configuration)
        //{
        //    Configuration = configuration;
        //}

        public Website_BackgroundContext(DbContextOptions<Website_BackgroundContext> options)
            : base(options)
        {
        }

        public virtual DbSet<News> News { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                //var ConnectionStrings = Configuration["ConnectionStrings:DefaultConnection"];
                //optionsBuilder.UseSqlServer(ConnectionStrings);

                optionsBuilder.UseSqlServer("Server=tcp:website-background.database.windows.net,1433;Initial Catalog=WebsiteBackground_db;Persist Security Info=False;User ID=liu;Password=Z0912089608k;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<News>(entity =>
            {
                entity.ToTable("news");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ContentHtml)
                    .HasColumnName("content_html")
                    .HasColumnType("ntext");

                entity.Property(e => e.ContentText)
                    .HasColumnName("content_text")
                    .HasColumnType("ntext");

                entity.Property(e => e.CreatedAt)
                    .IsRequired()
                    .HasColumnName("created_at")
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasDefaultValueSql("(CONVERT([varchar],getdate(),(120)))");

                entity.Property(e => e.ImgUrl)
                    .HasColumnName("img_url")
                    .HasColumnType("ntext");

                entity.Property(e => e.Sort)
                    .HasColumnName("sort")
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnType("nvarchar");

                entity.Property(e => e.Subtitle)
                    .HasColumnName("subtitle")
                    .HasMaxLength(150)
                    .IsUnicode(false)
                    .HasColumnType("nvarchar");

                entity.Property(e => e.Title)
                    .HasColumnName("title")
                    .HasMaxLength(150)
                    .IsUnicode(false)
                    .HasColumnType("nvarchar");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.ToTable("users");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CreatedAt)
                    .IsRequired()
                    .HasColumnName("created_at")
                    .IsRowVersion()
                    .IsConcurrencyToken();

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
