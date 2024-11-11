
const getbtn=document.querySelector('#btn-get')
const postbtn=document.querySelector('#btn-post')

const getdata=()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res=>{
        console.log(res)
    })
}

const postdata=()=>{
    axios.post('https://jsonplaceholder.typicode.com/posts',{
        userid:3,
        id:3,
        title:'Test title',
        body:'Test Body '
    })
    .then(respondata=>{
        console.log(respondata)
    })
}

getbtn.addEventListener('click',getdata)
postbtn.addEventListener('click',postdata)