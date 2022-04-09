const config = require("./databaseConfig.js");
const sql = require("mssql");

async function getBlogs() {
  try {
    let pool = await sql.connect(config);
    let blogs = await pool.request().query("SELECT * from dbo.blogs");
    return blogs.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getBlog(blogId) {
  try {
    let pool = await sql.connect(config);
    let blog = await pool
      .request()
      .input("input_parameter", sql.Int, blogId)
      .query("SELECT * from dbo.blogs where BlogId = @input_parameter");
    return blog.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function submitBlog(blog) {
  try {
    let pool = await sql.connect(config);
    let addblog = await pool
      .request()
      .input("BlogName", sql.VarChar, blog.BlogName)
      .input("BlogShortDesc", sql.VarChar, blog.BlogShortDesc)
      .input("Blog", sql.VarChar, blog.Blog)
      .query("insert into dbo.Blogs values(@BlogName,@BlogShortDesc,@Blog)");
    return addblog.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function updateBlog(id, blog) {
  try {
    let pool = await sql.connect(config);
    let updateblog = await pool
      .request()
      .input("BlogId", sql.Int, id)
      .input("BlogName", sql.VarChar, blog.BlogName)
      .input("BlogShortDesc", sql.VarChar, blog.BlogShortDesc)
      .input("Blog", sql.VarChar, blog.Blog)
      .query(
        "update dbo.Blogs set BlogName=@BlogName, BlogShortDesc=@BlogShortDesc, Blog=@Blog where BlogID=@BlogId"
      );
    return updateblog.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function deleteBlog(blogId) {
  try {
    let pool = await sql.connect(config);
    let deleteblog = await pool
      .request()
      .input("BlogId", sql.Int, blogId)
      .query("delete from dbo.Blogs where BlogID=@BlogId");
    return deleteblog.recordsets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getBlogs: getBlogs,
  getBlog: getBlog,
  submitBlog: submitBlog,
  deleteBlog: deleteBlog,
  updateBlog: updateBlog,
};
