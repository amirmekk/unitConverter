/* 1 km: 0.62137119 mi ============== 1 mile: 1.609344 km 
1 pound = 0.45359237 kilograms ====== 1 kilogram = 2.20462262 pounds
F = C × 9/5 + 32 ==================== or F = T(°C) × 1.8 + 32 
 */
 

var firstInput = document.getElementById('firstInput') , secondInput = document.getElementById("secondInput") ,
 firstVar , secondVar , weightButton = document.getElementById('weightButton') , firstText = document.getElementById('firstText')
 secondText = document.getElementById("secondText"); 
	
	firstInput.oninput = fromKtoM ;
	secondInput.oninput = fromMtoK ;
 
function fromKtoM(){
	secondInput.value =  (Math.round(parseFloat(firstInput.value) * 0.62137119 * 100) /100) || 0   ;
};
function fromMtoK(){
	firstInput.value =  (Math.round(parseFloat(secondInput.value) * 1.609344 * 100) /100) || 0  ;
};
function fromKtoP(){
	secondInput.value =  (Math.round(parseFloat(firstInput.value) * 2.20462262 * 100) /100) || 0   ;
};
function fromPtoK(){
	firstInput.value =  (Math.round(parseFloat(secondInput.value) * 0.45359237 * 100) /100) || 0  ;
};
function fromCtoF(){
	secondInput.value =  ((Math.round(parseFloat(firstInput.value) * 1.8 + 32)  * 100) /100) || 0   ;
}; 
function fromFtoC(){
	firstInput.value =  (((Math.round(parseFloat(secondInput.value)-32) / 1.8) * 100) /100) || 0  ;
};

function change(){
	if( firstText.innerHTML === 'Kilometers' || firstText.innerHTML === "Celsius") {
		firstText.innerHTML = 'Kilograms' ;
		secondText.innerHTML = "Pounds" ;
	weightButton.innerHTML = "kilometers/Miles" ;
	firstInput.oninput = fromKtoP ;
	secondInput.oninput = fromPtoK ;
	firstInput.value = '' ;
	secondInput.value = '' ;
	
	} else if(firstText.innerHTML === 'Kilograms') {
		firstText.innerHTML = 'Kilometers' ;
		secondText.innerHTML = "Miles" ;
	weightButton.innerHTML = "kilograms/pounds" ;
	firstInput.oninput = fromKtoM ;
	secondInput.oninput = fromMtoK;
	firstInput.value = '' ;
	secondInput.value = '' ;
	} 
	
} ;
function changedigree(){
	if(firstText.innerHTML == 'Kilometers' || firstText.innerHTML == 'Kilograms' ){
		firstText.innerHTML = 'Celsius' ;
		secondText.innerHTML = "Fahrenheit";
		firstInput.oninput = fromCtoF ;
		secondInput.oninput = fromFtoC ;
	}
};
$('#weightButton').on('click' , change)  ;
$("#digreeButton").on("click" , changedigree);
// This is the clear button function
$('#clear').on('click' , function(){
	firstInput.value = '' ;
	secondInput.value = '' ;
} ) ;
// end of clear button job :)

