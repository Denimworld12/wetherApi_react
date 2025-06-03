import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function infoBox({info}){
    // let info ={
    //      city:"mumbai",
    //      temp: 44,
    //      tempmin:35,
    //      tempmax:44,
    //      feelLike:40,
    //      mausam:"haze"
    // }
    return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1725085629905-ee92c025d120?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          City={info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component='span'>
      <div>   Temprature={info.temp}&deg;C</div>
       
        <div>Temprature-Min={info.tempmin}&deg;C</div>
        
        <div>Temprature-Max={info.tempmax}&deg;C</div>
       
       <div> Today Weather cam be discribed as {info.mausam} and feels like {info.feelLike}&deg;C </div>
        </Typography>

      </CardContent>
     
    </Card>
  );
}