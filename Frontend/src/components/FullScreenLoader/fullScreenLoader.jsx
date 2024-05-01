import { Spinner } from 'react-bootstrap';

import './styles.css';

function FullScreenLoader() {
  return (
    <div className="fullscreen-loader">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Carregando...</span>
      </Spinner>
    </div>
  );
}

export default FullScreenLoader;