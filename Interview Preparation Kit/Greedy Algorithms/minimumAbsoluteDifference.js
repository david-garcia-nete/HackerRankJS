function createPairs(arr){
    var pairArray = [];
    for(var i=0;i<arr.length;i++){
        for(var j = 0; j<arr.length;j++){
            if(i!=j)pairArray.push({'x':arr[i], 'y':arr[j]});
        }
    }
return pairArray;
}

// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
    var min = Number.MAX_VALUE;
    var pairArray = createPairs(arr);
    for(var value of pairArray){
        var diff = value['x']-value['y'];
        var abs = Math.abs(diff);
        if(abs<min)min = abs;
    }
    console.log(min);
}

var arr=[3, -7, 0];

minimumAbsoluteDifference(arr);

