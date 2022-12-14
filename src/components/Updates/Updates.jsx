import React from 'react';
import { UpdateData } from '../../data/data';
import "./Updates.css";


const Updates=()=>{
 return(
    <div className="Updates">
        {UpdateData.map((update)=>{ 
        return (
        <div className="Update">
            <img src={update.img} alt="" />
            <div className="noti">
                <div style={{marginBottom: '0.5rem'}}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
                </div>
                <span>{update.time}</span>
            </div>
            
        </div>

        )

        })}
    </div>
 )

}

export default Updates;