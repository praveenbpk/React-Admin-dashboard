import React, { useState } from 'react';
import './sidebar.css';
import Logo from '../../imgs/logo.png';
import {UilEstate} from '@iconscout/react-unicons'
import {SidebarData} from '../../data/data';
import {UilSignOutAlt}from '@iconscout/react-unicons'
const Sidebar =()=>{

    const [selected,setSelected] = useState(0)
    const[expended,setExpended] = useState(true)
return (
   <div className="Sidebar">
       {/*logo*/}
       <div className="logo">
           <img src={Logo} alt="" />
           <span>
               Sh<span>o</span>ps
           </span>
       </div>


       {/*menu*/}
       <div className="menu">
           {SidebarData.map((item, index) =>{
               return(
                <div className={selected===index ?'menuItem active':'menuItem'}
                    key={index} 
                    onClick={()=>setSelected(index)}>
                    <item.icon/>
                    <span>{item.heading}</span>

                </div>
            )
           })}
            <div className="menuItem">
                <UilSignOutAlt/>
            </div>
       </div>


   </div>
   )

}

export default Sidebar;