import Button from '@mui/material/Button';

export default function NewButton({child}){
    return(
         <Button variant="contained" type='submit'  >
            {child}
                </Button>
    )
}