import React from 'react'


export default function Card({color,price}) {
    
    return (
        <li style = {{marginBlockStart: 10 + 'px'}}>
            <div style={{backgroundColor: `${color}`, height: 50 + "px", width: 50+"px"}}></div>
            <p>{price}</p>
            <button>add Cart</button>
        </li>
    )
}
