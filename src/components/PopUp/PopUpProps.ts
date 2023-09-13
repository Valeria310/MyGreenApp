import { ReactNode } from 'react';

export interface PopUpProps {
  children: ReactNode;
  closeFunction: () => void;
  closeOnClickOutside: boolean;
  showCloseCrossButton: boolean;
}
