var firstInput = document.getElementById('firstInput') , secondInput = document.getElementById("secondInput") ,
	firstVar , secondVar , weightButton = document.getElementById('weightButton') , firstText = document.getElementById('firstText')
	secondText = document.getElementById("secondText"); 
// the calculating functions of Distance
function fromKtoM(){
	secondInput.value =  (Math.round(parseFloat(firstInput.value) * 0.62137119 * 100) /100) || 0   ;
};
function fromMtoK(){
	firstInput.value =  (Math.round(parseFloat(secondInput.value) * 1.609344 * 100) /100) || 0  ;
};
function fromCtoI(){
	secondInput.value =  (Math.round(parseFloat(firstInput.value) / 2.54  * 100) /100) || 0   ;
};
function fromItoC(){
	firstInput.value =  (Math.round(parseFloat(secondInput.value)  * 2.54  * 100) /100) || 0  ;
};
function fromMtoY(){
	secondInput.value =  (Math.round(parseFloat(firstInput.value) * 1.0936 * 100) /100) || 0   ;
};
function fromYtoM(){
	firstInput.value =  (Math.round(parseFloat(secondInput.value) / 1.0936 * 100) /100) || 0  ;
};
function fromMtoF(){
	secondInput.value =  (Math.round(parseFloat(firstInput.value) / 0.3048 * 100) /100) || 0   ;
};
function fromFtoM(){
	firstInput.value =  (Math.round(parseFloat(secondInput.value) * 0.3048 * 100) /100) || 0  ;
};
function fromCtoFe(){
	secondInput.value =  (Math.round(parseFloat(firstInput.value) / 30.48 * 100) /100) || 0   ;
};
function fromFetoC(){
	firstInput.value =  (Math.round(parseFloat(secondInput.value) * 30.48 * 100) /100) || 0  ;
};
function fromItoF(){
	secondInput.value =  (Math.round(parseFloat(firstInput.value) / 12 * 100) /100) || 0   ;
};
function fromFtoI(){
	firstInput.value =  (Math.round(parseFloat(secondInput.value) * 12 * 100) /100) || 0  ;
};
// the calculating functions of weight
function fromKtoP(){
	secondInput.value =  (Math.round(parseFloat(firstInput.value) * 2.20462262 * 100) /100) || 0   ;
};
function fromPtoK(){
	firstInput.value =  (Math.round(parseFloat(secondInput.value) * 0.45359237 * 100) /100) || 0  ;
};
function fromKtoO(){
	secondInput.value =  (Math.round(parseFloat(firstInput.value) / 0.02834952 * 100) /100) || 0   ;
};
function fromOtoK(){
	firstInput.value =  (Math.round(parseFloat(secondInput.value) * 0.02834952 * 100) /100) || 0  ;
};
function fromGtoO(){
	secondInput.value =  (Math.round(parseFloat(firstInput.value) / 28.34952 * 100) /100) || 0   ;
};
function fromOtoG(){
	firstInput.value =  (Math.round(parseFloat(secondInput.value) * 28.34952 * 100) /100) || 0  ;
};
function fromPtoO(){
	secondInput.value =  (Math.round(parseFloat(firstInput.value) * 16 * 100) /100) || 0   ;
};
function fromOtoP(){
	firstInput.value =  (Math.round(parseFloat(secondInput.value) /16 * 100) /100) || 0  ;
};

// the calculating functions of  digree / temprature
function fromCtoF(){
	secondInput.value =  ((Math.round(parseFloat(firstInput.value) * 1.8 + 32)  * 100) /100) || 0   ;
}; 
function fromFtoC(){
	firstInput.value =  (((Math.round(parseFloat(secondInput.value)-32) / 1.8) * 100) /100) || 0  ;
};
function fromFtoK(){
	secondInput.value =  (((Math.round(parseFloat(firstInput.value) + 459.67) * (5/9))  * 100) /100) || 0   ;
}; 
function fromKtoF(){
	firstInput.value =  ((((Math.round(parseFloat(secondInput.value)) *(5/9) - 459.67)) * 100) /100) || 0  ;
};
function fromKtoC(){
	secondInput.value =  ((Math.round(parseFloat(firstInput.value) - 273.15)  * 100) /100) || 0   ;
}; 
function fromCtoK(){
	firstInput.value =  (((Math.round(parseFloat(secondInput.value)) + 273.15) * 100) /100) || 0  ;
};
// calculating functions of other
function fromRtoD(){
	secondInput.value =  (Math.round(parseFloat(firstInput.value) * 180 / Math.PI * 100) /100) || 0   ;
}; 
function fromDtoR(){
	firstInput.value =  (Math.round(parseFloat(secondInput.value) * Math.PI / 180  * 100) /100) || 0  ;
};
function fromMtoKp(){
	secondInput.value =  (Math.round(parseFloat(firstInput.value) * 1.609346 * 100) /100) || 0   ;
}; 
function fromkptoM(){
	firstInput.value =  ((Math.round(parseFloat(secondInput.value)) * 0.621371  * 100) /100) || 0  ;
};
function fromLtoG(){
	secondInput.value =  (Math.round(parseFloat(firstInput.value) * 0.26417  * 100) /100) || 0   ;
}; 
function fromGtoL(){
	firstInput.value =  (((Math.round(parseFloat(secondInput.value)) * 3.78541178) * 100) /100) || 0  ;
};

