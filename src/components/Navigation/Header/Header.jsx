import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
//styles
import {StyledHeader, ProfileSection} from './Header.styles';
//icons
import {MdArrowDropDown} from 'react-icons/md';
import logoMobileImg from '@icons/tweeter-small.svg';
import logoDesktopImg from '@icons/tweeter.svg';

//components
import {SmallProfileImg} from '@components/common/SmallProfileImg/SmallProfileImg';
//services
import {getProfilePhoto} from '@services/user.service';
//custom hooks
import {useRequest} from '../../../hooks/useRequest';
//acction creator
import {setUserImgAction} from '../../../actions/creators/user.creators';

//This component gets the img URL for the SmallImg component
//and adds the data to the global state

const Header = ({toggleMenu, routes, markLink}) => {
  //custom hook to make a request
  const {
    state: {response},
    getDataReques,
  } = useRequest();
  //Global state from redux and dispatcher
  const userPhoto = useSelector((state) => state.user.photo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!response && !userPhoto) {
      getDataReques(getProfilePhoto);
    } else {
      dispatch(setUserImgAction(response.photo));
    }
  }, [response]);

  return (
    <StyledHeader>
      <picture>
        <source media="(min-width:900px)" srcSet={logoDesktopImg} />
        <img alt="brand logo" src={logoMobileImg} />
      </picture>

      <nav>
        <ul>
          {routes.map((route) => (
            <li key={route.to}>
              <NavLink to={route.to} style={markLink}>
                {route.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <ProfileSection>
        <button className="mobile" onClick={toggleMenu}>
          {response && <img src={response.photo} alt="profile image" />}
        </button>
        {response && <SmallProfileImg image={response.photo} />}
        <p>Xanthe Neal</p>
        <button className="desktop" onClick={toggleMenu}>
          <MdArrowDropDown />
        </button>
      </ProfileSection>
    </StyledHeader>
  );
};

export {Header};
