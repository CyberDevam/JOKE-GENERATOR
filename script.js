const joke = document.getElementById('joke');
const btn = document.getElementById('btn');
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

let getJoke = () =>{
  joke.classList.remove("fade");
  fetch(url)
  .then(data => data.json())
  .then(item => {
    joke.innerText = `${item.joke}`;
    joke.classList.add("fade");
  });
}
btn.addEventListener("click", getJoke);
getJoke();