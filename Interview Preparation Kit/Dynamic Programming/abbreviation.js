function isUppercase(x){
    var upAlph='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(var i = 0; i < upAlph.length; i++){
        if(x == upAlph[i]) return true;
    }
    return false;
}

function toUppercase(x){
    var p = 0; var lowAlph = 'abcdefghijklmnopqrstuvwxyz';
    while(p < lowAlph.length){
        if(x == lowAlph[p]){
            break;
        }else{
            p++;
        }
    }
    if(p == 26) return x;  
    var upAlph='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return upAlph[p];
}

// Complete the abbreviation function below.
function abbreviation(a, b) {
    var aP = 0; var bP = 0;
    while(aP < a.length && bP < b.length){
        if(a[aP] == b[bP] || toUppercase(a[aP]) == b[bP]){
            aP++; bP++;
        }else{
             if(isUppercase(a[aP])) return 'NO';
            aP++;
        }
    }
    while(aP < a.length){
        if(isUppercase(a[aP])) return 'NO';
        aP++;
    }
    if(bP > b.length-1){
        return 'YES';
    }else{
        return 'NO';
    }
}

a = 'BFZZVHdQYHQEMNEFFRFJTQmNWHFVXRXlGTFNBqWQmyOWYWSTDSTMJRYHjBNTEWADLgHVgGIRGKFQSeCXNFNaIFAXOiQORUDROaNoJPXWZXIAABZKSZYFTDDTRGZXVZZNWNRHMvSTGEQCYAJSFvbqivjuqvuzafvwwifnrlcxgbjmigkms';
b = 'BFZZVHQYHQEMNEFFRFJTQNWHFVXRXGTFNBWQOWYWSTDSTMJRYHBNTEWADLHVGIRGKFQSCXNFNIFAXOQORUDRONJPXWZXIAABZKSZYFTDDTRGZXVZZNWNRHMSTGEQCYAJSF';
console.log(abbreviation(a, b)); // Expected YES //Actual NO
