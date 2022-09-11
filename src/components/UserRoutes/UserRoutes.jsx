import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Loader } from '../Loader/Loader';

const Navigation = lazy(() => import('../Navigation/Navigation'));
const PhonebookPage = lazy(() =>
  import('../../pages/PhonebookPage/PhonebookPage')
);
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);

export const UserRoutes = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<PhonebookPage />} />
          <Route path="/add" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
