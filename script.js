// Дан масив чисел (положительных, отрицательных и в перемешку)
// Найти max, min, sum
// Залить на github решение
// Нельзя использовать методы массива, а только циклы for, while*
// Примеры массивов:

var a = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1],
 b = [-1,-8,-2],
 c = [1,7,3],
 d = [1,undefined,3,5,-3],
 e = [1,NaN,3,5,-3];


function res(date){
	var arr = date.filter(function(n){ return( !isNaN(n) ) });
	var max = Math.max.apply(Math,arr);
	var min = Math.min.apply(Math,arr);
	var sum =  Object.values(arr).reduce((a, b) => a + b);

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