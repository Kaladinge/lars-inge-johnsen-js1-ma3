// question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const resultContainer = document.querySelector(".results");

async function games() {
    try {
    const response = await fetch(url);
    const result = await response.json();

    const results = result.results;

    resultContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {

        if (i === 8) {
            break;
        }

        resultContainer.innerHTML += `<div class="resultbox">
                                    <h4>${results[i].name}</h4>
                                    <p>rating: ${results[i].rating}</p>
                                    <p>number of tags: ${results[i].tags.length}</p>
                                    <div>`
                                    
    }
    } catch (error) {
        resultContainer.innerHTML = `<div id="error">Something went wrong.</div>`;
    } finally {
        resultContainer.innerHTML += ` <a href="#">To other games</a>`;
    }
}

games();