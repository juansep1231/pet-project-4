import {
  getReposAlphabetically,
  sortDataAlphabetically,
} from "../../scripts/functions";

import { data } from "../fixtures/data";
describe("getReposAlphabetically", () => {
  describe("When an array is valid", () => {
    test("returns an array with repos sorted alphabetically and without repos that starts with letter h", () => {
      expect(getReposAlphabetically(data)).toEqual([
        {
          name: "repo1",
          stargazers_count: 10,
          updated_at: "2020-11-18T12:00:00Z",
        },
        {
          name: "repo3",
          stargazers_count: 1,
          updated_at: "2022-11-18T12:00:00Z",
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
        {
          name: "repo7",
          stargazers_count: 4,
          updated_at: "2026-11-18T12:00:00Z",
        },
      ]);
    });
    test("returns an array with repos sorted alphabetically", () => {
      expect(sortDataAlphabetically(data)).toEqual([
        {
          name: "hrepo2",
          stargazers_count: 5,
          updated_at: "2021-11-18T12:00:00Z",
        },
        {
          name: "Hrepo4",
          stargazers_count: 3,
          updated_at: "2023-11-18T12:00:00Z",
        },
        {
          name: "repo1",
          stargazers_count: 10,
          updated_at: "2020-11-18T12:00:00Z",
        },
        {
          name: "repo3",
          stargazers_count: 1,
          updated_at: "2022-11-18T12:00:00Z",
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
        {
          name: "repo7",
          stargazers_count: 4,
          updated_at: "2026-11-18T12:00:00Z",
        },
      ]);
    });
  });

  describe("When an array is empty", () => {
    test("returns an empty array", () => {
      expect(getReposAlphabetically([])).toEqual([]);
    });
  });
});
