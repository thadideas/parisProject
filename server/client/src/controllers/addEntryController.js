const addEntryFront = async (event,country,name) =>{
    const dataToSend = {
        "event": event,
        "country": country,
        "name": name,
    }
    const res = await fetch('/api/events/addEntry',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(dataToSend)
    })

    const data = await res.json()

    if (!res.ok){
        throw Error(data.error)
    }
}

export {addEntryFront}