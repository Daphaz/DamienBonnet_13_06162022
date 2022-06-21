import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalPortalProps {
  children: ReactNode;
}

export const ModalPortal = ({ children }: ModalPortalProps) => {
  const mountNode = document.getElementById('modal-root') as HTMLElement;

  useEffect(() => {
    mountNode.style.pointerEvents = 'all';

    return () => {
      mountNode.style.pointerEvents = 'none';
    };
  }, [mountNode]);

  return createPortal(
    <div className='backdrop'>{children}</div>,
    mountNode as HTMLElement
  );
};
