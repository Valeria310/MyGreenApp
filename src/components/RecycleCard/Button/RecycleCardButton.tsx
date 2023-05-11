import { FC } from 'react';

import s from './RecycleCardButton.module.scss';
import { RecycleCardButtonProps } from './RecycleCardButtonProps';

export const RecycleCardButton: FC<RecycleCardButtonProps> = (props) => {
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
