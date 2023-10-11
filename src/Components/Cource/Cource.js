import './Cource.css';
import {useState } from 'react'
import Courceitem from './Courceitem'
import  {Data} from "../../Data"
function Cource(){
  const [cources , setCources] = useState(Data)

    return(
        <div className="Cources">
       
        {
            cources.map(cource => <Courceitem key={cource.id} {...cource} ></Courceitem>)
        }

        </div>
    )
}
export default Cource