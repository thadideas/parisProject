const getEvents = async () =>{
    const res = await fetch('/api/events')
    const data = await res.json()

    if(!res.ok){
        throw Error(data.error)
    }

    return data
}

export {getEvents}