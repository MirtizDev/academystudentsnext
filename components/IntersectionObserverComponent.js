import React, { useRef, useEffect } from 'react';

const IntersectionObserverComponent = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.5, 
    };

    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Element is visible!');
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div ref={targetRef}>
      {/* Element içeriği */}
    </div>
  );
};

export default IntersectionObserverComponent;
