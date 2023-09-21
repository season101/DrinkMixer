import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import NavBar from '../components/NavBar';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <>
      <NavBar />
      <section className="page">
        {isPageLoading ? <div className="loading title"></div> : <Outlet />}
      </section>
    </>
  );
};

export default HomeLayout;
