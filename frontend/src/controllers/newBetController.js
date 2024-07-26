const newBet = async (gambler,entry) =>{
    if(!gambler.email){
        throw Error('gamblerEmailRequired')
    }

    const res = await fetch('/api/game/placeBet',{
        method: 'POST',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({gambler,entry})
    })

    console.log(gambler)
    console.log(entry)

    const data = await res.json();

    if (!res.ok){
        throw Error(data.error)
    }

    return data
}

export {newBet}