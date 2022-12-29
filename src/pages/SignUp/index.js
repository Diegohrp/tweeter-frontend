import React from 'react';
import {Form} from '../../components/Form';
import {SignupContainer} from './styles';
import {FaUserAlt} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {RiLockPasswordFill} from 'react-icons/ri';
function SignUp() {
  return (
    <SignupContainer>
      <Form title="Sign Up" desc="Create your account">
        <div>
          <FaUserAlt />
          <input type="text" placeholder="Name" />
        </div>
        <div>
          <FaUserAlt />
          <input type="text" placeholder="Lastname" />
        </div>
        <div>
          <MdEmail />
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <FaUserAlt />
          <input type="text" placeholder="Username" />
        </div>
        <div>
          <RiLockPasswordFill />
          <input type="password" placeholder="Password" />
        </div>
      </Form>
    </SignupContainer>
  );
}

export {SignUp};
