import React from 'react';
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import {useDispatch} from 'react-redux';
//Styles
import {LoginContainer} from './styles';
//Icons
import {MdEmail} from 'react-icons/md';
import {MdError} from 'react-icons/md';
import {RiLockPasswordFill} from 'react-icons/ri';
//Containers
import {Form} from '../../containers/Form/Form';
//Components
import {FormInput} from '../../components/LoginSignup/FormInput/FormInput';
import {Loading} from '../../components/Request/Loading/Loading';
import {Modal} from '../../components/common/Modal/Modal';
import {RequestMessage} from '../../components/Request/RequestMessage/RequestMessage';
//hooks
import {useRequest} from '../../hooks/useRequest';
import {useValidateInputFields} from '../../hooks/useValidateInputFields';
//Services
import {login} from '../../services/user.service';
//Text error messages
import {errorMsg} from '../SignUp';

import {headersJson, headersMulti} from '../../services/headers';
import {authUserAction} from '../../actions/creators/user.creators';

const initialState = {
  email: {value: '', valid: null},
  password: {value: '', valid: null},
};

function Login() {
  //Redux dispatch to update the golabl state user:isAuth
  const dispatch = useDispatch();
  //Cutoms hook to validate input fields
  const {state, onChangeEmail, onChangePassword, onErrorSubmitLogin} =
    useValidateInputFields(initialState);
  //Form ref
  const form = React.useRef(null);
  //Manages state for the request
  const {
    state: {loading, response, error},
    closeErrorModal,
    sendDataRequest,
  } = useRequest();

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
      //send data to the backend
      //the response is stored in the state "response" from useRequest custom hook
      await sendDataRequest(login, data);
    }
  };

  React.useEffect(() => {
    if (response) {
      const {token} = response;
      Cookies.set('token', token, {expires: 1800});
      //update the bearer token in the headers object to send the token in each request
      headersJson.headers.Authorization = `Bearer ${Cookies.get('token')}`;
      headersMulti.headers.Authorization = `Bearer ${Cookies.get('token')}`;
      //A token was received, so change the global state (from redux) isAuth to true
      dispatch(authUserAction(true));
      //Redirect user to home
      navigate('/home');
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
      {loading && !error && !response && (
        <Loading style={{position: 'absolute'}} />
      )}

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
