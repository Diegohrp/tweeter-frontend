import React from 'react';
import {Form} from '../../components/Form/Form';
import {SignupContainer} from './styles';
import {FaUserAlt} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {RiLockPasswordFill} from 'react-icons/ri';
import {createAccount} from '@services/user.service';
import {useValidateInputFields} from '../../hooks/useValidateInputFields';
import {FormInput} from '../../components/FormInput/FormInput';
import {RequestMessage} from '../../components/RequestMessage/RequestMessage';
import {useRequest} from '../../hooks/useRequest';
import {Loading} from '../../components/Loading/Loading';
import {Modal} from '../../components/Modal/Modal';
import {MdError} from 'react-icons/md';
import {IoCheckmarkCircleSharp} from 'react-icons/io5';

export const errorMsg = {
  name: 'Name must be at least 3 alphabetic characters and less than 30.',
  lastName:
    'Last name must be at least 3 alphabetic characters and less than 40.',
  email:
    'Email must include the character "@" and a domain. Example: "username@doman.com"',
  username:
    'Username must be at least 3 alphanumeric characters and less than 20.',
  password: 'For your security, password must be at least 8 characters long.',
};

const initialState = {
  name: {value: '', valid: null},
  lastName: {value: '', valid: null},
  email: {value: '', valid: null},
  username: {value: '', valid: null},
  password: {value: '', valid: null},
};

function SignUp() {
  const form = React.useRef(null);
  const {
    loading,
    error,
    response,
    makeRequest,
    closeErrorModal,
    closeSuccessModal,
  } = useRequest();

  const {
    state,
    onChangeName,
    onChangeLastName,
    onChangeEmail,
    onChangeUserName,
    onChangePassword,
    onErrorSubmitSignUp,
  } = useValidateInputFields(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const wrongField = Object.values(state).find(
      (field) => field.valid !== true
    );
    if (wrongField) {
      onErrorSubmitSignUp();
    } else {
      const formData = new FormData(form.current);
      const data = {
        name: formData.get('name'),
        last_name: formData.get('lastname'),
        email: formData.get('email'),
        username: formData.get('username'),
        password: formData.get('password'),
      };
      //Send the data to the backend
      //Uses user.service "createAccount"
      await makeRequest(createAccount, data);
    }
  };
  return (
    <SignupContainer>
      <Modal isOpen={error}>
        <RequestMessage
          closeModal={closeErrorModal}
          message={error}
          type="error"
          Icon={MdError}
        />
      </Modal>
      <Modal isOpen={response}>
        <RequestMessage
          closeModal={closeSuccessModal}
          message={response?.message}
          type="success"
          Icon={IoCheckmarkCircleSharp}
        />
      </Modal>

      {loading && !error && !response && <Loading />}

      <Form
        title="Sign Up"
        desc="Create your account"
        text="Already a member? "
        linkTxt="Login"
        path="/login"
        formRef={form}>
        <FormInput
          Icon={FaUserAlt}
          type="text"
          placeholder="Name"
          name="name"
          value={state.name.value}
          valid={state.name.valid}
          onChange={onChangeName}
          errorMsg={errorMsg.name}
        />
        <FormInput
          Icon={FaUserAlt}
          type="text"
          placeholder="Last name"
          name="lastname"
          value={state.lastName.value}
          valid={state.lastName.valid}
          onChange={onChangeLastName}
          errorMsg={errorMsg.lastName}
        />
        <FormInput
          Icon={MdEmail}
          type="email"
          placeholder="Email"
          name="email"
          value={state.email.value}
          valid={state.email.valid}
          onChange={onChangeEmail}
          errorMsg={errorMsg.email}
        />
        <FormInput
          Icon={FaUserAlt}
          type="text"
          placeholder="Username"
          name="username"
          value={state.username.value}
          valid={state.username.valid}
          onChange={onChangeUserName}
          errorMsg={errorMsg.username}
        />
        <FormInput
          Icon={RiLockPasswordFill}
          type="password"
          placeholder="Password"
          name="password"
          value={state.password.value}
          valid={state.password.valid}
          onChange={onChangePassword}
          errorMsg={errorMsg.password}
        />
        <button type="submit" onClick={(event) => handleSubmit(event)}>
          Sign up
        </button>
      </Form>
    </SignupContainer>
  );
}

export {SignUp};
