import {
  getArrayOfData,
  getReposMoreThanFiveStars,
  getLastUpdatedRepos,
  getSumOfReposStars,
  getMostStarredRepos,
  getReposAlphabetically,
} from "./functions";

getArrayOfData().then((data) => {
  console.log(getReposMoreThanFiveStars(data));
  console.log(getLastUpdatedRepos(data));
  console.log(getSumOfReposStars(data));
  console.log(getMostStarredRepos(data));
  console.log(getReposAlphabetically(data));
});
