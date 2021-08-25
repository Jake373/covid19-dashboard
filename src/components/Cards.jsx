import {Typography,makeStyles,CircularProgress,Box,Grid} from '@material-ui/core';
import Card from "./Card";
const useStyles = makeStyles({
    component: {
        margin: '50px 0',
        flexDirection:'column',
        alignItems: 'center',
        display: 'flex'
    },
    container: {
        color: "#8ACA2B",
        margin: '20px 0'
    }
})
const Cards = ({data: {confirmed, deaths, recovered, lastUpdate}}) =>{
    const classes=useStyles();

    if(!confirmed){
        return <CircularProgress />;
    }

      return (
          <Box className={classes.component}>
          <Typography className={classes.container} variant="h4" >Coronavirus Cases Globally</Typography>
          <Grid container spacing={3} justify="center">
            <Card 
              cardTitle="Infected"
              value={confirmed.value}
              desc="Number of Infected People"
              lastUpdate={lastUpdate}
            />
            <Card
               cardTitle="Recovered"
               value={recovered.value}
               desc="Number of Recovered People"
               lastUpdate={lastUpdate}
            />
            <Card 
               cardTitle="Deaths"
               value={deaths.value}
               desc="Number of Deaths"
               lastUpdate={lastUpdate}
            />
           </Grid>
          </Box>
      )
}

export default Cards;