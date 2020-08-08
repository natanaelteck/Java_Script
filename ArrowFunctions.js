var objCalculadora = {
    sum : function(n1,n2=1){
        return n1+n2
    },
    mul : function(a,b=1){
        return a*b;
    },
    div : function(a,b=1){
        return a/b;
    },
    sub : function(a,b=a){
        return a-b;
    },
    rest : function(a,b=1){
        return a%b;
    }
}
console.log(objCalculadora.sum(3 , 6));
console.log(objCalculadora.div(6 , 6));
console.log(objCalculadora.mul(4 , 6));
console.log(objCalculadora.sub(8 , 6));
console.log(objCalculadora.rest(8 , 6));


