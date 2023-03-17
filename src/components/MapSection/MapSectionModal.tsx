import { FC } from 'react';

import s from './MapSectionModal.module.scss';

interface MapSectionProps {
  show: boolean;
  onClose: () => void;
}

export const MapSectionModal: FC<MapSectionProps> = ({show, onClose}) => {


  return (
    <div className={show? s.markerModal : s.modalHidden}>
      <h3>MapSectionModal</h3>
      <button 
        type='button'
        onClick={onClose}
      >
        X
      </button>
    </div>
  )
}