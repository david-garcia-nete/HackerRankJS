function createMap(magazine){
    var map = {};
    for(var value of magazine){
        if(!(value in map)){
            map[value]=1;
        }else{
            map[value]+=1;
        }
    }
    return map;
}


// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    var map = createMap (magazine);
    for (var value of note){
        if(!(value in map)){
            console.log('No');
            return;
        }else{
            if(map[value]>0){
                map[value]--;
            }else{
                console.log('No');
                return;
            }
        }
    }
    console.log('Yes');
    return;
}


var magazine = ['give', 'me', 'one', 'grand', 'today', 'night'];
var note = ['two', 'times', 'two', 'is', 'four'];


//var result = checkMagazine(magazine, note);

//console.log(result);