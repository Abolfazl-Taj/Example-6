import Nav from '../../Components/Nav/Nav';
import Headerimg from '../../Assets/Pic/Header.png'
import './Home.css';
import Cource from '../../Components/Cource/Cource';
import Footer from '../../Components/Footer/Footer';

export default function  Home(){
    return(
        <>
        <Nav></Nav>
        <div className="Home">

             <div className="Header">
             <div className="Header-Left">
                    <h1 className="Topic">یادگیری برنامه نویسی به اسانی با روکسین</h1>
                    <p className="Header-des">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                     روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
                     ، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای 
                     طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
                      در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و 
                     شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاور
                     دهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجو
                     د طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
            </div>

                <img src={Headerimg} alt="Header Img"  />

  
                
            </div>   
           <Cource></Cource>
           <Footer />

        </div>
        </>
    )
}