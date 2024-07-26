const addEventFront = async (formText) =>{
    console.log(formText)
    console.log(JSON.parse(formText))
    const res = await fetch('/api/events/addevent',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: formText
    })

    const data = await res.json()

    if (!res.ok){
        throw Error(data.error)
    }
    console.log(data)
}

export {addEventFront}