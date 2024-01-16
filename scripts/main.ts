import { getArrayOfData, getFilteredsStargazers } from "./functions";

getArrayOfData().then((data) => {
  console.log(getFilteredsStargazers(data));
});
