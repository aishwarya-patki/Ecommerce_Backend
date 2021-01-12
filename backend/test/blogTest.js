const assert = require("assert");
const Blog = require("./../models/blogModel");
describe("Creating blog", () => {
  it("creates a blog", (done) => {
    const blog = new Blog({
      username:"pikachu",
      email: "pickachu@pokemon.com",
      title:"Meowth",
      description: "pikapika",
      date:"Fri Sep 16 2011 19:05:17 GMT+0900 (JST)"
    });
    blog.save().then(() => {
      assert(!blog.isNew);
      done();
    });
  });
});
