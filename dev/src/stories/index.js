import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import DrawCanvas from '../DrawCanvas/DrawCanvas';

// console.log(imageSize);
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Canvas', module).add('Render Canvas', () => <DrawCanvas 
  height="240"
  width="300"  
  imgSrc="https://ric-bucket.s3.amazonaws.com/device_5c05ee0cb669e165879e622a/sensorview.jpg"
/> )
