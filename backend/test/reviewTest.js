const assert = require("assert");
const Review = require("./../models/reviewModel");
describe("Creating review", () => {
  it("creates a review", (done) => {
    const review = new Review({
      rating: 5,
      username:"pikachu",
      email: "pickachu@pokemon.com",
      description: "pikapika",
    });
    review.save().then(() => {
      assert(!review.isNew);
      done();
    });
  });
});
