const ian = {
    firstName: "Ian",
    lastName: "Hall",
    edu1: "Bachelor of Arts in English",
    edu2: "Master of Fine Arts in Creative Writing"
}

const heading = document.getElementById("heading");
heading.innerHTML = `${ian.firstName + ' ' + ian.lastName}`;


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 