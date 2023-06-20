import "./divider.css"
import React from "react";
const Divider = () => {
    return <div className="divider"></div>
}

const DashedDivider = ({dashSize}) => {
    return <div className="dashed-divider" style={{ '--dash-size': dashSize }}></div>
}

export { Divider, DashedDivider};