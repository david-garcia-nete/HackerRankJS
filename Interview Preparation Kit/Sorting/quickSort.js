function swap(arr, a, b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function partition(arr, start, end){
    var pivot = arr[end];
    var pIndex = start;
    for(var i = start; i < end; i++){
        if(arr[i] <= pivot){
            swap(arr, i, pIndex);
            pIndex++;
        }
    }
    swap(arr, pIndex, end);
    return pIndex;
}

function quickSort(arr, start, end){
    if(start > end) return;
    var pIndex = partition(arr, start, end); 
    quickSort(arr, start, pIndex - 1);
    quickSort(arr, pIndex + 1 , end);
    
}

var arr = [3,1,5,2,6,9,8,4,7,0];
quickSort(arr, 0, 9);
console.log(arr);
