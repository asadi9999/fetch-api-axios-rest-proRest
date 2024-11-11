// const cart=(p1,p2)=>{
//     return p1+p2
// }
// console.log(cart(30,50))

// Rest

const cart=(...gheymat)=>{  
    let jam=0
    gheymat.forEach(item=>jam+=item)
    return jam
}

console.log(cart(10,5,40,78,98,150,500))