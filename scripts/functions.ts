import axios from "axios";

import { Repository as Repository, GitHubResponse } from "../models/Repository";

const API_URL = "https://api.github.com/orgs/stackbuilders/repos";

const checkEmptyData = (dataArray: GitHubResponse[]): boolean =>
  dataArray === undefined || dataArray === null || dataArray.length <= 0;

const getData = async (): Promise<GitHubResponse[] | undefined> => {
  try {
    const response = await axios.get<GitHubResponse[]>(API_URL);
    if (checkEmptyData(response.data)) return undefined;
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// FUCNTIONS TO RETURN THE REPOS WITH MORE THAN FIVE STARS

export const getArrayOfData = async (): Promise<Repository[]> => {
  const data = await getData();

  return (
    data?.map((repo) => ({
      name: repo.name,
      stargazers_count: repo.stargazers_count,
      updated_at: repo.updated_at,
    })) || []
  );
};

export const getReposMoreThanFiveStars = (
  dataArray: Repository[]
): Repository[] => dataArray.filter((repo) => repo.stargazers_count > 5);

// FUCNTIONS TO RETURN THE 5 LAST UPDATED REPOS

export const getLastUpdatedRepos = (dataArray: Repository[]): Repository[] => {
  const sortedData = sortDataByDate(dataArray);
  return getTopFive(sortedData);
};

export const getTopFive = (dataArray: Repository[]): Repository[] =>
  dataArray.slice(0, 5);

export const sortDataByDate = (dataArray: Repository[]): Repository[] =>
  dataArray.sort(
    (a, b) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );

//FUNCTION TO GET THE SUM OF ALL REPOS STARS

export const getSumOfReposStars = (dataArray: Repository[]): number => {
  return dataArray.reduce((acc, repo) => acc + repo.stargazers_count, 0);
};

//FUNCTIONS TO GET THE TOP 5 REPOS WITH MORE STARS

export const getMostStarredRepos = (dataArray: Repository[]): Repository[] => {
  const sortedData = sortDataByStarGazers(dataArray);
  return getTopFive(sortedData);
};

export const sortDataByStarGazers = (dataArray: Repository[]): Repository[] =>
  dataArray.sort((a, b) => b.stargazers_count - a.stargazers_count);

//FUNCTIONS TO GET REPOS ALPHABETICALLY AND THAT ITS NAME DOESNT START WITH LETTER "H"

export const getReposAlphabetically = (
  dataArray: Repository[]
): Repository[] => {
  const sortedData = sortDataAlphabetically(dataArray);
  return sortedData.filter((repo) => repo.name[0].toLowerCase() !== "h");
};

export const sortDataAlphabetically = (dataArray: Repository[]): Repository[] =>
  dataArray.sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
  );
