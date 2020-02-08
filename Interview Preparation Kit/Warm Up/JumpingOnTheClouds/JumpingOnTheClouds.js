function jumpingOnClouds(c) {
var min, closeMin, farMin; 
var i = 0, s = 0;
closeMin = jumpingOnCloudsRec(c, i+1, s+1);
farMin = jumpingOnCloudsRec(c, i+2, s+1);
min = Math.min(closeMin, farMin);
return min;
}

function jumpingOnCloudsRec(c, i, s) {
var min, closeMin, farMin;     
if((c[i*2]==1)||((i*2)>(c.length-1)))return Number.MAX_VALUE;
closeMin = jumpingOnCloudsRec(c, i+1, s+1);
farMin = jumpingOnCloudsRec(c, i+2, s+1);
min = Math.min(closeMin, farMin);
if (closeMin==Number.MAX_VALUE&&farMin==Number.MAX_VALUE){
    return s;
}else{
    return min;
}
}



var c = '0 0 1 0 0 1 0';

var result = jumpingOnClouds(c);

console.log(result);