// other functions 
function changeOther(){
	firstText.innerHTML = 'Radian' ;
	secondText.innerHTML = "Degree" ;
	firstInput.oninput = fromRtoD ;
	secondInput.oninput = fromDtoR ;
	firstInput.value = '' ;
	secondInput.value = '' ;
}; 
function changeOther1(){
	firstText.innerHTML = 'MpH' ;
	secondText.innerHTML = "KpH" ;
	firstInput.oninput = fromMtoKp ;
	secondInput.oninput = fromkptoM ;
	firstInput.value = '' ;
	secondInput.value = '' ;
}; 
function changeOther2(){
	firstText.innerHTML = 'Liter' ;
	secondText.innerHTML = "Gallon" ;
	firstInput.oninput = fromLtoG ;
	secondInput.oninput = fromGtoL ;
	firstInput.value = '' ;
	secondInput.value = '' ;
}; 

// weight functions 
function change(){
	firstText.innerHTML = 'Kilograme' ;
	secondText.innerHTML = "Pound" ;
	firstInput.oninput = fromKtoP ;
	secondInput.oninput = fromPtoK ;
	firstInput.value = '' ;
	secondInput.value = '' ;
} ;
function change1(){
	firstText.innerHTML = 'Kilograme' ;
	secondText.innerHTML = "Ounce" ;
	firstInput.oninput = fromKtoO ;
	secondInput.oninput = fromOtoK ;
	firstInput.value = '' ;
	secondInput.value = '' ;
} ;
function change2(){
	firstText.innerHTML = 'Gram' ;
	secondText.innerHTML = "Ounce" ;
	firstInput.oninput = fromGtoO ;
	secondInput.oninput = fromOtoG ;
	firstInput.value = '' ;
	secondInput.value = '' ;
} ;
function change3(){
	firstText.innerHTML = 'Pound' ;
	secondText.innerHTML = "Ounce" ;
	firstInput.oninput = fromPtoO ;
	secondInput.oninput = fromOtoP ;
	firstInput.value = '' ;
	secondInput.value = '' ;
} ;
// distance functions 
function changeDistance(){
		firstText.innerHTML = 'Kilometer' ;
		secondText.innerHTML = "Mile";
		firstInput.oninput = fromKtoM ;
		secondInput.oninput = fromMtoK ;
		firstInput.value = '' ;
		secondInput.value = '' ;
};
function changeDistance1(){
		firstText.innerHTML = 'Centimeter' ;
		secondText.innerHTML = "Inch";
		firstInput.oninput = fromCtoI ;
		secondInput.oninput = fromItoC ;
		firstInput.value = '' ;
		secondInput.value = '' ;
};
function changeDistance2(){
		firstText.innerHTML = 'Meter' ;
		secondText.innerHTML = "Yard";
		firstInput.oninput = fromMtoY ;
		secondInput.oninput = fromYtoM ;
		firstInput.value = '' ;
		secondInput.value = '' ;
};
function changeDistance3(){
		firstText.innerHTML = 'Meter' ;
		secondText.innerHTML = "Feet";
		firstInput.oninput = fromMtoF ;
		secondInput.oninput = fromFtoM ;
		firstInput.value = '' ;
		secondInput.value = '' ;
};
function changeDistance4(){
		firstText.innerHTML = 'Centimeter' ;
		secondText.innerHTML = "Feet";
		firstInput.oninput = fromCtoFe ;
		secondInput.oninput = fromFetoC ;
		firstInput.value = '' ;
		secondInput.value = '' ;
};
function changeDistance5(){
		firstText.innerHTML = 'Inch' ;
		secondText.innerHTML = "Feet";
		firstInput.oninput = fromItoF ;
		secondInput.oninput = fromFtoI ;
		firstInput.value = '' ;
		secondInput.value = '' ;
};
// digree functions 
function changeDigree(){
		firstText.innerHTML = 'Celsius' ;
		secondText.innerHTML = "Fahrenheit";
		firstInput.oninput = fromCtoF ;
		secondInput.oninput = fromFtoC ;
		firstInput.value = '' ;
		secondInput.value = '' ;
};
function changeDigree1(){
	firstText.innerHTML = 'Fahrenheit' ;
		secondText.innerHTML = "Kelvin";
		firstInput.oninput = fromFtoK ;
		secondInput.oninput = fromKtoF ;
		firstInput.value = '' ;
		secondInput.value = '' ;
} ;
function changeDigree2(){
	firstText.innerHTML = 'Kelvin' ;
		secondText.innerHTML = "Celecuis";
		firstInput.oninput = fromKtoC ;
		secondInput.oninput = fromCtoK ;
		firstInput.value = '' ;
		secondInput.value = '' ;
} ;

// when clicking buttons this functions get called
// distance button 
$("#distanceButton").on("click" , changeDistance) ;
$("#distanceButton1").on("click" , changeDistance1) ;
$("#distanceButton2").on("click" , changeDistance2) ;
$("#distanceButton3").on("click" , changeDistance3) ;
$("#distanceButton4").on("click" , changeDistance4) ;
$("#distanceButton5").on("click" , changeDistance5) ;

// digree buttons 
$("#digreeButton").on("click" , changeDigree);
$("#digreeButton1").on("click" , changeDigree1);
$("#digreeButton2").on("click" , changeDigree2);

// weight buttons
$('#weightButton').on('click' , change)  ;
$('#weightButton1').on('click' , change1)  ;
$('#weightButton2').on('click' , change2)  ;
$('#weightButton3').on('click' , change3)  ;

// other buttons
$('#otherButton').on('click' , changeOther)  ;
$('#otherButton1').on('click' , changeOther1)  ;
$('#otherButton2').on('click' , changeOther2)  ;

// This is the clear button function
$('#clear').on('click' , function(){
	firstInput.value = '' ;
	secondInput.value = '' ;
} ) ;

// initital Config is km/mile
	firstInput.oninput = fromKtoM ;
	secondInput.oninput = fromMtoK ;

