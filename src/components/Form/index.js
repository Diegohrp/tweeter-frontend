import React from 'react';
import {StyledForm} from './styles';

function Form({children, title, desc}) {
  return (
    <StyledForm>
      <section>
        <img></img>
        <span>{title}</span>
        {desc && <span>{desc}</span>}
      </section>
      <section>{children}</section>
      <section>
        <span></span>
        <ul>
          <li></li>
          <li></li>
        </ul>
        <span></span>
      </section>
    </StyledForm>
  );
}

export {Form};
