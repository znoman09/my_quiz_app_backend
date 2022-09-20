import React, { useEffect } from 'react'

function DeleteQuiz1({auth}) {
    var url = '/api/quiz/1'
    console.log(url);
    console.log("Auth is in Delete=>", auth);
    let bearer = 'Bearer ' + auth 
    console.log('Bearer is => ', bearer);
    const deleteQuiz = async()=>{
        const deleteRequest = {"testNumber": 1}
        const response = await fetch(url,{
            credentials: 'include',
            method:'DELETE',
            body:JSON.stringify(deleteRequest),
            headers:{
                'authorization' : bearer,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        const json = await response.json()
        console.log("Resoponse is=>",json);
    }
    useEffect(()=>{
        deleteQuiz()
    },[])
    return (
        <div>
            <h1>Quiz Successfully Deleted</h1>
        </div>
    )
}

export default DeleteQuiz1