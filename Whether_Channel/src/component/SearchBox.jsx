import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBox() {
    return (
        <div>
            <h1>Search for the Whether
            </h1>
            <form action="submit">
                <TextField id="city" label="Search" variant="outlined" required />
                <Button variant="contained" type='submit' >
                    Submit
                </Button>
            </form>

        </div>
    )
}