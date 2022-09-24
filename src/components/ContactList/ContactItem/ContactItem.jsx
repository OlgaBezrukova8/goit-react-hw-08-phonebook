import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/filter/filter-selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { useContacts } from 'shared/hooks/useContacts';

import { ContactModal } from 'components/ContactModal/ContactModal';
import { BasicButton } from 'components/BasicButton/BasicButton';

import ListGroup from 'react-bootstrap/ListGroup';

export const ContactItem = ({ data }) => {
  const [contact, setContact] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const isLoading = useContacts();

  return (
    <>
      <ContactModal
        showModal={showModal}
        contact={contact}
        hideModal={() => setShowModal(false)}
      />
      {getFilteredContacts(data).map(({ id, name, number }) => (
        <ListGroup.Item className="d-flex p-2 align-items-center" key={id}>
          <p>
            {name}: {number}
          </p>

          <BasicButton
            className="mx-3"
            onClick={() => {
              setContact({ id, name, number });
              setShowModal(true);
            }}
            disabled={isLoading}
          >
            Update
          </BasicButton>

          <BasicButton
            onClick={() => dispatch(deleteContact(id))}
            disabled={isLoading}
          >
            Delete
          </BasicButton>
        </ListGroup.Item>
      ))}
    </>
  );
};
