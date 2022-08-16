


const InfoHeader = (props) => {
    
    return (<div>
        <p className="infoHeader--city">{props.city}</p>
        <p className="infoHeader--time infoHeader--stily">{props.time}</p>
        <p className="infoHeader--description infoHeader--stily">{props.description}</p>
    </div>)
}

export default InfoHeader;