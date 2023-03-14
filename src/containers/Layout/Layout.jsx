import React from 'react';
import {useSelector} from 'react-redux';

import {Header} from '@components/Navigation/Header/Header';
import {Menu} from '@components/Navigation/Menu/Menu';
import {MobileNavBar} from '@components/Navigation/MobileNavBar/MobileNavBar';
import {MdHome, MdExplore, MdBookmark} from 'react-icons/md';
import {useTheme} from 'styled-components';

const routes = [
  {to: '/home', Icon: MdHome, text: 'Home', privacy: 'P'},
  {to: '/login', Icon: MdExplore, text: 'Explore', privacy: 'P'},
  {
    to: '/bookmarks/your_tweets',
    Icon: MdBookmark,
    text: 'Bookmarks',
    privacy: 'P',
  },
];

function Layout({children}) {
  //Global state from redux to render the component if the user is auth
  const userAuth = useSelector((state) => state.user.isAuth);

  const [menu, setMenu] = React.useState(false);
  const theme = useTheme();

  const markLink = ({isActive}) => ({
    borderBottom: isActive ? `2px solid ${theme.brandColor}` : 'none',
    color: isActive ? theme.brandColor : theme.secondaryText,
  });

  const toggleMenu = () => {
    setMenu(!menu);
  };

  if (userAuth) {
    return (
      <>
        <Header toggleMenu={toggleMenu} routes={routes} markLink={markLink} />
        {menu && <Menu />}
        {children}
        <MobileNavBar routes={routes} markLink={markLink} />
      </>
    );
  }

  return children;
}

export {Layout};
