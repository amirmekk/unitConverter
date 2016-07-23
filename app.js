/* 1 km: 0.62137119 mi
1 mile: 1.609344 km 
1 pound = 0.45359237 kilograms
1 kilogram = 2.20462262 pounds
 */
 

var firstInput = document.getElementById('firstInput') , secondInput = document.getElementById("secondInput") ,
 firstVar , secondVar , weightButton = document.getElementById('weightButton') ; 
	
	firstInput.oninput = fromKtoM ;
	secondInput.oninput = fromMtoK ;
 
function fromKtoM(){
	var firstVar = 0.62137119 ;
	secondInput.value =  (Math.round(parseFloat(firstInput.value) * firstVar * 100) /100) || 0   ;
};
function fromMtoK(){
	var secondVar = 1.609344 ;
	firstInput.value =  (Math.round(parseFloat(secondInput.value) * secondVar * 100) /100) || 0  ;
};
function fromKtoP(){
	var firstVar = 0.45359237 ;
	secondInput.value =  (Math.round(parseFloat(firstInput.value) * firstVar * 100) /100) || 0   ;
};
function fromPtoK(){
	var secondVar = 2.20462262 ;
	firstInput.value =  (Math.round(parseFloat(secondInput.value) * secondVar * 100) /100) || 0  ;
};


function change(){
	if(firstInput.placeholder === 'Enter kilometers here') {
	firstInput.placeholder = 'Enter kilograms here' ;
	secondInput.placeholder = 'Enter pounds here' ;
	weightButton.innerHTML = "kilometers/Miles" ;
	firstInput.oninput = fromKtoP ;
	secondInput.oninput = fromPtoK ;
	
	} else if(firstInput.placeholder ===  'Enter kilograms here') {
	firstInput.placeholder = 'Enter kilometers here' ;
	secondInput.placeholder = 'Enter miles here' ;	
	weightButton.innerHTML = "kilograms/pounds" ;
	firstInput.oninput = fromKtoM ;
	secondInput.oninput = fromMtoK ;
	} 
	
} ;
$('#weightButton').on('click' , change)  ;
$('#clear').on('click' , function(){
	firstInput.value = '' ;
	secondInput.value = '' ;
} )

