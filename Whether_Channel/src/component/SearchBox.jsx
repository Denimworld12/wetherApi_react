import TextField from '@mui/material/TextField';
import { useState } from 'react'
import NewButton from './NewButton';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState('')
    let [error, seterr] = useState(false)

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API = "2fdea20827061f4c1abd6b0870d7aa8a"
    let whether = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API}&units=metric`);
            let jsonResponse = await response.json()
            console.log(jsonResponse)
            let result = {
                city: jsonResponse.name,
                temp: jsonResponse.main.temp,
                tempmin: jsonResponse.main.temp_min,
                tempmax: jsonResponse.main.temp_max,
                feelLike: jsonResponse.main.feels_like,
                mausam: jsonResponse.weather[0].description
            }
            console.log(result)
            return result
        }


        catch (err) {
            throw err
        }

    }
    let handleCity = (event) => {
        setCity(event.target.value);
        seterr(false)
        // console.log(event.target.value);
    }
    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            // setCity("");
            let newinfo = await whether();
            updateInfo(newinfo);
            setCity('')
        }
        catch (err) {
            seterr(true);
        }

    }
    return (
        <div>
            <h1>Search for the Whether
            </h1>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="Search" variant="outlined" required
                    value={city} name='' onChange={handleCity} sx={{ '& .MuiInputBase-root': { backgroundColor: '#e0f7fa' } }} />
                <NewButton child={"Submit"}>  </NewButton>
                {error && <p> No such place exist</p>}
            </form>

        </div>
    )
}