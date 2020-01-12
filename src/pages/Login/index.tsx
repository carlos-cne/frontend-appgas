import React from 'react';

// import { Container } from './styles';

function authenticate(): void {
  localStorage.setItem('logged', 'true');
}

export default function Login() {
  return (
    <div>
      <h1>this is the login page</h1>
      <p>Sign in</p>
      <button type="button" onClick={authenticate}>
        Click here
      </button>
    </div>
  );
}
