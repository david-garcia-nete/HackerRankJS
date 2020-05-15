function merge(arr, left, right){
    var nLeft = left.length;
    var nRight = right.length;
    var i = 0; var j = 0; var k = 0;
    while(i < nLeft && j < nRight){
        if(left[i] <= right[j]){
            arr[k] = left[i];
            i++;
        }else{
            arr[k] = right[j];
            j++;
        }
        k++;
    }
    while(i < nLeft){
        arr[k] = left[i];
        i++; k++;
    }
    while(j < nRight){
        arr[k] = right[j];
        j++; k++;
    }
}

function mergeSort(arr){
    var n = arr.length;
    if(n < 2) return;
    var mid = Math.floor(n/2);
    var left = []; var right = [];
    for(var i = 0; i < mid; i++){    
    

        left[i] = arr[i];
    }
    for(var i = mid; i < n; i++){
        right[i-mid] = arr[i];
    }
    mergeSort(left);
    mergeSort(right);
    merge(arr, left, right);
    
}

var arr = [3,1,5,2,6,9,8,4,7,0];
mergeSort(arr);
console.log(arr);


