import './maindash.css';
import React from 'react';
import Cards from '../cards/cards';
import Table from '../Table/Table'

const Maindash =() =>{
return(
<div className="Maindash">
    <h1>Dashboard</h1>
    <Cards/>
    <Table/>
</div>

)


}



export default Maindash;