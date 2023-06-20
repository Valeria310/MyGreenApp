import s from './FilterButton.module.scss';
import { filterType } from '../../constants/MapState';


type PropsType = {
    id: string,
    title: filterType,
    changeButtonStatus: (id:string)=>void,
    isActive:boolean,
}

export const FilterButton = (props: PropsType) => {
    // const wasteType: filterType = props.title;

    const onClickHandler = () => {
        // props.changeButtonStatus(wasteType);
        props.changeButtonStatus(props.id);

    };

    console.log('FilterButton called');

    return (
        <button
            id={props.id}
            className={props.isActive ? `${s.filterButton} ${s.active}` : s.filterButton}
            onClick={onClickHandler}
        >
            {props.title}
        </button>

    );
};
