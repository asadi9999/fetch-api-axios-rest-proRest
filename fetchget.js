const getbtn=document.querySelector('#btn-get')
const postbtn=document.querySelector('#btn-post')

// const getdata=()=>{
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(resp=>{
//         // console.log(resp)
//         return resp.json()
//     })
//     .then(respdata=>{
//         console.log(respdata)
//     })
// }

// getbtn.addEventListener('click',getdata)
const sendreq=(method,url,data)=>{
    return fetch(url)
    .then(respo=>{
        return respo.json()
    })
}

const getData=()=>{
    sendreq('GET','https://jsonplaceholder.typicode.com/posts/1')
    .then(resdata=>{
        console.log(resdata)
    })
}

getbtn.addEventListener('click',getData)