function maxSubsetSumRec(arr, jumpDest, runningSum, memo) {
    var max = Number.MIN_VALUE;
    if(jumpDest > arr.length-1) return runningSum;
    var j = 2;
    while(1){
        var runningSumNew = runningSum;
        runningSumNew += arr[jumpDest];
        if(runningSumNew > max) max = runningSumNew;
        var jumpDestNew = jumpDest + j;
        var key = jumpDestNew + ', ' + runningSumNew;
        if (key in memo){
            var subMax = memo[key];
        } else {
            var subMax = maxSubsetSumRec(arr, jumpDestNew, runningSumNew, memo);
            memo[key] = subMax;
        }
        if(subMax > max) max = subMax; 
        if(jumpDestNew > arr.length-1) break;
        j++;
    }
    return max;
}

// Complete the maxSubsetSum function below.
function maxSubsetSum(arr) {
    var max = Number.MIN_VALUE;
    var memo = {};
    for(var i = 0; i<arr.length; i++){
        var j = 2;
        while(1){
           var runningSum = 0;
           runningSum += arr[i];
           var jumpDest = i + j;
           var key = jumpDest + ', ' + runningSum;
           if (key in memo){
               var subMax = memo[key];
           } else {
               var subMax = maxSubsetSumRec(arr, jumpDest, runningSum, memo);
               memo[key] = subMax;
           }
           if(subMax > max) max = subMax; 
           if(jumpDest > arr.length-1) break;
           j++;
        }
    } 
    return max;
}

var arr = [3, 7, 4, 6, 5];

maxSubsetSum(arr);



