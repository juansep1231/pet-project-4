import { getSumOfReposStars } from "../../scripts/functions";
import { data } from "../fixtures/data";

describe("getSumOfReposStars", () => {
  describe("When an array is valid", () => {
    test("returns the sum of all the repos stars", () => {
      expect(getSumOfReposStars(data)).toEqual(42);
    });
  });

  describe("When an array is empty", () => {
    test("returns an empty array", () => {
      expect(getSumOfReposStars([])).toEqual(0);
    });
  });
});
