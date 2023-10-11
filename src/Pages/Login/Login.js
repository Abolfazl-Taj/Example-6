import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import Nav from '../../Components/Nav/Nav';
import './Login.css';

export default function  Login(){
    let [user , setUser] = useState("")
    let [pass , setPass] = useState("");
    const Navigate = useNavigate()
    const LoginHandeler = ()=>{
      if(user ==="Admin" && pass==="1234"){
        document.cookie = "username=Admin; expires=Thu, 18 Dec 2026 12:00:00 UTC; path=/";
        Navigate('/Panel')

      }
      else if(user === '' || pass ===''){
             Swal.fire({
            title: 'خطا!',
            text: 'نام کاربری یا رمز عبور پر نشده است!',
            icon: 'error',
            confirmButtonText: 'تایید'
          })
      }
      else{
        Swal.fire({
            title: 'خطا!',
            text: 'نام کاربری یا رمز عبور اشتباه است!',
            icon: 'error',
            confirmButtonText: 'تایید'
          })
      }
    }
    return(
        <>
        <Nav></Nav>

        <div className="Login">
        <h1 className="Login-Header">
            صفحه ی ورود
          </h1>
            <form className="Login-Inputs">
                <input type="text" placeholder='نام کاربری' onChange={(e)=>{setUser(e.target.value)}} />
                <input type="password" placeholder='رمز عبور ' name="PassWord" id="" onChange={(e)=>{setPass(e.target.value)}} />
            </form>
            <button type="button" className="Login-btn" onClick={LoginHandeler} >
                    ورود به سایت 
            </button>
        </div>

        </>
    )
}