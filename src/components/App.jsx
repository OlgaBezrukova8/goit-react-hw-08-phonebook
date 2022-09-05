import { Route, Routes, Navigate } from 'react-router-dom';

import { Navigation } from '../components/Navigation/Navigation';
import { PhonebookPage } from '../pages/PhonebookPage/PhonebookPage';
import { ContactsPage } from '../pages/ContactsPage/ContactsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<PhonebookPage />} />
        <Route path="/add" element={<ContactsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
