<?php
function IsPrime($n) {
    for($x=2; $x<$n; $x++) {
      if($n % $x ==0) { return false;}
    } 
    return true;
}
$a = IsPrime(18);
echo $a ? 'This is a Prime Number.' :  'This is not a Prime Number.';
?>