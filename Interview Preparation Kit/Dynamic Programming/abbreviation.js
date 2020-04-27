class Node {
    constructor(str){
        this.str = str;
        this.leftChild;
        this.rightChild;
    }
}

class Tree{
    constructor(a, b){
        this.b = b; 
        this.found = false;
        this.root = new Node(a);
        this.createTree(this.root, 0);
    }
    createTree(root, i){
        if(this.compare(root.str)){
            this.found = true;
            return;
        }
        if(i>root.str.length-1)return;
        if(this.isLowercase(root.str[i])){
            root.leftChild = new Node (this.deleteIndex(i, root.str));
            root.rightChild = new Node (this.toUppercase(i, root.str));
            if(root.leftChild.str) this.createTree(root.leftChild, i);
            delete root.leftChild;
            if(this.compare(root.str)){
                this.found = true;
                return;
            }
            if(root.rightChild.str) this.createTree(root.rightChild, i+1);
            delete root.rightChild;
            if(this.compare(root.str)){
                this.found = true;
                return;
            }
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
    compare(str){
        if(str.length!=this.b.length)return false;
        for(var i = 0; i<str.length; i++){
            if(str[i]!=this.b[i])return false;
        }
        return true;
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
            if (alph[i]==x) return true;
        }
        return false;
    }
    toUppercaseIndex(x){
        var lowAlph = 'abcdefghijklmnopqrstuvwxyz';
        var loc;
        for(var i = 0; i < lowAlph.length; i++){
            if (lowAlph[i]==x) loc = i;
        }
        var upAlph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return upAlph[loc];
    }
}

// Complete the abbreviation function below.
function abbreviation(a, b) {
    var tree = new Tree(a, b);
    if(tree.found)return 'YES';
    return 'NO';
}

a = 'RDWPJPAMKGRIWAPBZSYWALDBLDOFLWIQPMPLEMCJXKAENTLVYMSJNRJAQQPWAGVcGOHEWQYZDJRAXZOYDMNZJVUSJGKKKSYNCSFWKVNHOGVYULALKEBUNZHERDDOFCYWBUCJGbvqlddfazmmohcewjg';
b = 'RDPJPAMKGRIWAPBZSYWALDBLOFWIQPMPLEMCJXKAENTLVYMJNRJAQQPWAGVGOHEWQYZDJRAXZOYDMNZJVUSJGKKKSYNCSFWKVNHOGVYULALKEBUNZHERDOFCYWBUCJG';
console.log(abbreviation(a, b));


//a = 'MBQEVZPBjcbswirgrmkkfvfvcpiukuxlnxkkenqp';
//b = 'MBQEVZP';
//console.log(abbreviation(a, b));
//a = 'DINVMKSOfsVQByBnCWNKPRFRKMhFRSkNQRBVNTIKNBXRSXdADOSeNDcLWFCERZOLQjEZCEPKXPCYKCVKALNxBADQBFDQUpdqunpelxauyyrwtjpkwoxlrrqbjtxlkvkcajhpqhqeitafcsjxwtttzyhzvh';
//b = 'DINVMKSOVQBBCWNKPRFRKMFRSNQRBVNTIKNBXRSXADOSNDLWFCERZOLQEZCEPKXPCYKCVKALNBADQBFDQU';
//console.log(abbreviation(a, b));
//a = 'BFZZVHdQYHQEMNEFFRFJTQmNWHFVXRXlGTFNBqWQmyOWYWSTDSTMJRYHjBNTEWADLgHVgGIRGKFQSeCXNFNaIFAXOiQORUDROaNoJPXWZXIAABZKSZYFTDDTRGZXVZZNWNRHMvSTGEQCYAJSFvbqivjuqvuzafvwwifnrlcxgbjmigkms';
//b = 'BFZZVHQYHQEMNEFFRFJTQNWHFVXRXGTFNBWQOWYWSTDSTMJRYHBNTEWADLHVGIRGKFQSCXNFNIFAXOQORUDRONJPXWZXIAABZKSZYFTDDTRGZXVZZNWNRHMSTGEQCYAJSF';
//console.log(abbreviation(a, b));
//a = 'AQIUQVIPJDKYNEBPXFGVHCMFGvURORPRSTYQYJZCYJDNFRPRYTMZIsNDOJAOAGAEFRCDKUJBhdkedalbwoxxnoyowoxpdlelovibyiwat';
//b = 'AQIUQVIPJDKYNEBPXFGVHCMFGURORPRSTYQYJZCYJDNFRPRYTMZINDOJAOAGAEFRCDKUJB';
//console.log(abbreviation(a, b));
//a = 'HCPXJZTDXLWHYKHPPDFYFDJWTAETQLJCIIPVHMZHHOQTKONUHGYVKLXTFTBEMYAWXTCSwNJYALIGMIBDOWKIVStFATDOZCYSUCaATUWORPMTFPKTNHDSFWKRKBrXNBYICOZYDWLLElKKWTFAUSTZKFDCBQNYVcWKDHDMXJGFORwURHISYLBIZSOJXVRVBNPQLRJKIN';
//b = 'HCPXJZTDXLWHYKHPPDFYFDJWTAETQLJCIIPVHMZHHOQTKONUHGYVKLXTFTBEMYAWXTCSNJYALIGMIBDOWKIVSFATDOZCYSUCATUWORPMTFPKTNHDSFWKRKBXNBYICOZYDWLLEKKWTFAUSTZKFDCBQNYVWKDHDMXJGFORURHISYLBIZSOJXVRVBNPQLRJKINIIOYB';
//console.log(abbreviation(a, b));
//a = 'IZLAKtDFAITDNWMVQPDShQQFGTRIXDLNBQPZRpuRJMLLPHBMOWrNagJDPPREZSYBHIWKDHLkjPSEUWIVQYUfPPJYKCbPEKCSKBRIAAJTMDPAOLNWSQESOTRQZOFTMTTGTDTrWLPENHXHLDWAFNDZMIFlogtcddtulusydquboxquwmgcji';
//b = 'IZLAKDFAITDNWMVQPDSQQFGTRIXDLNBQPZRRJMLLPHBMOWNJDPPREZSYBHIWKDHLPSEUWIVQYUPPJYKCPEKCSKBRIAAJTMDPAOLNWSQESOTRQZOFTMTTGTDTWLPENHXHLDWAFNDZMIF';
//console.log(abbreviation(a, b));
//a = 'KRBPLVCTESRNPTCVNDMPTQYvFAWBGYPQHNXNAESRQMKFDZIEKVNZXSXKCFHQYCMMANPQFHWCEeNGOLWTUXZVMQNDZfRPLUFZcSTRLRYAZUKAZYXCVTNTNScSDFTBJSUKEQKZRDITZUCFVAPLCLTUWAXOnNHPYEOZDGWZPBJQBZEOFAeXTFJDWRHI';
//b = 'KRBPVCTESRNPTCVNDMPTQYFWBGYPQHXNAESRQMFDZIEKVNZXSXKFHQYCMMANPQFHWCNGOLWTUXZVMQNDZRPLUFZSTRLRYAZUAZYXCVTNTNSSDTBJSUKEQKZRDITZUCFVAPCLTUWAXONHPYEOZDGWZPBJQBZEOAXTFJDWRHIPGQVCWODYNNV';
//console.log(abbreviation(a, b));
//a = 'WOAECAAVWMSQMIMYMAPEVARGIZCTIVNLAgydhmrxwcjltpjdewxhxrtynyyuyhqwbpkwuqtpwmyhemjxvwoazumyfstoumreirdkwbmepwbrgmyhjgtqeltzxnwhbunvuoejnhfqcikggaqjgsoqhzrmu';
//b = 'WOAECAAVWMSQMIMYMAPEVARGIZCTIVNLA';
//console.log(abbreviation(a, b));
//a = 'RMPRWOBYTSjXGVJQPDQEHTWXMOGcHVWKATSWLBWPJBQTYKVHKMFKCYVVJXGLUEZTLSXChGBCAOAMiFEAPPAGWeMXXQAQTFCZGXKOGZLLUWTZDOYVWHIJZEIDOSHPwFWHYXCIZKTjKKVKQNDXMTCCBQMAGVCDPZOXHPSEQYthuqclzletakrqbzmaohadpog';
//b = 'RMPRWOBYTSXGVJQPDQEHTWXMOGHVWKATSWLBWPJBQTYKVHKMFKCYVVJXGLUEZTLSXCGBCAOAMFEAPPAGWMXXQAQTFCZGXKOGZLLUWTZDOYVWHIJZEIDOSHPFWHYXCIZKTKKVKQNDXMTCCBQMAGVCDPZOXHPSEQY';
//console.log(abbreviation(a, b));


