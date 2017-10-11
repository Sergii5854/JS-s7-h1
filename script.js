// v1 
console.info("v1.4");
var a = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1],
 b = [-1,-8,-2,"111"],
 c = ["111",undefined,1,7.2,3 , "text"],
 d = ["111",1,undefined,3,5,-3],
 e = [1,NaN,3,5,-3];


function res(data){

var new_arr = [];

	for(var i = 0; i < data.length; i++){
		  if( typeof (data[i]) !== 'string' && !isNaN(data[i])){

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
console.info("v2.7");

var a_v2 = [3,"1112",0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1,"1112"],
 b_v2 = [-1,-8,-2,"1112"],
 c_v2 = [1,7,3],
 d_v2 = [1,undefined,3,5,-3],
 e_v2 = [1,"1112",NaN,"1112",3,5,-3],
 f_v2 = ['1',1.23, 'undefined', 'qwe'],
 j_v2 = [undefined, 'test'];


function res_v2(data){ 

	var max = null ;
	var min = null ;
	var sum = null;
  
	for(var i = 0; i < data.length; i++){
	  
	  if( !isNaN(data[i]) && typeof (data[i]) === 'number'){
	  	if(max < data[i] || max === null ) max = data[i]; 
	    if(min > data[i] || min === null ) min = data[i];
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
console.log(res_v2(f_v2));
console.log(res_v2(j_v2));