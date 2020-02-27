// Complete the whatFlavors function below.
function whatFlavors(cost, money) {
    var map = {};
    for(var i=0; i<cost.length;i++){
        if(cost[i] <= money) {
            map[cost[i]] = [];
            map[cost[i]].push(i); 
        }
    }
    var first, second;
    for(var key in map){
        key = parseInt(key);
        var diff = money - key;
            if(diff in map){
                var val = map[diff];
                if(key == diff){
                    first = val[0];
                    second = val[1];
                } else{
                    first = map[key];
                    first = first[0];
                    second = val[0];
                }
 
                var firstNext = first + 1;
                var secondNext = second + 1;
                console.log(firstNext + ' ' + secondNext);
                return;
            } 
    }
}




var cost = [2, 2, 4, 3];

whatFlavors(cost, 4);

