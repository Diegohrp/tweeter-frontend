import React from 'react';
import {Form} from '../../containers/Form/Form';
import {LoginContainer} from './styles';
import {MdEmail} from 'react-icons/md';
import {MdError} from 'react-icons/md';
import {RiLockPasswordFill} from 'react-icons/ri';
import {FormInput} from '../../components/FormInput/FormInput';
import {useValidateInputFields} from '../../hooks/useValidateInputFields';
import {errorMsg} from '../SignUp';
import {useRequest} from '../../hooks/useRequest';
import {login} from '../../services/user.service';
import {Loading} from '../../components/Loading/Loading';
import {Modal} from '../../components/Modal/Modal';
import {RequestMessage} from '../../components/RequestMessage/RequestMessage';
import {useNavigate} from 'react-router-dom';

const initialState = {
  email: {value: '', valid: null},
  password: {value: '', valid: null},
};

function Login() {
  //Cutoms hook to validate input fields
  const {state, onChangeEmail, onChangePassword, onErrorSubmitLogin} =
    useValidateInputFields(initialState);
  //Form ref
  const form = React.useRef(null);
  //Manages state for the request
  const {loading, error, response, closeErrorModal, makeRequest} = useRequest();
  //react-dom hook to redirect the user to the home if they're authenticated
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const wrongField = Object.values(state).find(
      (field) => field.valid !== true
    );
    if (wrongField) {
      onErrorSubmitLogin();
    } else {
      const formData = new FormData(form.current);
      const data = {
        email: formData.get('email'),
        password: formData.get('password'),
      };

      await makeRequest(login, data);
    }
  };

  React.useEffect(() => {
    if (response) {
      navigate('/');
    }
  }, [response]);

  return (
    <LoginContainer>
      <Modal isOpen={error}>
        <RequestMessage
          Icon={MdError}
          closeModal={closeErrorModal}
          type="error"
          message={error}
        />
      </Modal>
      {loading && !error && !response && <Loading />}

      <Form
        title="Login"
        text="Don't have an account yet? "
        linkTxt="Register"
        path="/signup"
        formRef={form}>
        <FormInput
          Icon={MdEmail}
          type="email"
          placeholder="Email"
          name="email"
          value={state.email.value}
          valid={state.email?.valid}
          onChange={onChangeEmail}
          errorMsg={errorMsg.email}
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

        <button onClick={handleSubmit}>Login</button>
      </Form>
    </LoginContainer>
  );
}

export {Login};
