import React from "react";

export default function Button (className="btn btn-default",...props) {     // ...props ile tüm propsları çağırdık ve className default olarak bootstrap butonu ayarladık.
    return <button onClick={props.onClick} className={className}>{props.children}</button>
}