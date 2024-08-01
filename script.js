//assignment 8
const greet = (input) =>{
    input = prompt("Enter a string")
    for(let i=0;i<input.length;i++){
        let uppercase = input.toUpperCase()
        // console.log([i]+uppercase[i]);
       
        document.write(` ${[i]} ${uppercase[i]}`);
        
    }

    

}

greet()