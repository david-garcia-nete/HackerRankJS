<?php

function connectChildren($i, $cityObs, &$roadCount){
    $cityObs[$i]->visited = true;
    for($j = 0; $j < count($cityObs[$i]->children); $j++){
        if($cityObs[$cityObs[$i]->children[$j]]->visited == false){              
            connectChildren($cityObs[$i]->children[$j], $cityObs, $roadCount);
            $roadCount++;
        }
    }
}

class City {
    public $children;
    public $visited;

    function _construct(){
        $this->children = [];
        $this->visited = false;
    }
}

// Complete the roadsAndLibraries function below.
function roadsAndLibraries($n, $c_lib, $c_road, $cities) {
    $cityObs = []; $roadCount = 0; $libCount = 0;
    for($i = 1; $i <= $n; $i++){
        $cityObs[$i] = new City;
    }
    for($i = 0; $i < count($cities); $i++){
        $cityObs[$cities[$i][0]]->children[]= $cities[$i][1];
        $cityObs[$cities[$i][1]]->children[]= $cities[$i][0];
    }
    for($i = 1; $i<= $n; $i++){
        if($cityObs[$i]->visited == false){
            connectChildren($i, $cityObs, $roadCount);
            $libCount++;
        }
    }
    if($n * $c_lib < $roadCount * $c_road + $libCount * $c_lib){
        return $n * $c_lib;
    }else{
        return $roadCount * $c_road + $libCount * $c_lib;
    }
}

$cities = [[1 , 2], [3 , 1], [2 , 3]];
echo roadsAndLibraries(3, 2, 1, $cities);
