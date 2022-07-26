let jokeContainer = document.getElementById('joke');
let getJokeBtn = document.getElementById('getJokeBtn');

async function jokeFunction() {
    let url = await fetch("https://excuser.herokuapp.com/v1/excuse/office/", {
        headers: {
            'Accept': 'application/json'
        }
    });

    const joke = await url.json();
    console.log(joke);

    jokeContainer.innerHTML = joke[0].excuse;
}
jokeFunction();
getJokeBtn.addEventListener('click', jokeFunction);