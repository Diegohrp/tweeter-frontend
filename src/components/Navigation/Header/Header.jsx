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
import {getBasicUserInfo} from '@services/user.service';
//custom hooks
import {useRequest} from '../../../hooks/useRequest';
//acction creator
import {setUserBasicInfoAction} from '../../../actions/creators/user.creators';
//Images
import profileTemporal from '@images/profile-default.svg';

//This component gets the img URL for the SmallImg component
//and adds the data to the global state

const Header = ({toggleMenu, routes, markLink, setScroll}) => {
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
      getDataReques(getBasicUserInfo);
    } else {
      dispatch(
        setUserBasicInfoAction({
          userId: response.id,
          name: response.name,
          lastName: response.last_name,
          photo: response.photo,
        })
      );
    }
  }, [response]);

  return (
    <StyledHeader>
      <NavLink to="/home">
        <picture>
          <source media="(min-width:900px)" srcSet={logoDesktopImg} />
          <img alt="brand logo" src={logoMobileImg} />
        </picture>
      </NavLink>

      <nav>
        <ul>
          {routes.map((route) => (
            <li key={route.to} onClick={setScroll}>
              <NavLink to={route.to} style={markLink}>
                {route.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <ProfileSection>
        <button className="mobile" onClick={toggleMenu}>
          <img src={response?.photo || profileTemporal} alt="profile image" />
        </button>

        <SmallProfileImg userId={response?.id} image={response?.photo} />
        <p>{`${response?.name} ${response?.last_name}`}</p>
        <button className="desktop" onClick={toggleMenu}>
          <MdArrowDropDown />
        </button>
      </ProfileSection>
    </StyledHeader>
  );
};

export {Header};
