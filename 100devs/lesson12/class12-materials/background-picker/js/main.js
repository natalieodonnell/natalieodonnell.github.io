"use strict";

document.getElementById('purple').onclick = function () {
  document.querySelector('body').style.backgroundColor = "rgba(241,63,247,1)";
  document.querySelector('body').style.color = "white";
};
document.getElementById('green').onclick = partyGreen;
document.getElementById('blue').onclick = partyBlue;
document.getElementById('red').onclick = partyRed;



function partyGreen() {
  document.querySelector('body').style.backgroundColor = "rgba(0,253,81,1)";
  document.querySelector('body').style.color = "white";
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = "rgba(0,254,255)";
  document.querySelector('body').style.color = "white";
}

function partyRed() {
  document.querySelector('body').style.backgroundColor = "red";
  document.querySelector('body').style.color = "white";

}


function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);