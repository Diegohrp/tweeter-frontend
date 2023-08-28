import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Header} from '@components/Navigation/Header/Header';
import {Menu} from '@components/Navigation/Menu/Menu';
import {MobileNavBar} from '@components/Navigation/MobileNavBar/MobileNavBar';
import {MdHome, MdExplore, MdBookmark} from 'react-icons/md';
import {useTheme} from 'styled-components';
import {setScrollAction} from '../../actions/creators/posts.creators';

const routes = [
  {to: '/home', Icon: MdHome, text: 'Home', privacy: 'P'},
  {to: '/explore', Icon: MdExplore, text: 'Explore', privacy: 'P'},
  {
    to: '/bookmarks',
    Icon: MdBookmark,
    text: 'Bookmarks',
    privacy: 'P',
  },
];

function Layout({children, scrollRef, currentPage}) {
  //Global state from redux to render the component if the user is auth
  const userAuth = useSelector((state) => state.user.isAuth);
  //Updates the scrollTop in the global state when the user changes the page
  const dispatch = useDispatch();

  const saveLastScroll = () => {
    dispatch(
      setScrollAction({
        page: currentPage,
        scroll: scrollRef.current.scrollTop,
      })
    );
  };

  const [menu, setMenu] = React.useState(false);
  const theme = useTheme();

  const markLink = ({isActive}) =>
    isActive
      ? {borderBottom: `2px solid ${theme.brandColor}`, color: theme.brandColor}
      : {borderBottom: 'none', color: theme.secondaryText};

  const toggleMenu = () => {
    setMenu(!menu);
  };

  if (userAuth) {
    return (
      <>
        <Header
          toggleMenu={toggleMenu}
          routes={routes}
          markLink={markLink}
          setScroll={saveLastScroll}
        />
        {menu && <Menu />}
        {children}
        <MobileNavBar
          routes={routes}
          markLink={markLink}
          setScroll={saveLastScroll}
        />
      </>
    );
  }

  return children;
}

export {Layout};
