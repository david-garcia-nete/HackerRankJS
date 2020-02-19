// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
    var min = Number.MAX_VALUE;
    arr.sort();
    for(var i=0;i<arr.length-1;i++){
        var diff = arr[i]-arr[i+1];
        var abs = Math.abs(diff);
        if(abs<min) min = abs;
    }
   console.log(min);
}

var arr=[636651840, 845593958, 514430275, 950990774]
minimumAbsoluteDifference(arr);

