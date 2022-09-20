import React from 'react'

function Result() {

    const number = window.localStorage.getItem('finalResult')
    return (
        <div>
            Your Total Marks are {number}
        </div>
    )
}

export default Result