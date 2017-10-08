// v1 
console.info("v1.3");
var a = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1],
 b = [-1,-8,-2,"111"],
 c = [1,7,3 , "text"],
 d = [1,undefined,3,5,-3],
 e = [1,NaN,3,5,-3];


function res(data){

var new_arr = [];

	for(var i = 0; i < data.length; i++){
	  if(Number.isInteger(data[i])){

			new_arr.push(data[i]);

	}
}   

	// console.log(new_arr);
	var max = Math.max.apply(Math,new_arr);
	var min = Math.min.apply(Math,new_arr);
	var sum =  Object.values(new_arr).reduce((a, b) => a + b);

	return {
		'max': max,
		'min': min,
		'sum': sum
	}

};

console.table(res(a));
console.table(res(b));
console.table(res(c));
console.table(res(d));
console.table(res(e));


// ///////////////////////////
// v2 
// ///////////////////////////
console.info("v2");

var a_v2 = [3,"1112",0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1,"1112"],
 b_v2 = [-1,-8,-2,"1112"],
 c_v2 = [1,7,3],
 d_v2 = [1,undefined,3,5,-3],
 e_v2 = [1,"1112",NaN,"1112",3,5,-3];

function res_v2(data){

	var max = Number.NEGATIVE_INFINITY ;
	var min= Number.POSITIVE_INFINITY ;
	var sum = 0;
  
	for(var i = 0; i < data.length; i++){
	  if(Number.isInteger(data[i])){
	  	if(max < data[i]) max = data[i]; 
	    if(min > data[i]) min = data[i];
	    sum = sum + data[i];    
	  }
	}
	 return {
    'max': max,
    'min': min,
    'sum': sum
    }

}
	
console.log(res_v2(a_v2));
console.log(res_v2(b_v2));
console.log(res_v2(c_v2));
console.log(res_v2(d_v2));
console.log(res_v2(e_v2));