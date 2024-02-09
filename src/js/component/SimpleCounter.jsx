import React from "react";
import { PropTypes } from "prop-types";
import "../../styles/index.css"

function SimpleCounter(props) {

    return (
        <div className="counter" style = {{display: "flex", fontSize:"2rem", justifyContent:"center", gap:"1rem", backgroundColor:"black", padding:"2rem"}}>
            <div className="class-img" style = {{border:"2px solid #30363d", padding:"0.5rem", color:"white"}}><i className="fa-regular fa-clock"></i></div>
            <div className="seconds hundredThousands" style = {{border:"2px solid #30363d", padding:"0.5rem", color:"white"}}>{props.hundredThousandsDigit}</div>
            <div className="seconds tenThousands" style = {{border:"2px solid #30363d", padding:"0.5rem", color:"white"}}>{props.tenThousandsDigit}</div>            
            <div className="seconds thousands" style = {{border:"2px solid #30363d", padding:"0.5rem", color:"white"}}>{props.thousandsDigit}</div>
            <div className="seconds hundreds" style = {{border:"2px solid #30363d", padding:"0.5rem", color:"white"}}>{props.hundredsDigit}</div>
            <div className="seconds tens" style = {{border:"2px solid #30363d", padding:"0.5rem", color:"white"}}>{props.tensDigit}</div>
            <div className="seconds ones" style = {{border:"2px solid #30363d", padding:"0.5rem", color:"white"}}>{props.onesDigit}</div>
        </div>
    )
}

SimpleCounter.propTypes = {
    hundredThousandsDigit : PropTypes.number,
    tenThousandsDigit : PropTypes.number,
    thousandsDigit : PropTypes.number,
    hundredsDigit : PropTypes.number,
    tensDigit : PropTypes.number,
    onesDigit : PropTypes.number
}


export default SimpleCounter;