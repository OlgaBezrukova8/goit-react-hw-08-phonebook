import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { ContactUpdateForm } from 'components/ContactUpdateForm/ContactUpdateForm';
import styles from './contactModal.module.css';

const modalRoot = document.querySelector('#modal-root');

export const ContactModal = ({ showModal, contact, hideModal }) => {
  if (!showModal) {
    return null;
  }

  return createPortal(
    <div className={styles.modal}>
      <div>
        <h2>Update your contact</h2>
        <ContactUpdateForm contact={contact} hideModal={hideModal} />
      </div>
    </div>,
    modalRoot
  );
};

ContactModal.propTypes = {
  // contact
  hideModal: PropTypes.func.isRequired,
};