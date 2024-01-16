import axios from "axios";

import { IRepository } from "../models/Repository";

const API_URL = "https://api.github.com/orgs/stackbuilders/repos";

const getData = async (): Promise<any> => {
  try {
    const response = await axios.get(API_URL);
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};

// FUCNTIONS TO RETURN THE REPOS WIHT MORE THAN FIVE STARS

export const getArrayOfData = async (): Promise<IRepository[]> => {
  const data = await getData();

  return data.map((repo: any) => {
    return {
      name: repo.name,
      stargazers_count: repo.stargazers_count,
      updated_at: repo.updated_at,
    };
  });
};

export const getReposMoreThanFiveStars = (
  dataArray: IRepository[]
): IRepository[] | [] => {
  return dataArray.filter((repo) => repo.stargazers_count > 5);
};

// FUCNTIONS TO RETURN THE 5 LAST UPDATED REPOS

export const getLastUpdatedRepos = (
  dataArray: IRepository[]
): IRepository[] | [] => {
  const sortedData = sortDataByDate(dataArray);
  return getTopFive(sortedData);
};

const getTopFive = (dataArray: IRepository[]): IRepository[] | [] => {
  return dataArray.slice(0, 5);
};

const sortDataByDate = (dataArray: IRepository[]): IRepository[] | [] => {
  return dataArray.sort(
    (a, b) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );
};

//FUNCTION TO GET THE SUM OF ALL REPOS STARS

export const getSumOfReposStars = (dataArray: IRepository[]): number | [] => {
  return dataArray.reduce((acc, repo) => acc + repo.stargazers_count, 0);
};
