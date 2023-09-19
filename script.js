var startButton = document.getElementById("start");
var resetButton = document.getElementById("reset");
var toggleButton = document.getElementById("toggle-formula");
var v0 = document.getElementById("v0");
var coef = document.getElementById("coef");
var answerContainer = document.querySelector(".answer-container");
var answer = document.getElementById("answer");
var formula = document.querySelector(".formula-container");
var g = 9.8;
startButton.onclick = function() {
	var v0Value = parseFloat(v0.value);
	var coefValue = parseFloat(coef.value);
	var distance = (v0Value * v0Value) / (2 * coefValue * 9.8);
	answerContainer.style.visibility = "visible";
	if (distance == Infinity) {
	  answer.innerHTML = "бесконечно";
	} else {
	  answer.innerHTML = distance.toString();
	}
}

resetButton.onclick = function() {
	v0.value = 0;
	coef.value = 0;
	mass.value = 0;
	answerContainer.style.visibility = "hidden";
	answer.innerHTML = "";
}

toggleButton.onclick = function() {
	if (toggleButton.getAttribute("value") === "0") {
		toggleButton.innerHTML = "<u>Скрыть формулу</u>";
		toggleButton.setAttribute("value", "1");
		formula.style.visibility = "visible";
	} else if (toggleButton.getAttribute("value") === "1") {
		toggleButton.innerHTML = "<u>Показать формулу</u>";
		formula.style.visibility = "hidden";
		toggleButton.setAttribute("value", "0");
	}
}