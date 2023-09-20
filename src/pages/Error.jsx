import React from 'react';
import Wrapper from '../assets/wrappers/ErrorPage';
import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/not-found.svg';
const Error = () => {
  const { status, data } = useRouteError();
  if (status === 404) {
    return (
      <Wrapper>
        <img src={img} alt="not found" />
        <h3>Ohh!</h3>
        <p>We can't see to find page you are looking for.</p>
        <Link to="/">back home</Link>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>something went wrong</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
