

const API__KEY = "3e6924cdf2022eced383039f41e7161f";


export const state = {
    temp: undefined,
    city: undefined,
    time: undefined,
    description: undefined,
    speed: undefined,
    humidity: undefined,
    temp_max: undefined,
    temp_min: undefined,
    error: undefined
}

export const gettngWeather = async (e) => {
    
    e.preventDefault();


    const city = e.target.elements.city.value;
    const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API__KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);

    let timer = data.timezone;
    let date = new Date();
    date.setDate(timer);
    let dateDay = new Date().toDateString().split(' ')[0];
    let timer__date = dateDay + ', ' + date.getHours() + ':' + date.getMinutes();


    this.setState({
        temp: data.main.temp,
        city: data.name,
        time: timer__date,
        speed: data.wind.speed,
        humidity: data.main.humidity,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        description: data.weather[0].description,
        error: "",
    });
}
