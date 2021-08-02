import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import React, { useEffect } from 'React';
import { useHistory, useParams } from 'react-router-dom';

const IFrameMicroFrontend = props => {
  const { id } = useParams();
  const path = id ? `${props.src}/${id}` : props.src;

  const history = useHistory();

  useEffect(() => {
    window.addEventListener('message', event => {
      if (event.data.action === 'navigateTo') {
        history.push(event.data.payload);
      }
    });
  });

  return (
    <div style={{ width: '100%', height: 'auto' }}>
      <ResponsiveEmbed aspectRatio='1by1'>
          <iframe src={path}></iframe>
      </ResponsiveEmbed>
    </div>
  );
};

export {
  IFrameMicroFrontend
};
