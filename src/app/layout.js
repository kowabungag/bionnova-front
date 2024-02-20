'use client';
import './css/style.scss';
// redux
import { Provider, useDispatch } from 'react-redux';
import { store } from '@/store/store';
import { useLayoutEffect, useState } from 'react';
import { fetchCourses } from '@/features/coursesSlice/coursesSlice';

import '../i18n';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import MyLoader from '@/components/UI/MyLoader/MyLoader';
import { useTranslation } from 'react-i18next';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Bioscience Innova</title>
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
      </head>

      <body suppressHydrationWarning={true}>
        <Provider store={store}>
          <ToastContainer position="top-right" autoClose={2000} />
          <MiddleLayout>{children}</MiddleLayout>
        </Provider>
      </body>
      {/*<script type="text/javascript" src="public/main.js"></script>*/}
    </html>
  );
}

const MiddleLayout = ({ children }) => {
  const { t, i18n, ready } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(fetchCourses());
    setIsReady(ready);
  }, [dispatch, ready]);

  if (!isReady) {
    return <MyLoader />;
  }
  return <>{children}</>;
};
