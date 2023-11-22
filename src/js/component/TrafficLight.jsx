import React from "react";
export default function trafficLight (props){

const { trafficLightColor, activeColor, } = props;

const isActive = activeColor ===trafficLight ? "activ-traffic-light" :'';

return(
    <div className={`
    traffic-light
    ${trafficLightColor}
    ${isActive}`}>
    </div>
);
};

