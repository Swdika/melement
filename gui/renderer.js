const calculateButton = document.getElementById("calculate-button");
const diameterText = document.getElementById("test-diameter");
const radiusText = document.getElementById("test-radius");

calculateButton.addEventListener("click", () => {
	const inputValue = document.getElementById("diameter").value;

	diameterText.innerText = inputValue;
	radiusText.innerText = calculatedResult(inputValue);
});

const calculatedResult = (value) => {
	// TODO implement logic

	return parseFloat(value)/2;
};


