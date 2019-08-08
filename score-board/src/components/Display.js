import React from "react"

const Display = ({strikes, balls}) => {
    return (
        <>
            <p>Strike: {strikes}</p>
            <p>Balls: {balls}</p>
        </>
    )
}

export default Display;