let typeBox = document.querySelector('.typeBox')

let words = ''

window.addEventListener('keydown', function(e){
    if(e.keyCode<33 || e.keyCode > 126){
        typeBox.innerHTML = ''
    } else{
        if(e.code === 'Backspace'){
            typeBox.innerHTML = typeBox.innerHTML.slice(0, -1)
        } else if(e.code === 'Space'){
            e.preventDefault();
            typeBox.innerHTML += ' '
            // return false;
        } else{
        typeBox.innerHTML += e.key
        }
    }
})
