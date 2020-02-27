
<?php

function whatFlavors($cost, $money) {
    $map = [];
    for($i=0; $i<count($cost);$i++){
        if($cost[$i] <= $money) {
            if(!array_key_exists($cost[$i], $map)) $map[$cost[$i]] = [];
            $map[$cost[$i]][]= $i; 
        }
    }
   
    $first; $second;
    foreach($map as $key => $value){
        $key = intval($key);
        $diff = $money - $key;
            if(array_key_exists($diff, $map)){
                $val = $map[$diff];
                if($key == $diff){
                    $first = $val[0];
                    $second = $val[1];
                } else{
                    $first = $map[$key];
                    $first = $first[0];
                    $second = $val[0];
                }
                $firstNext = $first + 1;
                $secondNext = $second + 1;
                if ($firstNext < $secondNext)
                echo($firstNext . ' ' . $secondNext . "\n");
                if ($secondNext < $firstNext)
                echo($secondNext . ' ' . $firstNext . "\n");
                return;
            } 
    }
}

$cost = [4, 3, 2, 5, 7];

whatFlavors($cost, 8);