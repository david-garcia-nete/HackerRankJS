
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
    
    /*
     * I want to cover the case where there may be an open bracket on the end and it may just
     * get pushed onto the stack.  We can iterate backwards through the string checking for balance again
     * reversing the direction of the brackets.
     * 
     * We expect to start with closing brackets and end with matching open brackets.  If this is not
     * the case we return NO.  Otherwise both checks have passed and we return YES.  
     */
    var stack = [];
    for(var i = s.length-1; i>=0; i--){
        if(s[i]==')' || s[i]==']' || s[i]=='}') stack.push(s[i]);
        if(s[i]=='('){
            if(stack[stack.length-1]==')'){
                stack.pop();
                continue;
            }else{
                return 'NO';
            }
        }
        if(s[i]=='['){
            if(stack[stack.length-1]==']'){
                stack.pop();
                continue;
            }else{
                return 'NO';
            }
        }
        if(s[i]=='{'){
            if(stack[stack.length-1]=='}'){
                stack.pop();
                continue;
            }else{
                return 'NO';
            }
        }
    }
    return 'YES'
}




var s = '{{}(';
console.log (isBalanced(s));
