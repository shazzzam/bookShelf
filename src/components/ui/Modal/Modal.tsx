import { FC } from 'react';

import { Buttton } from '..';

import { ModalProps } from './Modal.props';
import styles from './Modal.module.css';

export const Modal: FC<ModalProps> = ({ children, confirm, cancel }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={cancel} />
      <div className={styles.body}>
        {children}
        <div className={styles.controls}>
          <Buttton onClick={confirm} variant="warning">
            Confirm
          </Buttton>
          <Buttton
            className={styles.cancel}
            onClick={cancel}
            variant="secondary"
          >
            Cancel
          </Buttton>
        </div>
      </div>
    </div>
  );
};
