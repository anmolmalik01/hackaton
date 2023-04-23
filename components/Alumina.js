import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "../styles/open.module.css"
import FiUserPlus from "react-icons/fi"


function Alumina(props) {
  return (
    <div className={styles.m}>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/assets/user.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.Name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.Email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{props.Graduation_year}</Button>
          <Button size="small">{props.Description}</Button>
        </CardActions>
      </Card>
    </div>
  );
}


export default Alumina
