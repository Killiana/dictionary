function displayWord(response) {
  console.log(response.data);
  console.log(response.data[0].word);
  let wordEl = document.querySelector("#word");
  wordEl.innerHTML = response.data[0].meanings[0];
}

function search(word) {
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  axios.get(apiUrl).then(displayWord);
}

function getWord(event) {
  event.preventDefault();
  let input = document.querySelector("#input");
  search(input.value);
}

let searchInput = document.querySelector("form");
searchInput.addEventListener("submit", getWord);
