import { FC } from 'react';

import s from './RecycleButton.module.scss';
import { RecycleButtonProps } from './RecycleButtonProps';
import { ReactComponent as RecycleButtonIcon } from '../../assets/icons/recycle-cross.svg';



export const RecycleButton: FC<RecycleButtonProps> = ({ onClick, state }) => {
    return (
        <button
            type='button'
            className={s.recycleCardButton}
            onClick={onClick}
        >
            <RecycleButtonIcon className={s[state]} />
        </button>
    );
};
