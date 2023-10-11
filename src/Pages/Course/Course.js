import {useParams} from "react-router-dom"
import './Cource.css';
import Nav from '../../Components/Nav/Nav';
import  {Data} from "../../Data"
import Footer from '../../Components/Footer/Footer';


export default function  Cource(){
    
    const CourceId = useParams().CourceId;
    const CourceInfo = Data.find(Cource => Cource.id == CourceId)
    return(
        <>
     <Nav></Nav>

      <div className="Cource">
        <img src={CourceInfo.img} alt="" />
       
    <div className="Cource-Info">
        <h1>{CourceInfo.Head}</h1>
        <h3>مدرس: {CourceInfo.Teach}</h3>
        <h4>{CourceInfo.Des}</h4>

        <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
    </div>




      </div>
      <Footer />



        
        </>
    )
}