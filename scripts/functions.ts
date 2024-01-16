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

export const getFilteredsStargazers = (
  dataArray: IRepository[] | []
): IRepository[] => {
  return dataArray.filter((repo) => repo.stargazers_count > 5);
};
