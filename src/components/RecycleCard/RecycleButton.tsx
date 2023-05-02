import { FC } from 'react';

import s from './RecycleButton.module.scss';
import { RecycleButtonProps } from './RecycleButtonProps';



export const RecycleButton: FC<RecycleButtonProps> = (props) => {
    return (
        <button
            type='button'
            className={s.recycleCardButton}
            onClick={props.onClick}
        >
            {<props.icon />}
        </button>
    );
};
