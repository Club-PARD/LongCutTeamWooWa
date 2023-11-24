import Lottie from "lottie-react";
import React from "react";
import EmptyImg from "../../../assets/img/empty.json";


const CircularIndicator = ({message}) => {
    return (<div
        style={{
          zIndex: "1",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "${(props) => props.theme.fontFamily.mainfont}",
          fontSize: "1.5rem",
          color: "#9E9E9E",

        }}
      >
        <Lottie animationData={EmptyImg} />
        {message}
      </div>);
}

export default CircularIndicator;