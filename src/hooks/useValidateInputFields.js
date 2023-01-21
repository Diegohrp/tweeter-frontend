import React from 'react';

const actionTypes = {
  checkName: 'CHECK_NAME',
  checkLastName: 'CHECK_LAST_NAME',
  checkEmail: 'CHECK_EMAIL',
  checkUsername: 'CHECK_USERNAME',
  checkPassword: 'CHECK_PASSWORD',
  errorSubmitSignUp: 'ERROR_SUBMIT_SIGNUP',
};
//Change the state of each field
const ReducerObj = (state, payload) => ({
  [actionTypes.checkName]: {
    ...state,
    name: payload,
  },
  [actionTypes.checkLastName]: {
    ...state,
    lastName: payload,
  },
  [actionTypes.checkEmail]: {
    ...state,
    email: payload,
  },
  [actionTypes.checkUsername]: {
    ...state,
    username: payload,
  },
  [actionTypes.checkPassword]: {
    ...state,
    password: payload,
  },
  [actionTypes.errorSubmitSignUp]: {
    name: state.name.valid === true ? state.name : payload,
    lastName: state.lastName.valid === true ? state.lastName : payload,
    email: state.email.valid === true ? state.email : payload,
    username: state.username.valid === true ? state.username : payload,
    password: state.password.valid === true ? state.password : payload,
  },
});
//Returns the change of the state in the corresponding field
const reducer = (state, action) =>
  ReducerObj(state)[action.type]
    ? ReducerObj(state, action.payload)[action.type]
    : 'Wrong type';

/* const initialState = {
  name: {value: '', valid: null},
  lastName: {value: '', valid: null},
  email: {value: '', valid: null},
  username: {value: '', valid: null},
  password: {value: '', valid: null},
}; */

//Regular expressions to validate each field
const regex = {
  name: /^[a-zA-Zá-úÁ-Ú\s]{3,30}$/,
  lastName: /^[a-zA-Zá-úÁ-Ú\s]{3,60}$/,
  email: /^[\w]+[\w.]+@[\w.]+(\.[a-zA-Z]{2,30})$/,
  username: /^[\w.-]{3,20}$/,
  password: /^[^]{8,40}$/,
};
//Evaluates the data field in a reg exp.
const validateData = (regex, value) => regex.test(value);

function useValidateInputFields(initialState) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const onChangeName = (e) =>
    dispatch({
      type: actionTypes.checkName,
      payload: {
        value: e.target.value,
        valid: validateData(regex.name, e.target.value),
      },
    });
  const onChangeLastName = (e) =>
    dispatch({
      type: actionTypes.checkLastName,
      payload: {
        value: e.target.value,
        valid: validateData(regex.lastName, e.target.value),
      },
    });
  const onChangeEmail = (e) =>
    dispatch({
      type: actionTypes.checkEmail,
      payload: {
        value: e.target.value,
        valid: validateData(regex.email, e.target.value),
      },
    });
  const onChangeUserName = (e) =>
    dispatch({
      type: actionTypes.checkUsername,
      payload: {
        value: e.target.value,
        valid: validateData(regex.username, e.target.value),
      },
    });
  const onChangePassword = (e) =>
    dispatch({
      type: actionTypes.checkPassword,
      payload: {
        value: e.target.value,
        valid: validateData(regex.password, e.target.value),
      },
    });
  const onErrorSubmitSignUp = () =>
    dispatch({
      type: actionTypes.errorSubmitSignUp,
      payload: {value: '', valid: false},
    });

  return {
    state,
    onChangeName,
    onChangeLastName,
    onChangeEmail,
    onChangeUserName,
    onChangePassword,
    onErrorSubmitSignUp,
  };
}

export {useValidateInputFields};
