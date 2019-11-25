const utils = require('../app/bookshop_utils');
describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });
  test("returns 0.6 when passed 0.5", () => {
    expect(utils.addVAT(0.5)).toBe(0.6);
  });
});
// getFullName test
describe("utils.getFullName", () => {
  test("returns Alex Nicolaides when passed Alex and Nicolaides", () => {
    expect(utils.getFullName("Alex", "Nicolaides")).toBe("Alex Nicolaides");
  });
});
// makeHalfPrice test
describe("utils.makeHalfPrice", () => {
  test("returns 5 when passed 10", () => {
    expect(utils.makeHalfPrice(10)).toBe(5);
  });
});
// countBooks test
describe("utils.countBooks", () => {
  test("returns total number of books", () => {
    expect(utils.countBooks(["Gone With the Wind", "Harry Potter", "The Notebook", "Rumplestiltskin"])).toBe(4);
  });
});
// isInStock test
describe("utils.isInStock", () => {
  test("returns true if the book is in stock", () => {
    const book = {
      title: "The Stone Diaries",
      author: "Carol Sheilds",
      yearOfPublication: 1993,
      quantity: 9
    };
    expect(utils.isInStock(book)).toBe(true);
  });
  // OUT OF STOCK
  test("returns false if the book is out of stock", () => {
    const book = {
      title: "The Notebook",
      author: "Nicholas Sparks",
      yearOfPublication: 1996,
      quantity: 0
    };
    expect(utils.isInStock(book)).toBe(false);
  });
});
describe("utils.getTotalOrderPrice", () => {
  test("returns total price with VAT", () => {
    expect(utils.getTotalOrderPrice(15, 3)).toBe(54);
  });
});