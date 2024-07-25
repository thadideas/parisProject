const loginUser = async (email, password) =>{
    if (!email || !password){
        throw Error('All fields are required')
    }

    const res = await fetch("/api/auth/login",{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({email, password})
    })

    const data = await res.json()

    if (!res.ok){
        throw Error(data.error)
    }

    console.log(data)
}

const makeNewUser = async (email,gamblerName,password,password2)=>{
    
}

export {loginUser}

