import {ButtonPropsType} from "../Types";
import React from "react";

export const Button = ({title, onClick}: ButtonPropsType) => {
    // return <button onClick={() => onClick ? onClick({idStringDel}) : ""}>{title}</button>
    return <button onClick={onClick}>{title}</button>
}