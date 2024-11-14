import {ButtonPropsType, FiltersType} from "../Types";
import React from "react";

export const Button = ({title, onClick, className}: ButtonPropsType) => {

    // return <button onClick={() => onClick ? onClick({idStringDel}) : ""}>{title}</button>
    return <button onClick={onClick} className={className} >{title}</button>
}