var log2console = require("dist/index");

describe("log2console Test suite", function() {
  describe("Calling log on a simple object", function () {
    var data;

    beforeEach(function() {
      data = {hello: "world"};
      log2console(data);
    });

    it("then data.handled is not set", function() {
      expect(data.handled).to.equal(undefined);
    });
  });

  describe("Calling log on an error", function () {
    var data;

    beforeEach(function() {
      data = new Error();
      log2console(data);
    });

    it("then data.handled is set", function() {
      expect(data.handled).to.equal(true);
    });
  });
});
