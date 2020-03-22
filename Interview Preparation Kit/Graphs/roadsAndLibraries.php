<?php

function connectChildren($i, &$cityObs, &$roadCount){
    $toVisit = [];
    $toVisit[]= $cityObs[$i];
    $cityObs[$i]->visited = true;
    $roadCount++;
    for($j = 0; $j < count($cityObs[$i]->children); $j++){
        $toVisit[]= $cityObs[$cityObs[$i]->children[$j]];
    }
    while(count($toVisit) > 0){
        $city = array_pop($toVisit);
        $cityObs[$city->number]->visited = true;
        for($k = 0; $k < count($cityObs[$city->number]->children); $k++){
            if($cityObs[$cityObs[$city->number]->children[$k]]->visited == false){
                $toVisit[]= $cityObs[$cityObs[$city->number]->children[$k]];
                $roadCount++;
            }
        } 
    }   
}

class City {
    public $children = []; 
    public $visited = false; 
    public $number = null;
}

// Complete the roadsAndLibraries function below.
function roadsAndLibraries($n, $c_lib, $c_road, $cities) {
    $cityObs = []; $roadCount = 0; $libCount = 0;
    for($i = 1; $i <= $n; $i++){
        $cityObs[$i] = new City;
        $cityObs[$i]->number = $i;
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

$cities = [[1, 2], [3, 1], [2, 3]];
echo roadsAndLibraries(3, 2, 1, $cities);