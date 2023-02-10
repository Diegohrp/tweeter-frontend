import React from 'react';

function useObserver() {
  const element = React.useRef(null);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    Promise.resolve(
      window.IntersectionObserver
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new IntersectionObserver((entries) => {
        const {isIntersecting} = entries[0];

        if (isIntersecting) setShow(true);
      });

      observer.observe(element.current);
    });
  }, []);

  return {element, show};
}

export {useObserver};
