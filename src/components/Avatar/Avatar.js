import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';


export default function Feedback(props) {
  const { first_name,last_name, avatar } = props.avatar;
  
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          {first_name.charAt(0)}
        </Avatar>
      }    
      subheader={first_name + " " + last_name}
    />
    <CardMedia
      component="img"
      height="200"
      image={avatar}
      alt={first_name + " " + last_name}
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
       {first_name}
      </Typography>
    </CardContent>
  </Card>
  );
}
