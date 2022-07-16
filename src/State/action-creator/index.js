export const depositMoney =(amount)=>{
    return(dispatch)=>{
        dispatch({
            type: "deposit",
            payload: amount
        })
        console.log(amount)
    }
}

export const withdrawMoney =(amount)=>{
    return(dispatch)=>{
        dispatch({
            type: "withdraw",
            payload: amount
        })
        console.log(amount)
    }
}

export const addCard = (item)=>{
    return(dispatch)=>{
        dispatch({
            type:"add",
            payload: item
        })
    }
}