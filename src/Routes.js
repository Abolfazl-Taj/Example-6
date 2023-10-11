import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blogs/Blog'
import Login from './Pages/Login/Login'
import Panel from './Pages/Panel/Panel'
import Cource from './Pages/Course/Course';
import Ostad from './Pages/About/Ostad/Ostad'
import Forbiden from './Pages/Error/Forbiden';
import PriveteRoute from './Components/PriveteRoutes';






 const Routes = [
    {path:'/' , element:<Home></Home>},
    {path:'/About' , element:<About></About>},
    {path:'/About/Ostad/:Teacher' , element:<Ostad></Ostad>},
    {path:'//Blogs/*' , element:<Blog></Blog> , children:[
      {path:"Js" ,  element:<h1> JavaScript که به اختصار JS نیز نامیده می‌شود، یکی از محبوبترین زبان‌های برنامه نویسی است. جاوا اسکریپت زبانی سطح بالا، داینامیک، شی‌گرا و تفسیری است که از شیوه‌های مختلف برنامه نویسی پشتیبانی می‌کند. از این زبان می‌توان برای برنامه نویسی سمت سرور (Server Side)، اپلیکیشن‌های موبایل، بازی و اپلیکیشن‌های دسکتاپ استفاده کرد. بنابراین می‌توان اینگونه برداشت کرد که زبان برنامه نویسی جاوا اسکریپت ، یک زبان همه فن حریف است. </h1>
    },
      {path:"React" , element:<h1>     React هم یک کتابخانه‌ی قدرتمند است که تحت زبان برنامه نویسی جاوا اسکریپت (js) عمل می‌کند. یک کتابخانه‌ی منبع باز یا اوپن سورس (Open-Source) که به کمکش می‌توانید برای برنامه‌های مختلف علی‌الخصوص برنامه‌های یک‌صفحه‌ای (Single-page)، رابط کاربری ایجاد کنید    </h1> },
      {
        path:"Tailwind" , element:<h1> امروز قصد داریم در ارتباط با فریمورک جدیدی صحبت کنیم. Tailwind CSS فریمورک جدید CSS است که نسبت به فریمورک‌های گفته شده تفاوت عظیمی دارد. Tailwind CSS فاقد هر گونه قالب پیش‌فرض است و در آن هیچ کامپوننت داخلی برای رابط کاربری وجود ندارد. Tailwind را می‌تواند یک فریمورک CSS برای ساخت رابط‌های کاربری سفارشی دانست. این بدان معناست که اگر دنبال فریمورکی هستید که یکسری ویجت و کامپوننت از پیش طراحی شده را در خود داشته باشد، Tailwind انتخاب مناسبی برای شما نخواهد بود. اما اگر قصد ساخت یک رابط کاربری پیچیده و البته سفارشی را دارید Tailwind CSS می‌تواند به خوبی به شما کمک بکند. از آنجایی که در این ابزار خبری از کامپوننت‌های آماده به شکل کامپوننت‌های بوت‌استرپ و یا فاوندیشن وجود ندارد بنابراین دو وبسایت طراحی شده با استفاده از این فریمورک الزاما شبیه همدیگر نخواهند بود. </h1>
      }
    ]},
    {path:'/Login' , element:<Login></Login>},
    {path:'/Cource/:CourceId' , element:<Cource></Cource>},
    {path:'Error/Forbiden' , element:<Forbiden></Forbiden>},
    {path:'/Panel' , element:<PriveteRoute>
      <Panel /> 
    </PriveteRoute>},

  ]
  export default Routes