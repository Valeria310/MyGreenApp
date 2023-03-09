import {filterType} from "../../constants/MapState";
import s from "./FilterButton.module.scss"


type PropsType = {
    title: filterType,
    changeButtonStatus: (wasteType:filterType)=>void,
    isActive:boolean,
}

export const FilterButton = (props:PropsType) => {

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