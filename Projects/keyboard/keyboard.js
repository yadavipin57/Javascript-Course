let key = document.querySelector('.key')

window.addEventListener('keydown', (e) => {
    key.innerHTML = `
        <table>
        <tr>
            <th>Key</th>
            <th>Keycode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key === ' ' ? 'Space' : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
        </table>
        <p>${e.key}</p>
    `
    document.querySelector('table').style.fontSize = '30px'
    document.querySelector('table').style.borderCollapse = 'collapse'
    document.querySelector('table').style.color = 'rgb(16, 78, 103)'
})

