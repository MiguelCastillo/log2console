var index = require("dist/index");

describe("log2console Test suite", function() {
  describe("Calling log on a simple object", function () {
    var data;

    beforeEach(function() {
      data = {hello: "world"};
      index.log(data);
    });

    it("then data.handled is not set", function() {
      expect(data.handled).to.equal(undefined);
    });
  });

  describe("Calling log on an error", function () {
    var data;

    beforeEach(function() {
      data = new Error();
      index.log(data);
    });

    it("then data.handled is set", function() {
      expect(data.handled).to.equal(true);
    });
  });
});
