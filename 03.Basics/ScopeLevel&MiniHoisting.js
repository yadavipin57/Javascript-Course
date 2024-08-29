function outer(){
    const username = "Vipin"

    function inner(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);  // This cannot be accessed here

    inner()
}

outer()


// -------- Interresting -------------

console.log(addOne(5)) // function can be executed before the function declaration
function addOne(num){
    return num+1
}

// console.log(addTwo()); // This will give array
const addTwo = function(num){ // This is also a function but its also called Expression 
    return num + 2
}

console.log(addTwo()); // This cant be executed before function declaration, that's why it should be only executed after the function itself or it will give an error