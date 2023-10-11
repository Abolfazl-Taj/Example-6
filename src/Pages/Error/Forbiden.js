import ForPic from '../../Assets/Pic/Forbiden.png'
import {Link} from 'react-router-dom'
import './Forbiden.css';

function Forbiden(){
    return(
        <>
        <div className="Error">
        <img src={ForPic}  alt="Error-Type:Forbiden" />
            <h1 className="ErrorFor">
                        شما به این قسمت دسترسی ندارید برای دسترسی وارد شوید!.
            </h1>
            <Link className='ForBtn' to='/' >
            بازگشت به خانه 
            
            </Link>
        </div>
        
        </>
    )
}
export default Forbiden