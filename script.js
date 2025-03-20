const joke = document.getElementById('joke');
const btn = document.querySelector('.Btn');
const loader = document.querySelector('.loader');
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
  joke.style.display = "none"; // Hide joke while loading
  loader.style.display = "block"; // Show loader

  fetch(url)
    .then(data => data.json())
    .then(item => {
      joke.innerText = item.joke;
      joke.classList.add("fade");

      loader.style.display = "none"; // Hide loader after fetching
      joke.style.display = "block"; // Show joke
    })
    .catch(error => {
      joke.innerText = "Oops! Something went wrong.";
      joke.style.display = "block";
      loader.style.display = "none";
      console.error("Error fetching joke:", error);
    });
};

btn.addEventListener("click", getJoke);
getJoke();
