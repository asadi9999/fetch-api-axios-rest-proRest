const cart =(karbar,jamekol,...mahsolat)=>{       
    console.log(`namekarbari:${karbar}`)
    console.log(`jamekolmahsolat:${jamekol}`)
    console.log(`mahsolat:${mahsolat.join('- ')}`)
}

cart('mr-asadi','15.000.000t','tablet','phone','pc','tv')