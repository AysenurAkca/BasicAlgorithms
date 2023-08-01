function factorialize(n){
    if(n < 0){
        return "You should enter positive number";
    } else if(n===0){
        return `${n}! : 1`;
    } else {
        let result = 1;
        for(let i = n; i>0;i--){
            result = result * i
            
        }
        return `${n}! : ${result}`
    }
}

console.log(factorialize(5));