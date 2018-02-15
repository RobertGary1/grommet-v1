import React from 'react';
import { Box } from 'grommet';

export default ({ colorIndex, separator, size, texture, ...rest }) => {
  let background;
  if (texture) {
    background = { image: texture };
    if (colorIndex === 'dark') {
      background.dark = true;
    } else if (colorIndex) {
      background.color = colorIndex;
    }
  } else if (colorIndex) {
    background = colorIndex;
  }

  return (
    <Box
      background={background}
      border={separator}
      basis={size}
      gap={rest.pad && rest.pad.between}
      {...rest}
    />
  );
};
