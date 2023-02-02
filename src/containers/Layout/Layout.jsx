import React from 'react';
import {Header} from '@components/Navigation/Header/Header';
import {Menu} from '@components/Navigation/Menu/Menu';
import {MobileNavBar} from '@components/Navigation/MobileNavBar/MobileNavBar';
import {MdHome, MdExplore, MdBookmark} from 'react-icons/md';
import {useTheme} from 'styled-components';

const routes = [
  {to: '/', Icon: MdHome, text: 'Home', privacy: 'P'},
  {to: '/login', Icon: MdExplore, text: 'Explore', privacy: 'P'},
  {to: '/signup', Icon: MdBookmark, text: 'Bookmarks', privacy: 'P'},
];

function Layout({children}) {
  const [menu, setMenu] = React.useState(false);
  const theme = useTheme();

  const markLink = ({isActive}) => ({
    borderBottom: isActive ? `2px solid ${theme.brandColor}` : 'none',
    color: isActive ? theme.brandColor : theme.secondaryText,
  });

  const ToggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <Header toggleMenu={ToggleMenu} routes={routes} markLink={markLink} />
      {menu && <Menu />}
      {children}
      <MobileNavBar routes={routes} markLink={markLink} />
    </>
  );
}

export {Layout};
