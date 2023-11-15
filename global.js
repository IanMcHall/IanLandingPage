const ian = {
    firstName: "Ian",
    lastName: "Hall",
    altName: "I. M. Hall",
    edu1: "Bachelor of Arts in English",
    edu1Short: "BA",
    edu2: "Master of Fine Arts in Creative Writing",
    edu2Short: "MFA"
}

const heading = document.getElementById("heading");
heading.innerHTML = `${ian.altName}`;


function openMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 