import { ReactNode } from 'react';

export interface PopUpProps {
  show: boolean;
  children: ReactNode;
  closeHandler: () => void;
  closeOnClickOutside: boolean;
  showCloseCrossButton: boolean;
}
