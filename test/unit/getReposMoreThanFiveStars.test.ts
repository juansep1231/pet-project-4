import { getReposMoreThanFiveStars } from "../../scripts/functions";
import { data } from "../fixtures/data";

describe("getReposMoreThanFiveStars", () => {
  describe("When an array is valid", () => {
    test("returns an array with repos with more than 5 stars", () => {
      expect(getReposMoreThanFiveStars(data)).toEqual([
        {
          name: "repo1",
          stargazers_count: 10,
          updated_at: "2020-11-18T12:00:00Z",
        },
        {
          name: "repo5",
          stargazers_count: 9,
          updated_at: "2024-11-18T12:00:00Z",
        },
        {
          name: "repo6",
          stargazers_count: 10,
          updated_at: "2025-11-18T12:00:00Z",
        },
      ]);
    });
  });
  //TEST FOR EMPTY ARRAY

  describe("When an array is empty", () => {
    test("returns an empty array", () => {
      expect(getReposMoreThanFiveStars([])).toEqual([]);
    });
  });
});
