import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { styled } from '@mui/system';
import { fetchData } from '../../apiConfig.js';
import { Typography } from '@mui/material';
import { Chart, CategoryScale, LinearScale, BarController, BarElement } from 'chart.js/auto';
// Register the necessary components
Chart.register(CategoryScale, LinearScale, BarController, BarElement);
const StyledContainer = styled('div')({
  marginTop: '20px',
  marginLeft: '180px',
  marginRight: 'auto',
  paddingBottom:"50px",

  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  width: '75%',
  height: '650px',
});
const StyledTypography = styled(Typography)({
  
 marginTop:"50px"
,
  marginLeft:"180px",


  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: '#333', 
cursor:"pointer",
});
const BarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const analyticsData = await fetchData('/api/analyticData');
        setData(analyticsData);
        console.log(analyticsData);
      } catch (error) {
        console.error('Error fetching analytics data:', error);
      }
    };

    fetchDataFromApi();
  }, []);

  const chartData = {
    labels: data.map(row => row.Month),
    datasets: [
      {
        label: 'Tesla',
        backgroundColor: '#B2A8A9',
        borderWidth: 0.5,
       
        hoverBorderColor: '#FFD5D5',
        data: data.map(row => row.Tesla),
      },
      {
        label: 'Nissan',
        backgroundColor: '#FF9F9F',
        borderWidth: 0.5,
        hoverBorderColor: '#B3C8CC',
        data: data.map(row => row.Nissan),
      },
      {
        label: 'Chevrolet',
        backgroundColor: '#FFD5D5', 
        borderWidth: 0.5,
        hoverBorderColor: '#B3C8CC',
        data: data.map(row => row.Chevrolet),
      },
      {
        label: 'BMW',
        backgroundColor: '#7293A2', 
        borderWidth: 0.5,
        hoverBorderColor: '#B3C8CC',
        data: data.map(row => row.BMW),
      },
      {
        label: 'Audi',
        backgroundColor: '#A8C3FF',
        borderWidth: 0.5,
        hoverBorderColor: '#B3C8CC',
        data: data.map(row => row.Audi),
      },
    ],
  };

  const chartOptions = {
    scales: {
      indexAxis: 'x',
      x: {
        
        grid: {
          display: false,
          
        },
      },
      y: {
        grid: {
          display: false,
          
        },
        beginAtZero: true,
        ticks: {
          stepSize: 50,
        },
      },
    },
    plugins: {
      legend: {
      
        position: 'bottom',
        align: 'start',
     
      },
    },
    layout: {
      padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    animation: {
      duration: 800, 
      easing: 'easeInOutQuart', 
    },
    tooltips: {
      callbacks: {
        label: (tooltipItem) => `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}`,
      },
    },
  };

  return (<>
    <StyledTypography variant="h4">Car sales Chart for Year-2022</StyledTypography>

    <StyledContainer>

      <Bar data={chartData} options={chartOptions} />
    </StyledContainer>
    </>
  );
};

export default BarChart;
