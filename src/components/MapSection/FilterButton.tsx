import React from 'react';

import s from './FilterButton.module.scss';
import { filterType } from '../../constants/MapState';


type PropsType = {
    id: string,
    title: filterType,
    changeButtonStatus: (id: string) => void,
    isActive: boolean,
}

export const FilterButton = (props: PropsType) => {


    const onClickHandler = () => {

        props.changeButtonStatus(props.id);
    };

    return (
        <button
            id={props.id}
            className={props.isActive ? `${s.filterButton} ${s.enabled}` : `${s.filterButton} ${s.disabled}`}
            onClick={onClickHandler}
        >
            {props.title}
        </button>

    );
};
