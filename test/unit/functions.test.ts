import { Repository } from "../../models/Repository";
import {
  getReposMoreThanFiveStars,
  getLastUpdatedRepos,
  getTopFive,
  sortDataByDate,
  getSumOfReposStars,
  getMostStarredRepos,
  sortDataByStarGazers,
  getReposAlphabetically,
  sortDataAlphabetically,
} from "../../scripts/functions";

import { data } from "../fixtures/data";
import { data2 } from "../fixtures/data2";

let completeData: Repository[]; // Replace YourDataType with the actual type of your data
beforeEach(() => {
  completeData = [...data];
});
describe("getReposMoreThanFiveStars", () => {
  describe("When an array is valid", () => {
    test("returns an array with repos with more than 5 stars", () => {
      expect(getReposMoreThanFiveStars(completeData)).toEqual([
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
  }),
    //TEST FOR EMPTY ARRAY

    describe("When an array is empty", () => {
      test("returns an empty array", () => {
        expect(getReposMoreThanFiveStars([])).toEqual([]);
      });
    });
});

describe("getLastUpdatedRepos", () => {
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
    }),
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
      }),
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
  }),
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
    }),
    //TEST FOR EMPTY, UNDEFINED AND NULL ARRAYS

    describe("When an array is empty", () => {
      test("returns an empty array", () => {
        expect(getLastUpdatedRepos([])).toEqual([]);
      });
    });
});

describe("getSumOfReposStars", () => {
  describe("When an array is valid", () => {
    test("returns the sum of all the repos stars", () => {
      expect(getSumOfReposStars(completeData)).toEqual(42);
    });
  });

  describe("When an array is empty", () => {
    test("returns an empty array", () => {
      expect(getSumOfReposStars([])).toEqual(0);
    });
  });
});

describe("getMostStarredRepos", () => {
  describe("When an array is valid", () => {
    test("returns an array with the most starred repos", () => {
      expect(getMostStarredRepos(completeData)).toEqual([
        {
          name: "repo1",
          stargazers_count: 10,
          updated_at: "2020-11-18T12:00:00Z",
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
          name: "hrepo2",
          stargazers_count: 5,
          updated_at: "2021-11-18T12:00:00Z",
        },
        {
          name: "repo7",
          stargazers_count: 4,
          updated_at: "2026-11-18T12:00:00Z",
        },
      ]);
    }),
      test("returns an array with data sorted by stars", () => {
        expect(sortDataByStarGazers(completeData)).toEqual([
          {
            name: "repo1",
            stargazers_count: 10,
            updated_at: "2020-11-18T12:00:00Z",
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
            name: "hrepo2",
            stargazers_count: 5,
            updated_at: "2021-11-18T12:00:00Z",
          },
          {
            name: "repo7",
            stargazers_count: 4,
            updated_at: "2026-11-18T12:00:00Z",
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
  }),
    //TEST FOR EMPTY ARRAY

    describe("When an array is empty", () => {
      test("returns an empty array", () => {
        expect(getMostStarredRepos([])).toEqual([]);
      });
    });
});

describe("getReposAlphabetically", () => {
  describe("When an array is valid", () => {
    test("returns an array with repos sorted alphabetically and without repos that starts with letter h", () => {
      expect(getReposAlphabetically(completeData)).toEqual([
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
    }),
      test("returns an array with repos sorted alphabetically", () => {
        expect(sortDataAlphabetically(completeData)).toEqual([
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
