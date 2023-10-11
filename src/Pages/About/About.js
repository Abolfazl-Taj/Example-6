import { useState } from 'react';
import Nav from '../../Components/Nav/Nav';
import './About.css';
import Teacher from './Teacher'
import {TData} from '../../TData'
import Footer from '../../Components/Footer/Footer';
export default function  About(){
    const [asatids , setAsatids] = useState(TData);
    return(
        <>
        <Nav></Nav>

        <div className="About">
            <h1>درباره ی ما </h1>
            <p>
              تیم روکسین از سال 1398 فعالیت خود را شروع کرد،هدف تیم ما برای آموزش برنامه نویسی به بهترین شکل  و بالاترین کیفیت هست،سعی ما این است که شما را به یکی از بهترین برنامه نویسیان جهان تبدیل کنیم 
            </p>
            <div className="Teacher-Section">
                <h2>اساتید</h2>
                <div className="Teachers">
                    {
                        asatids.map(asatid => <Teacher {...asatid}></Teacher>)
                    }


                    
                </div>

            </div>
        </div>



<Footer></Footer>


        </>
    )
}