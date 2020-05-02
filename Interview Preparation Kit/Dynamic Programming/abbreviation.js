class Node {
    constructor(str){
        this.str = str;
        this.leftChild;
        this.rightChild;
    }
}

class Letter {
    constructor(char){
        this.val = char;
        this.convert = false;
    }
}

class Tree{
    constructor(a, b){
        this.b = b; 
        this.cans = [];
        var arr =[];
        for(var i = 0; i < a.length; i++){
            arr.push(new Letter(a[i]));
        }
        this.root = new Node(arr);
        this.createTree(this.root, 0);
    }
    createTree(root, i){
        if(i>root.str.length-1){
            if(this.allCaps(root.str)) this.cans.push(root.str);
            return;
        }
        if(this.isLowercase(root.str[i])){
            root.leftChild = new Node (this.deleteIndex(i, root.str));
            root.rightChild = new Node (this.toUppercase(i, root.str));
            if(root.leftChild.str) this.createTree(root.leftChild, i);
            delete root.leftChild;
            if(root.rightChild.str) this.createTree(root.rightChild, i+1);
            delete root.rightChild;
        }else{
            this.createTree(root, i+1);
        }
    }
    deleteIndex(i, str){
        var copy = [];
        for(var j = 0; j<str.length; j++){
            if(j!=i)copy.push(str[j]);
        }
        return copy;
    }
    toUppercase(i, str){
        var copy = [];
        for(var j = 0; j<str.length; j++){
            if(j!=i){
                copy.push(str[j]);
            }else{
                copy.push(this.toUppercaseIndex(str[j]));
            }    
        }
        return copy;
    }
    isLowercase(x){
        var alph = 'abcdefghijklmnopqrstuvwxyz';
        for(var i = 0; i < alph.length; i++){
            if (alph[i]==x.val) return true;
        }
        return false;
    }
    toUppercaseIndex(x){
        var lowAlph = 'abcdefghijklmnopqrstuvwxyz';
        var loc;
        for(var i = 0; i < lowAlph.length; i++){
            if (lowAlph[i]==x.val) loc = i;
        }
        var upAlph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        x.val = upAlph[loc];
        x.convert = true;
        return x;
    }
    allCaps(str){
        if(str.length < 1) return false;
        for(var i = 0; i < str.length; i++){
            if(this.isLowercase(str[i])) return false;
        }
        return true;
    }
}

class MyTry{
    constructor(cans, b){
        this.cans = cans;
        this.b = b;
        this.found = false;
        this.impossible = false;
        this.rowDeletes = false;
    }
    tryCans(r, c, s){
        if(r > this.cans.length-1) return;
        if(c > this.cans[r].length-1) {
            if(this.rowDeletes){
                if (r == this.cans.length-1) return;
                this.rowDeletes = false;
                this.tryCans(r+1, 0, s);
                return;
            }else{
                return;
            }
        }
        var can = this.cans[r][c];
        //console.log(r + ' ' + c + ' ' + s);
        //console.log(s + ' ' + can.length);
        var bSub = this.b.substring(s, s + can.length);
        if(this.compare(can, bSub)){
            if(s +  can.length == this.b.length) this.found = true;
            this.rowDeletes = false;
            this.tryCans(r+1, 0, s + can.length);
        }else{
            if(this.converted(can)){
                this.rowDeletes=true;
                //console.log('converted');
                this.tryCans(r, c+1, s);
            }else{
                if(this.found) this.impossible = true;
            }    
        }
    }
    compare(can, bSub){
        if(can.length != bSub.length)return false;
        for(var i = 0; i < can.length; i++){
            if(can[i].val != bSub[i]) return false;
        }
        return true;
    }
    converted(can){
        for(var i = 0; i < can.length; i++){
            if(!can[i].convert) return false;
        }
        return true;
    }
}

// Complete the abbreviation function below.
function abbreviation(a, b) {
    //console.log('new call');
    var size = 1; var cans = [];
    for(var i = 0; i<a.length; i+=size){
        var sect = a.substring(i, i+size);
        var tree = new Tree (sect);
        //console.log(tree.cans);
        cans.push(tree.cans);
    }
    var myTry = new MyTry(cans, b);
    myTry.tryCans(0, 0, 0);
    //console.log(myTry.found + ' ' + myTry.impossible);
    if(myTry.found && !myTry.impossible) return 'YES';
    return 'NO';
}

