import React from "react"

const CardContainer = (props) =>{
    return(
        <div style={{border: "solid 2px",padding:"20px"}}>{props.children}</div>
    )

}

export default CardContainer;