import React from 'react';
import './cards.css'
import { CardsData } from '../../data/data';
import Card from '../card/card'

  

const Cards=()=>{
 return(
 <div className="Cards">
     {CardsData.map((card,id)=>{

       return(
           <div className="ParentContainer">
            <Card
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            Value={card.Value}
            png={card.png}
            series={card.series}
            
            />
           </div>
       )

     })}
 </div>
 )


}


export default Cards;