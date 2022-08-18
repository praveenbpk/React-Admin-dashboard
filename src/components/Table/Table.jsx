import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css';

function createData(
  name, 
  trakingId,date,status 
) {
  return { name, trakingId,date,status };
}

const rows = [
    createData('Chiken Fri',1897878478,"2 March 2022","Approved"),
    createData('Mutton Fri',1897487878,"2 March 2022","Pending"),
    createData(' EGG Fri',189787478,"2 March 2022","Approved"),
    createData('Musroom Fri',1897877478,"2 March 2022","Delivered"),
  
];

const makestyle=(status) =>{
   if (status ==='Approved')
return{ 
    background:'rgb(145 254 159 / 47%)',
    color:'green',
}
else if(status ==='Pending'){
    return{ 
        background:'#ffadad8f',
        color:'red',
    }
}
else{
    return{ 
        background:'#59bfff',
        color:'white',
    }
}
}

export default function BasicTable() {
  return (
      <div className="Table">
          <h3>Recent Orders</h3>
     
    <TableContainer component={Paper}
    
    styel={{boxShadow :'0px 13px 20px 0px #80808029'}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="left">Tracking Id</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trakingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                  <span className='status' 
                 style={makestyle(row.status)} >{row.status}</span>
              </TableCell>
              <TableCell align="left" className="details">Detail</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
