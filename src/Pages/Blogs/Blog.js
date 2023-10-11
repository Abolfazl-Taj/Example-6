import { NavLink , Outlet } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import './Blog.css';

 function  Blog(){
    return(
        <>
            <Nav></Nav>
        <div className="Blog">
            <h1 className="Blog-Header">
                     بخش مقالات 
            </h1>
            <p className="Blog-Des">
                 مقالات ما به شما کمک میکنند تا در باره ی موضوعی که میخواهید اطلاعات بهتر ، بیشتر و مفید تری دریافت کنید.
            </p>
                <div className="Blog-List">
                  <NavLink className='Links' to='Js'> جاوا اسکریپت </NavLink>
                  <NavLink className='Links' to='React'> ریکت جی اس </NavLink>
                  <NavLink className='Links' to='Tailwind'> تلویند سی اس اس </NavLink>
                </div>

        </div>
        
    <div className="Show-item">
        <Outlet />



    </div>

        
        </>
    )
}


export default Blog