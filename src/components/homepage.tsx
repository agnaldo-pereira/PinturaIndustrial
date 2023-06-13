import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Chart1 from './chart/chart1';
import Chart2 from './chart/chart2';
import Chart3 from './chart/chart3';
import Chart4 from './chart/chart4';
import Chart5 from './chart/chart5';
import paintGif from '../assets/paint.gif';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <Chart2/> {/*Necessidade de aquecimento*/}
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Chart5/> {/*Temperatura da peça*/}
          </Item> 
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Chart3/> {/*Umidade relativa do ar*/}
            {/*<img src={paintGif} alt="Paint GIF" style={{ height: '295px' }}/>*/}
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Chart4/> {/*Temperatura do ar*/}
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Chart1/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}