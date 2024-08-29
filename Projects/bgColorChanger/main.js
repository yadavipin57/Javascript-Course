const body = document.body;

const randomColor = () => {
    const str = "0123456789ABCDEF"
    let hexCode = ""
    let strIndex

    for(let i=0;i<6;i++){
        strIndex = Math.floor(Math.random()*16)
        hexCode += str[strIndex]
    }
    return hexCode;
}

body.addEventListener("click", ()=>{
    body.style.backgroundColor = `#${randomColor()}`
    console.log(`#${randomColor()}`);
    
})