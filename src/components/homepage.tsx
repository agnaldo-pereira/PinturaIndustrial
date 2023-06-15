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
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffffff', // #fff
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: "solid 1px #e3e2e1",
  borderRadius: "5px"
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, background: "", padding: "1rem" }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {/*<Item elevation={0} style={{ backgroundColor: '#000000' }}>*/}
          <Item elevation={0}>
            <Chart2 /> {/*Necessidade de aquecimento*/}
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item elevation={0}>
            <Chart5 /> {/*Temperatura da peça*/}
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item elevation={0}>
            <Chart3 /> {/*Umidade relativa do ar*/}
            {/*<img src={paintGif} alt="Paint GIF" style={{ height: '295px' }}/>*/}
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item elevation={0}>
            <Chart4 /> {/*Temperatura do ar*/}
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item elevation={0}>
            <Chart1 />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}