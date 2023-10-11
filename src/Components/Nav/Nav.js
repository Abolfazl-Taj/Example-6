import { useState } from 'react';
import { isLogin } from '../../utilities';
import Swal from 'sweetalert2'
import './Nav.css';
import { NavLink } from 'react-router-dom';
function Nav(){
  const Saet = new Date().getHours()   ;
  const Dagighe = new Date().getMinutes()   ;
  const Sanie = new Date().getSeconds()  ;
  let [name , setName] = useState(isLogin())
const ClickHandeler = ()=>{
  if(isLogin()){
    document.cookie = "username=Admin; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/"
    Swal.fire({
      title: 'موفق!',
      text: 'شما با موفقیت حارج شدین ',
      icon: 'success',
      backdrop: `#111`,
      footer:`
      این در خواست در ${Saet} :${Dagighe} : ${Sanie} اجرا شده است ` ,
      confirmButtonText: 'تایید'
    })    
  }
}
 return(
    <div className="Nav">
      <div className="NavList">
     <NavLink  to='/' className='Left-Item' >صفحه ی اصلی </NavLink>
     <NavLink  to='/About' className='Left-Item' >درباره ی ما </NavLink>
     <NavLink  to='/Blogs' className='Left-Item' >مقالات </NavLink>
     <NavLink  to='/Panel' className='Left-Item' > کاربر </NavLink>
     {isLogin() === true ?  <NavLink  to='/Login' className='Left-Item' onClick={ClickHandeler}> خروج</NavLink> :
           <NavLink  to='/Login' className='Left-Item'> ورود</NavLink>
 
     }

      </div>
    
    </div>
 )
}
export default Nav