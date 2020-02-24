function findEnd(sortedCost, money, start, end){
    var middle = (start + end)/2;
    if (sortedCost[middle] > money){
        if (sortedCost[middle-1] < money) return middle-1;
        return findEnd(sortedCost, money, middle+1, end);
    }
    if (sortedCost[middle] < money){
        if (sortedCost[middle+1] >= money) return middle;
        return findEnd(sortedCost, money, start, middle-1);
    }
    if (sortedCost[middle] == money){
        var i = middle;
        while(sortedCost[i] == money){
            i--;
        }
        return i;
    }

}

function printResult(cost, firstVal, secondVal){
    var firstIndex, secondIndex;
    for(var i = 0; i<cost.length; i++){
        if(cost[i]==firstVal) firstIndex = i;
        if(cost[i]==secondVal) secondIndex = i;
        if(firstIndex != null && secondIndex != null) break;
    }
    firstIndex = firstIndex + 1;
    secondIndex = secondIndex + 1;
    console.log(firstIndex  + ' ' + secondIndex);
}

// Complete the whatFlavors function below.
function whatFlavors(cost, money) {
var sortedCost = [];
for(var i = 0; i<cost.length; i++){
    sortedCost[i] = cost[i];
}
sortedCost.sort();
var start = 0;
var end = findEnd(sortedCost, money, start, cost.length-1);
while(1){
    if(sortedCost[start] + sortedCost[end] == money) break;
    if(sortedCost[start] + sortedCost[end] > money) end--;
    if(sortedCost[start] + sortedCost[end] < money) start++;
}
printResult(cost, sortedCost[start], sortedCost[end]);
}



var cost = [1, 4, 5, 3, 2];

whatFlavors(cost, 4);

