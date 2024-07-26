const loginUser = async (email, password) =>{
    if (!email || !password){
        throw Error('All fields are required')
    }

    console.log("CHECKPOINT 1")

    const res = await fetch("/api/auth/login", {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    console.log("CHECKPOINT 2")

    const data = await res.json()
    console.log(data)
    
    if (!res.ok){
        throw Error(data.error)
    }

    console.log(data)
}

const makeNewUser = async (email,gamblerName,password,password2)=>{
    
}

export {loginUser}

