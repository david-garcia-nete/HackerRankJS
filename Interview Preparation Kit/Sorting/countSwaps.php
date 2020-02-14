
<?php
function swap ($first, $second, $a, $j){
$a[$j+1]=$first;
$a[$j]=$second;
return $a;

}

function printInfo($numSwaps, $first, $last){
echo "Array is sorted in " . $numSwaps . " swaps.\n";
echo "First Element: " . $first . "\n";
echo "Last Element: " . $last . "\n";

}

// Complete the countSwaps function below.
function countSwaps($a) {
$n = count($a); $first; $last;
$numSwaps = 0;
for($i = 0; $i<$n;$i++){
    for($j = 0;$j<$n-1;$j++){
        if($a[$j]>$a[$j+1]){
            $a=swap($a[$j], $a[$j+1], $a, $j);
            $numSwaps ++;
        }
        if($i==$n-1 && $j==0)$first=$a[0];
        if($i==$n-1 && $j==$n-2)$last = $a[$n-1];
    }
}
printInfo($numSwaps, $first, $last);
}
$a = [6,4,1];

 countSwaps($a);