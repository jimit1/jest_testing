const { add, minus, multiply, divide, power } = require("../util/util");

describe("Add", () => {
  describe("Success", () => {
    it("Should return the sum of the 2 passed arguments", () => {
      expect(add(2, 2)).toBe(4);
    });
  });
  describe("Fail", () => {
    it("Should throw an error if 1st argument isn't a string", () => {
      expect(() => add("2", 2)).toThrowError();
    });
    it("Should throw an error if 2nd argument isn't a string", () => {
      expect(() => add(2, "2")).toThrowError();
    });
    it("Should throw an error if no arguments are received", () => {
      expect(() => add()).toThrowError();
    });
  });
});

describe("Minus", () => {
  describe("Success", () => {
    it("Should return the difference of the 2 passed arguments", () => {
      expect(minus(6, 2)).toBe(4);
    });
  });
  describe("Fail", () => {
    it("Should throw an error if 1st argument isn't a string", () => {
      expect(() => minus("2", 2)).toThrowError();
    });
    it("Should throw an error if 2nd argument isn't a string", () => {
      expect(() => minus(2, "2")).toThrowError();
    });
    it("Should throw an error if no arguments are received", () => {
      expect(() => minus()).toThrowError();
    });
  });
});

describe("Multiply", () => {
  describe("Success", () => {
    it("Should return the multiplication of the 2 passed arguments", () => {
      expect(multiply(6, 2)).toBe(12);
    });
  });
  describe("Fail", () => {
    it("Should throw an error if 1st argument isn't a string", () => {
      expect(() => multiply("2", 2)).toThrowError();
    });
    it("Should throw an error if 2nd argument isn't a string", () => {
      expect(() => multiply(2, "2")).toThrowError();
    });
    it("Should throw an error if no arguments are received", () => {
      expect(() => multiply()).toThrowError();
    });
  });
});

describe("divide", () => {
  describe("Success", () => {
    it("Should return the division of the 2 passed arguments", () => {
      expect(divide(6, 2)).toBe(3);
    });
  });
  describe("Fail", () => {
    it("Should throw an error if 1st argument isn't a string", () => {
      expect(() => divide("2", 2)).toThrowError();
    });
    it("Should throw an error if 2nd argument isn't a string", () => {
      expect(() => divide(2, "2")).toThrowError();
    });
    it("Should throw an error if no arguments are received", () => {
      expect(() => divide()).toThrowError();
    });
  });
});

describe("power", () => {
  describe("Success", () => {
    it("Should return the power of the 2 passed arguments", () => {
      expect(power(4, 2)).toBe(16);
    });
  });
  describe("Fail", () => {
    it("Should throw an error if 1st argument isn't a string", () => {
      expect(() => power("2", 2)).toThrowError();
    });
    it("Should throw an error if 2nd argument isn't a string", () => {
      expect(() => power(2, "2")).toThrowError();
    });
    it("Should throw an error if no arguments are received", () => {
      expect(() => power()).toThrowError();
    });
  });
});
