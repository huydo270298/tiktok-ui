import { forwardRef, useState } from 'react';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
  const [fallback, setFallback] = useState('');
  const handleError = () => {
    setFallback(images.noImage);
  };
  return <img {...props} ref={ref} src={fallback || src} alt={alt} onError={handleError} />;
});

export default Image;
