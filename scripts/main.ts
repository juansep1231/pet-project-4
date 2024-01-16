import {
  getArrayOfData,
  getReposMoreThanFiveStars,
  getLastUpdatedRepos,
} from "./functions";

getArrayOfData().then((data) => {
  console.log(getReposMoreThanFiveStars(data));
  console.log(getLastUpdatedRepos(data));
});
