import s from './FilterButton.module.scss';
import { filterType } from '../../constants/MapState';


type PropsType = {
    title: filterType,
    changeButtonStatus: (wasteType:filterType)=>void,
    isActive:boolean,
}

export const FilterButton = (props: PropsType) => {
    const wasteType: filterType = props.title;

    const onClickHandler = () => {
        props.changeButtonStatus(wasteType);
    };

    return (
        <button
            className={props.isActive ? `${s.filterButton} ${s.active}` : s.filterButton}
            onClick={onClickHandler}
        >
            {props.title}
        </button>

    );
};
