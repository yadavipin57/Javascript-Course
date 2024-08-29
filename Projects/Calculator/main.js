const displayField = document.querySelector('#display-field')
const numButtons = document.querySelectorAll('.num-button')

let string = '';
let arr = Array.from(numButtons);

// User input by clicking

arr.forEach((num) => {
    num.addEventListener('click', (e) => {
        const value = e.target.value;
        if (value === '=') {
            let result = eval(string)
            string = String(result)
            displayField.value = string
        } else if (value === 'AC') {
            string = ''
            displayField.value = string
        } else if (value === 'DE') {
            string = string.substring(0, string.length - 1)
            displayField.value = string
        } else {
            string += value
            displayField.value = string
        }
    })
})

// User input by typing

document.addEventListener('keydown', (e) => {
    const key = e.key;

    if (!isNaN(key) || key === 'Enter' || key === 'Backspace' || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
        e.preventDefault()
        if (key === 'Enter') {
            let result = eval(string)
            string = String(result)
            displayField.value = string
            if (key === 'Backspace') {
                string = string.substring(0, string.length - 1)
                displayField.value = string
            }
        } else if (key === 'Backspace') {
            string = string.substring(0, string.length - 1)
            displayField.value = string
        } else {
            string += key
            displayField.value = string
        }
    } else {
        e.preventDefault()
    }
})