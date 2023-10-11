import { Link } from 'react-router-dom';
import './Cource.css';
function Courceitem({  id ,img , Head , Des}){
    return(
        <div className="Cource-item">
        <img src= {img}  alt="ReactPicture" />
         <h1 className="Cource-Header">
                {Head}
         </h1>
         <p className="Cource-Des">  {Des} </p>
         <button className="buy">
            <Link to={`/Cource/${id}`}>
            تهیه دوره
            </Link>
         </button>
    </div>
    )
}
export default Courceitem