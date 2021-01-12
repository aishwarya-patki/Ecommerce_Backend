const assert = require("assert");
const User = require("./../models/userModel"); //imports the Pokemon model.
describe("Creating user", () => {
  it("creates a user", (done) => {
    const user = new User({
      username: "Pickachu",
      email: "pickachu@pokemon.com",
      password: "pikapika",
    });
    user.save().then(() => {
      assert(!user.isNew);
      done();
    });
  });
});
