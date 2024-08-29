
const search = document.querySelector('#search-bar')
const form = document.querySelector('form')
const github = document.querySelector('.github-info')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = search.value
    const requestUrl = `https://api.github.com/users/${username}`
    const xhr = new XMLHttpRequest()
    xhr.open('GET', requestUrl)

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            data = JSON.parse(this.responseText)
            if (!data.message) {
                github.innerHTML = `
                    <img class="profile-img" src=${data.avatar_url} />
                    <h3><span>Name: </span>${data.name}</h3>
                    <h3><span>Username: </span>${data.login}</h3>
                    <h3><span>Followers: </span>${data.followers}</h3>
                    <h3><span>Following: </span>${data.following}</h3>
                    <h3><span>Public Repository: </span>${data.public_repos}</h3>
                    <h3><span>Created at: </span>${data.created_at}</h3>
                    <h3><span>Updated at: </span>${data.updated_at}</h3>
                    <h3><span>Bio: </span>${data.bio}</h3>
                    <h3><span>Location: </span>${data.location}</h3>
                    <h3><span>Twitter: </span><a href=${data.twitter_username}>${data.twitter_username}</a></h3>
                    <h3><span>Github Profile: </span><a href=${data.html_url}>${data.html_url}</a></h3>
                    `
            } else {
                github.innerHTML = `<h1>${username} not found.`
            }
        }
    }
    xhr.send()


})

// const requestUrl = 'https://api.github.com/users/yadavipin57'

// const xhr = new XMLHttpRequest()
// xhr.open('GET', requestUrl)

// xhr.onreadystatechange = function(){
//     console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         const data = JSON.parse(this.responseText)

//         console.log(data);
//         console.log(data.id);
//     }
// }

// xhr.send()


// const userName = document.querySelector('#username')
// const form = document.querySelector('form')

// form.addEventListener('submit', function(e){

//     e.preventDefault();

//     const requestUrl = "https://api.github.com/users/"
//     const username = userName.value

//     const finalUrl = requestUrl + username

//     const xhr = new XMLHttpRequest()
//     xhr.open("GET", finalUrl)

//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4){
//             const data = JSON.parse(this.responseText)

//             console.log(data.id);
//             const usernameTag = document.querySelector('.enterUserName')
//             usernameTag.style.display = 'none'

//             const cardLeft = document.querySelector('#cardLeft')
//             cardLeft.innerHTML = `${ data.id } `

//         }
//     }

//     xhr.send()

// })


