let jokeContainer = document.getElementById('joke');
let getJokeBtn = document.getElementById('getJokeBtn');

getJokeBtn.addEventListener('click', async() => {
    let url = await fetch("https://excuser.herokuapp.com/v1/excuse/office/", {
        headers: {
            'Accept': 'application/json'
        }
    });

    const joke = await url.json();
    console.log(joke.excuse);

    jokeContainer.innerHTML = joke['id'];
});