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
      <div className="bg-light p-5 rounded">
        <h2 className="mb-4">Update your contact</h2>
        <ContactUpdateForm contact={contact} hideModal={hideModal} />
      </div>
    </div>,
    modalRoot
  );
};

ContactModal.propTypes = {
  contacts: PropTypes.array,
  showModal: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
};
