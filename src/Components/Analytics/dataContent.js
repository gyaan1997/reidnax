// SalesTable.js
import React, { useState, useEffect } from 'react';
import { fetchData } from '../../apiConfig.js';
import { styled } from '@mui/system';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

const StyledDiv = styled('div')({
  
  marginTop: '50px',
 
});

const StyledTableContainer = styled(TableContainer)({
  maxWidth: '80%',
  margin: 'auto',

});

const StyledTableRow = styled(TableRow)(({ index }) => ({
  backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white',
}));

const StyledTypography = styled(Typography)({
  marginBottom: '20px',
  // textAlign: 'center',
  marginLeft:"180px",

  cursor:"pointer",
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: '#333', // Add your desired color
});


const DataContent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const analyticsData = await fetchData('/api/analyticData');
        setData(analyticsData);
        console.log(analyticsData)
      } catch (error) {
        console.error('Error fetching analytics data:', error);
      }
    };

    fetchDataFromApi();
  }, []);
  return (
    <StyledDiv>
      <StyledTypography variant="h4"> Car sales Chart for Year-2022</StyledTypography>
      <StyledTableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell>Tesla</TableCell>
              <TableCell>Nissan</TableCell>
              <TableCell>Chevrolet</TableCell>
              <TableCell>BMW</TableCell>
              <TableCell>Audi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <StyledTableRow key={index} index={index}>
                <TableCell>{row.Month}</TableCell>
                <TableCell>{row.Tesla}</TableCell>
                <TableCell>{row.Nissan}</TableCell>
                <TableCell>{row.Chevrolet}</TableCell>
                <TableCell>{row.BMW}</TableCell>
                <TableCell>{row.Audi}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </StyledDiv>
  );
};
export default DataContent;

