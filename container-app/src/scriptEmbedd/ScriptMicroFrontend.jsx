import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'React';

const ScriptMicroFrontend = props => {
  const history = useHistory();
  const scriptId = `micro-frontend-${props.name}`;
  const targetId = `${props.name}-target`;

  useEffect(async () => {
    const loadMicroFrontend = () => window[`render${props.name}`](targetId, history);

    // In case we already loaded the script before
    if (document.getElementById(scriptId)) {
      loadMicroFrontend();

      return;
    }

    const script = document.createElement('script');

    script.id = scriptId;
    script.src = props.src;
    script.type = 'module';
    script.onload = () => {
      loadMicroFrontend();
    };

    document.head.appendChild(script);
  });

  return (
    <div id={targetId}>Loading...</div>
  );
};

export {
  ScriptMicroFrontend
};
