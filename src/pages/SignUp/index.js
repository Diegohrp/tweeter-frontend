import React from 'react';
import {Form} from '../../components/Form';
import {SignupContainer} from './styles';
import {FaUserAlt} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {RiLockPasswordFill} from 'react-icons/ri';
import {createAccount} from '@services/user.service';

function SignUp() {
  const form = React.useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      last_name: formData.get('lastname'),
      email: formData.get('email'),
      username: formData.get('username'),
      password: formData.get('password'),
    };

    //Send the data to the backend
    try {
      const response = await createAccount(data);
      console.log(response);
    } catch (err) {
      console.log(err.response.data);
    }
  };
  return (
    <SignupContainer>
      <Form
        title="Sign Up"
        desc="Create your account"
        text="Already a member? "
        linkTxt="Login"
        path="/login"
        formRef={form}>
        <div>
          <FaUserAlt />
          <input type="text" placeholder="Name" name="name" />
        </div>
        <div>
          <FaUserAlt />
          <input type="text" placeholder="Lastname" name="lastname" />
        </div>
        <div>
          <MdEmail />
          <input type="email" placeholder="Email" name="email" />
        </div>
        <div>
          <FaUserAlt />
          <input type="text" placeholder="Username" name="username" />
        </div>
        <div>
          <RiLockPasswordFill />
          <input type="password" placeholder="Password" name="password" />
        </div>
        <button type="submit" onClick={(event) => handleSubmit(event)}>
          Sign up
        </button>
      </Form>
    </SignupContainer>
  );
}

export {SignUp};
