// question 3

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

async function games() {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
}