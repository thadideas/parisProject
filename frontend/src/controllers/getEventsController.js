const getEvents = async () =>{
    const res = await fetch('/api/events')
    const data = await res.json()

    if(!res.ok){
        throw Error(data.error)
    }

    return data
}

const getSingleEvent = async(_id) =>{
    const res = await fetch('/api/events/single',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({_id})
    })

    const data = await res.json()

    if(!res.ok){
        throw Error(data.error)
    }

    return data
}

export {getEvents, getSingleEvent}