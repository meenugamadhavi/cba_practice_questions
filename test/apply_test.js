import { assertEquals } from "jsr:@std/assert";
import { describe, it } from "jsr:@std/testing/bdd";
import { maxNumber } from "../src/apply.js";

describe("testing maxnumber function", () => {
  it("should return max number when there are multiple elements", () => {
    assertEquals(maxNumber([1, 2, 5, 3, 39, 34]), 39);
  });
  it("should return the single element when there is single element", () => {
    assertEquals(maxNumber([1]), 1);
  });
  it("should return 0 element when there is empty array", () => {
    assertEquals(maxNumber([0]), 0);
  });
});
