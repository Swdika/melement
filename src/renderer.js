math = require("mathjs");

const fs = require('fs');
let rawdata =fs.readFileSync("../tabl/STAS_M_R.json")
var materials = JSON.parse(rawdata);
const pi = math.pi;
const calculateButton = document.getElementById("calculate-button");
const qmaxText = document.getElementById("test-qmax");
const materialText = document.getElementById("materialsumm");
const diameterText = document.getElementById("test-diameter");
const moreText = document.getElementById("test-more");

calculateButton.addEventListener("click", () => {
	const qMax = math.unit(document.getElementById("qmax").value, 'N');
	const hMax = math.unit(document.getElementById("hmax").value, 'mm');
	const mater = document.getElementById("material").value;

	qmaxText.innerText = qMax;
	materialText.innerText = showMaterialStat(mater);
	diameterText.innerText = calculateDiameter(qMax);
	moreText.innerText = calculateFinite();
	console.log(materials);
});

const showMaterialStat = (value) => {
	//value = materials.[]
	return value;
	
};

const calculateDiameter = (qMax) => {

	
	const Tac = math.unit(60 ,'MPa');
	const beta = 1.3;
	return math.sqrt(math.divide((math.multiply(4,beta,qMax,)),math.multiply(pi,Tac)));
};

const calculateFinite = () => {


	return pi;
}
