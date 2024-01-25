import { Repository } from "../../models/Repository";
import {
  getLastUpdatedRepos,
  getTopFive,
  sortDataByDate,
} from "../../scripts/functions";
import { data } from "../fixtures/data";
import { data2 } from "../fixtures/data2";

describe("getLastUpdatedRepos", () => {
  let completeData: Repository[];
  beforeEach(() => {
    completeData = [...data];
  });

  describe("When an array is valid", () => {
    test("returns an array with the latest updated repos", () => {
      expect(getLastUpdatedRepos(completeData)).toEqual([
        {
          name: "repo7",
          stargazers_count: 4,
          updated_at: "2026-11-18T12:00:00Z",
        },
        {
          name: "repo6",
          stargazers_count: 10,
          updated_at: "2025-11-18T12:00:00Z",
        },
        {
          name: "repo5",
          stargazers_count: 9,
          updated_at: "2024-11-18T12:00:00Z",
        },
        {
          name: "Hrepo4",
          stargazers_count: 3,
          updated_at: "2023-11-18T12:00:00Z",
        },
        {
          name: "repo3",
          stargazers_count: 1,
          updated_at: "2022-11-18T12:00:00Z",
        },
      ]);
    });
    test("returns an array with the top five repos", () => {
      expect(getTopFive(completeData)).toEqual([
        {
          name: "repo1",
          stargazers_count: 10,
          updated_at: "2020-11-18T12:00:00Z",
        },
        {
          name: "hrepo2",
          stargazers_count: 5,
          updated_at: "2021-11-18T12:00:00Z",
        },
        {
          name: "repo3",
          stargazers_count: 1,
          updated_at: "2022-11-18T12:00:00Z",
        },
        {
          name: "Hrepo4",
          stargazers_count: 3,
          updated_at: "2023-11-18T12:00:00Z",
        },
        {
          name: "repo5",
          stargazers_count: 9,
          updated_at: "2024-11-18T12:00:00Z",
        },
      ]);
    });
    test("returns an array with data sorted by date", () => {
      expect(sortDataByDate(completeData)).toEqual([
        {
          name: "repo7",
          stargazers_count: 4,
          updated_at: "2026-11-18T12:00:00Z",
        },
        {
          name: "repo6",
          stargazers_count: 10,
          updated_at: "2025-11-18T12:00:00Z",
        },
        {
          name: "repo5",
          stargazers_count: 9,
          updated_at: "2024-11-18T12:00:00Z",
        },
        {
          name: "Hrepo4",
          stargazers_count: 3,
          updated_at: "2023-11-18T12:00:00Z",
        },
        {
          name: "repo3",
          stargazers_count: 1,
          updated_at: "2022-11-18T12:00:00Z",
        },
        {
          name: "hrepo2",
          stargazers_count: 5,
          updated_at: "2021-11-18T12:00:00Z",
        },
        {
          name: "repo1",
          stargazers_count: 10,
          updated_at: "2020-11-18T12:00:00Z",
        },
      ]);
    });
  });
  describe("When an array is filled with just 3 items", () => {
    test("returns the complete array", () => {
      expect(getTopFive(data2)).toEqual([
        {
          name: "repo1",
          stargazers_count: 10,
          updated_at: "2020-11-18T12:00:00Z",
        },
        {
          name: "repo2",
          stargazers_count: 5,
          updated_at: "2021-11-18T12:00:00Z",
        },
        {
          name: "repo3",
          stargazers_count: 1,
          updated_at: "2022-11-18T12:00:00Z",
        },
      ]);
    });
  });
  //TEST FOR EMPTY, UNDEFINED AND NULL ARRAYS

  describe("When an array is empty", () => {
    test("returns an empty array", () => {
      expect(getLastUpdatedRepos([])).toEqual([]);
    });
  });
});
