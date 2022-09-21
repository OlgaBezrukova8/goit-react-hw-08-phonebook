import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { Loader } from '../Loader/Loader';

const Navigation = lazy(() => import('../Navigation/Navigation'));
const WelcomePage = lazy(() => import('../../pages/WelcomePage/WelcomePage'));
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
          <Route index element={<WelcomePage />} />
          <Route exact path="/" element={<PublicRoute restricted />}>
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route exact path="/" element={<PublicRoute restricted />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/contacts" element={<PhonebookPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