a = 'RDWPJPAMKGRIWAPBZSYWALDBLDOFLWIQPMPLEMCJXKAENTLVYMSJNRJAQQPWAGVcGOHEWQYZDJRAXZOYDMNZJVUSJGKKKSYNCSFWKVNHOGVYULALKEBUNZHERDDOFCYWBUCJGbvqlddfazmmohcewjg';
b = 'RDPJPAMKGRIWAPBZSYWALDBLOFWIQPMPLEMCJXKAENTLVYMJNRJAQQPWAGVGOHEWQYZDJRAXZOYDMNZJVUSJGKKKSYNCSFWKVNHOGVYULALKEBUNZHERDOFCYWBUCJG';
console.log(abbreviation(a, b));
a = 'MBQEVZPBjcbswirgrmkkfvfvcpiukuxlnxkkenqp';
b = 'MBQEVZP';
console.log(abbreviation(a, b));
a = 'DINVMKSOfsVQByBnCWNKPRFRKMhFRSkNQRBVNTIKNBXRSXdADOSeNDcLWFCERZOLQjEZCEPKXPCYKCVKALNxBADQBFDQUpdqunpelxauyyrwtjpkwoxlrrqbjtxlkvkcajhpqhqeitafcsjxwtttzyhzvh';
b = 'DINVMKSOVQBBCWNKPRFRKMFRSNQRBVNTIKNBXRSXADOSNDLWFCERZOLQEZCEPKXPCYKCVKALNBADQBFDQU';
console.log(abbreviation(a, b));
a = 'BFZZVHdQYHQEMNEFFRFJTQmNWHFVXRXlGTFNBqWQmyOWYWSTDSTMJRYHjBNTEWADLgHVgGIRGKFQSeCXNFNaIFAXOiQORUDROaNoJPXWZXIAABZKSZYFTDDTRGZXVZZNWNRHMvSTGEQCYAJSFvbqivjuqvuzafvwwifnrlcxgbjmigkms';
b = 'BFZZVHQYHQEMNEFFRFJTQNWHFVXRXGTFNBWQOWYWSTDSTMJRYHBNTEWADLHVGIRGKFQSCXNFNIFAXOQORUDRONJPXWZXIAABZKSZYFTDDTRGZXVZZNWNRHMSTGEQCYAJSF';
console.log(abbreviation(a, b));
a = 'AQIUQVIPJDKYNEBPXFGVHCMFGvURORPRSTYQYJZCYJDNFRPRYTMZIsNDOJAOAGAEFRCDKUJBhdkedalbwoxxnoyowoxpdlelovibyiwat';
b = 'AQIUQVIPJDKYNEBPXFGVHCMFGURORPRSTYQYJZCYJDNFRPRYTMZINDOJAOAGAEFRCDKUJB';
console.log(abbreviation(a, b));
a = 'HCPXJZTDXLWHYKHPPDFYFDJWTAETQLJCIIPVHMZHHOQTKONUHGYVKLXTFTBEMYAWXTCSwNJYALIGMIBDOWKIVStFATDOZCYSUCaATUWORPMTFPKTNHDSFWKRKBrXNBYICOZYDWLLElKKWTFAUSTZKFDCBQNYVcWKDHDMXJGFORwURHISYLBIZSOJXVRVBNPQLRJKIN';
b = 'HCPXJZTDXLWHYKHPPDFYFDJWTAETQLJCIIPVHMZHHOQTKONUHGYVKLXTFTBEMYAWXTCSNJYALIGMIBDOWKIVSFATDOZCYSUCATUWORPMTFPKTNHDSFWKRKBXNBYICOZYDWLLEKKWTFAUSTZKFDCBQNYVWKDHDMXJGFORURHISYLBIZSOJXVRVBNPQLRJKINIIOYB';
console.log(abbreviation(a, b));
a = 'IZLAKtDFAITDNWMVQPDShQQFGTRIXDLNBQPZRpuRJMLLPHBMOWrNagJDPPREZSYBHIWKDHLkjPSEUWIVQYUfPPJYKCbPEKCSKBRIAAJTMDPAOLNWSQESOTRQZOFTMTTGTDTrWLPENHXHLDWAFNDZMIFlogtcddtulusydquboxquwmgcji';
b = 'IZLAKDFAITDNWMVQPDSQQFGTRIXDLNBQPZRRJMLLPHBMOWNJDPPREZSYBHIWKDHLPSEUWIVQYUPPJYKCPEKCSKBRIAAJTMDPAOLNWSQESOTRQZOFTMTTGTDTWLPENHXHLDWAFNDZMIF';
console.log(abbreviation(a, b));
a = 'KRBPLVCTESRNPTCVNDMPTQYvFAWBGYPQHNXNAESRQMKFDZIEKVNZXSXKCFHQYCMMANPQFHWCEeNGOLWTUXZVMQNDZfRPLUFZcSTRLRYAZUKAZYXCVTNTNScSDFTBJSUKEQKZRDITZUCFVAPLCLTUWAXOnNHPYEOZDGWZPBJQBZEOFAeXTFJDWRHI';
b = 'KRBPVCTESRNPTCVNDMPTQYFWBGYPQHXNAESRQMFDZIEKVNZXSXKFHQYCMMANPQFHWCNGOLWTUXZVMQNDZRPLUFZSTRLRYAZUAZYXCVTNTNSSDTBJSUKEQKZRDITZUCFVAPCLTUWAXONHPYEOZDGWZPBJQBZEOAXTFJDWRHIPGQVCWODYNNV';
console.log(abbreviation(a, b));
a = 'WOAECAAVWMSQMIMYMAPEVARGIZCTIVNLAgydhmrxwcjltpjdewxhxrtynyyuyhqwbpkwuqtpwmyhemjxvwoazumyfstoumreirdkwbmepwbrgmyhjgtqeltzxnwhbunvuoejnhfqcikggaqjgsoqhzrmu';
b = 'WOAECAAVWMSQMIMYMAPEVARGIZCTIVNLA';
console.log(abbreviation(a, b));
a = 'RMPRWOBYTSjXGVJQPDQEHTWXMOGcHVWKATSWLBWPJBQTYKVHKMFKCYVVJXGLUEZTLSXChGBCAOAMiFEAPPAGWeMXXQAQTFCZGXKOGZLLUWTZDOYVWHIJZEIDOSHPwFWHYXCIZKTjKKVKQNDXMTCCBQMAGVCDPZOXHPSEQYthuqclzletakrqbzmaohadpog';
b = 'RMPRWOBYTSXGVJQPDQEHTWXMOGHVWKATSWLBWPJBQTYKVHKMFKCYVVJXGLUEZTLSXCGBCAOAMFEAPPAGWMXXQAQTFCZGXKOGZLLUWTZDOYVWHIJZEIDOSHPFWHYXCIZKTKKVKQNDXMTCCBQMAGVCDPZOXHPSEQY';
console.log(abbreviation(a, b));


