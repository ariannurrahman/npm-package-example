import React from 'react';

type DotProps = {
  variant: 'red' | 'green' | 'blue';
};

const Dot = ({ variant }: DotProps) => {
  return <div style={{ backgroundColor: variant, width: 50, height: 50, borderRadius: '50%' }} />;
};

export { Dot };
