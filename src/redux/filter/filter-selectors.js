export const getFilter = ({ filter }) => filter;

export const getFilteredContacts = (contacts, filter) => {
  if (filter) {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  } else {
    return contacts;
  }
};
