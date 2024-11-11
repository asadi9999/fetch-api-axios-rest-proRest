const getbtn=document.querySelector('#btn-get')
const postbtn=document.querySelector('#btn-post')

const sendreqdata=(method,url,data)=>{
    return fetch(url,{
        method:method,
        body:JSON.stringify(data),
        headers:data?{'Content-Type':'application/json'}:{}
    })
    .then(res=>{
        return res.json()
    })
}

const postdata=()=>{
    sendreqdata('POST','https://jsonplaceholder.typicode.com/posts',{
        userid:10,
        id:10,
        title:'TEST',
        body:'Body Is Test Body'
    })
    .then(respon=>{
        console.log(respon)
    })
}

postbtn.addEventListener('click',postdata)