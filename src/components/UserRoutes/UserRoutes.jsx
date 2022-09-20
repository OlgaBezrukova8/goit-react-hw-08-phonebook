import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Loader } from '../Loader/Loader';

const Navigation = lazy(() => import('../Navigation/Navigation'));
const PhonebookPage = lazy(() =>
  import('../../pages/PhonebookPage/PhonebookPage')
);
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));

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
          <Route index element="Welcome" />
          <Route path="contacts" element={<PhonebookPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
