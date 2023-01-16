import React from 'react';
import {FormContainer} from './styles';
import {AiOutlineGoogle, AiFillFacebook} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import logo from '@icons/tweeter.svg';
function Form({children, title, desc, text, linkTxt, path, formRef}) {
  return (
    <FormContainer>
      <section className="title">
        <img alt="logo" src={logo} />
        <h2>{title}</h2>
        {desc && <span>{desc}</span>}
      </section>
      <form className="fields" ref={formRef}>
        {children}
      </form>
      <section className="social-media">
        <span>Or continue with these social profile</span>
        <ul>
          <li>
            <button>
              <AiOutlineGoogle />
            </button>
          </li>
          <li>
            <button>
              <AiFillFacebook />
            </button>
          </li>
        </ul>
        <span>
          {text} <Link to={path}>{linkTxt}</Link>
        </span>
      </section>
    </FormContainer>
  );
}

export {Form};
