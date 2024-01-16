import {
  getArrayOfData,
  getReposMoreThanFiveStars,
  getLastUpdatedRepos,
  getSumOfReposStars,
  getMostStarredRepos,
} from "./functions";

getArrayOfData().then((data) => {
  console.log(getReposMoreThanFiveStars(data));
  console.log(getLastUpdatedRepos(data));
  console.log(getSumOfReposStars(data));
  console.log(getMostStarredRepos(data));
});
