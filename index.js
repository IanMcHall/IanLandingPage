
const ian = {
  firstName: "Ian",
  lastName: "Hall",
  altName: "I. M. Hall",
  edu1: "Bachelor of Arts in English",
  edu1Short: "BA",
  edu2: "Master of Fine Arts in Creative Writing",
  edu2Short: "MFA",
};

const heading = document.getElementById("heading");
heading.innerHTML = `${ian.altName}`;

window.onload = function () {
  fetchQuote();
};

function fetchQuote() {
  const url = "https://zenquotes.io/api/today";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayQuote(data);
    })
    .catch((error) => {
      console.error("Error fetching programming quote:", error);
    });
}

function displayProgrammingQuote(data) {
  document.getElementById("api_quote").innerText =
    data.en + "\n- " + data.author;
}
