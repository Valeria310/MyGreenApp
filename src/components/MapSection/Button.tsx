import {filterType} from "./MapSection";

import s from "./Button.module.scss"

type PropsType = {
    title: filterType,
    changeButtonStatus: (wasteType:filterType)=>void,
    isActive:boolean,
}

export const Button = (props:PropsType) => {

    let wasteType:filterType = props.title

    const onClickHandler=()=>{
        props.changeButtonStatus(wasteType)
    }

    return (
        <button
            className={props.isActive ? s.filterButtonActive : s.filterButton}
            onClick={onClickHandler}>
            {props.title}
        </button>
    )
}