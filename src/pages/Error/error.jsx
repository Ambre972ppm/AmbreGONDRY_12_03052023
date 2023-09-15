import './Error.scss';
import { Link } from 'react-router-dom'


function Error() {
    return (
      <div className="Error-page">
        <h1 className='error-title'>404</h1>
        <p className='error-quote'>Oups! La page que vous demandez n'existe pas.</p>
        <Link className='error-back-link' to="/">Retourner sur la page d’accueil</Link>
      </div>
    );
  }
  
  export default Error;
  