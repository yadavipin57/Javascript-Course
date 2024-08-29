const clock = document.querySelector('.clock')

setInterval(function(){
    clock.innerHTML = new Date().toLocaleString()
})