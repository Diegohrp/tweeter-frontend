import React from 'react';
import {MenuContainer} from './PrivacyMenu.styles';
import {MdGroup, MdPublic} from 'react-icons/md';
const PrivacyMenu = ({choosePrivacy}) => {
  return (
    <MenuContainer>
      <div>
        <h3>Who can reply?</h3>
        <p>Choose who can reply to this Tweet.</p>
      </div>
      <ul>
        <li>
          <button
            onClick={() => choosePrivacy({Icon: MdPublic, txt: 'Everyone'})}>
            <MdPublic />
            <span>Everyone</span>
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              choosePrivacy({Icon: MdGroup, txt: 'People you follow'})
            }>
            <MdGroup />
            <span>People you follow</span>
          </button>
        </li>
      </ul>
    </MenuContainer>
  );
};
export {PrivacyMenu};
