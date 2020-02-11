function getSum(i,j,arr){
    var sum = arr[i-1][j-1]+arr[i-1][j]+arr[i-1][j+1]+arr[i][j]+arr[i+1][j-1]+arr[i+1][j]+arr[i+1][j+1];
    return sum;
}


function checkInBounds(i,j,arr){
    if(i-1>=0 && j-1>=0 && i+1<arr.length && j+1<arr[0].length){
        return true;
    }else{
        return false;
    }
}

function hourglassSum(arr) {
var maxSum = Number.MAX_VALUE*-1;
for(var i = 0;i<arr.length;i++){
    for(var j = 0;j<arr[0].length;j++){
        var inBounds = checkInBounds(i,j,arr);
        if(inBounds){
            var tempSum = getSum(i,j,arr);
            if(tempSum>maxSum)maxSum=tempSum;
        }
    }
}
return maxSum;
}


var arr=[];
arr[0] = [-1, -1, 0, -9, -2, -2];
arr[1] = [-2, -1, -6, -8, -2, -5];
arr[2] = [-1, -1, -1, -2, -3, -4];
arr[3] = [-1, -9, -2, -4, -4, -5];
arr[4] = [-7, -3, -3, -2, -9, -9];
arr[5] = [-1, -3, -1, -2, -4, -5];


var result = hourglassSum(arr);

console.log(result);