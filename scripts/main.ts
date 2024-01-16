import {
  getArrayOfData,
  getReposMoreThanFiveStars,
  getLastUpdatedRepos,
  getSumOfReposStars, // Import the missing function
} from "./functions";

getArrayOfData().then((data) => {
  console.log(getReposMoreThanFiveStars(data));
  console.log(getLastUpdatedRepos(data));
  console.log(getSumOfReposStars(data));
});
