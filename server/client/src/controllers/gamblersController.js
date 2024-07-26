const loginUser = async (email, password) =>{
    if (!email || !password){
        throw Error('All fields are required')
    }

    const res = await fetch("/api/auth/login", {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    const data = await res.json()
    
    if (!res.ok){
        throw Error(data.error)
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("email", data.email);
    localStorage.setItem("thadBucks", data.thadBucks);
    localStorage.setItem("_id", data._id);

    return data
}

const makeNewUser = async (email,gamblerName,password,password2)=>{
    if (!email || !password|| !gamblerName || !password2){
        throw Error('All fields are required')
    }

    if (password !== password2){
        throw Error("Passwords do not match")
    }

    const res = await fetch("/api/auth", {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({email,gamblerName,password})
    });

    const data = await res.json()
    
    if (!res.ok){
        throw Error(data.error)
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("email", data.email);
    localStorage.setItem("thadBucks", data.thadBucks);
    localStorage.setItem("_id", data._id);
    
    return data
}

export {loginUser, makeNewUser}

