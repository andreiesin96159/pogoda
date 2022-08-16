

 const TempToDay = (props) =>{
    return(
        <div className="temptoday">
            <p className="temptoday-margin">{props.temp > 0 ? '+'+ +props.temp : '-'+ +props.temp}</p>
            <img className="temptoday-margin"src="" alt="облачко"/>
            <div className="temptoday-margin">
                <p>Вероятность осадков: 0%</p>
                <p>{'Влажность: ' + props.humidity + '%'}</p>
                <p> {'Ветер: ' + props.speed + ' м/с'}</p>
            </div>
        </div>
    )
 }
  

 export default TempToDay;