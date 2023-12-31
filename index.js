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

  fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => displayQuote(data))
    .catch((error) => {
      console.error("Error fetching programming quote:", error);
    });
}

function displayQuote(data) {
  console.log(data);
  document.getElementById(
    "api_quote"
  ).innerText = `"${data[6].text}" -Carl Sandburg`;
}
