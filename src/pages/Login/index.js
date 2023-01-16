import React from 'react';
import {Form} from '../../components/Form';
import {LoginContainer} from './styles';
import {MdEmail} from 'react-icons/md';
import {RiLockPasswordFill} from 'react-icons/ri';

function Login() {
  return (
    <LoginContainer>
      <Form
        title="Login"
        text="Don't have an account yet? "
        linkTxt="Register"
        path="/signup">
        <div>
          <MdEmail />
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <RiLockPasswordFill />
          <input type="password" placeholder="Password" />
        </div>
        <button>Login</button>
      </Form>
    </LoginContainer>
  );
}

export {Login};
