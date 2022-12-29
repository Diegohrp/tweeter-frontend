import React from 'react';
import {StyledForm} from './styles';
import {AiOutlineGoogle, AiFillFacebook} from 'react-icons/ai';
import logo from '@icons/tweeter.svg';
function Form({children, title, desc}) {
  return (
    <StyledForm>
      <section className="title">
        <img alt="logo" src={logo} />
        <h2>{title}</h2>
        {desc && <span>{desc}</span>}
      </section>
      <section className="fields">{children}</section>
      <section className="social-media">
        <span></span>
        <ul>
          <li>
            <AiOutlineGoogle />
          </li>
          <li>
            <AiFillFacebook />
          </li>
        </ul>
        <span></span>
      </section>
    </StyledForm>
  );
}

export {Form};
