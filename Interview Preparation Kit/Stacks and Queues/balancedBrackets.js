
function isBalanced(s) {
    var stack = [];
    for(var i = 0; i<s.length; i++){
        if(s[i]=='(' || s[i]=='[' || s[i]=='{') stack.push(s[i]);
        if(s[i]==')'){
            if(stack[stack.length-1]=='('){
                stack.pop();
                continue;
            }else{
                return 'NO';
            }
        }
        if(s[i]==']'){
            if(stack[stack.length-1]=='['){
                stack.pop();
                continue;
            }else{
                return 'NO';
            }
        }
        if(s[i]=='}'){
            if(stack[stack.length-1]=='{'){
                stack.pop();
                continue;
            }else{
                return 'NO';
            }
        }
    }
    return 'YES'
}




var s = '';

isBalanced(s);

