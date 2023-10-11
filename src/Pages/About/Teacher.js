import About from './About';
import './About.css';
import { Link } from 'react-router-dom';
function Teacher({  id , Aks , Name , Job}){
    return(
    <>
    <div className="Teacher">
      <img src={Aks}  alt="Teacher" />
      <h1 className="Teacher-Name"> {Name}  </h1>
     <h3 className="Teeacher-Job"> {Job}  </h3>
        <button className="Btn">
        <Link to={`Ostad/${id}`}>
         درباره ی استاد
        </Link>
             </button>
    </div>
    </>
    )
}
export default Teacher