import BlockPogoda from './BlockPogoda'


  let dateMonth = new Date().toDateString().split(' ')[1];
  let dateNum = new Date().toDateString().split(' ')[2];

// const BlockPogoda = .map(() => <BlockPogoda/>)

const PogodaOnXDay = (props) => {
    return (<div className='block--data'>
        <p className='today'>Сегодня</p>
        <p className='month'>{dateNum + ' '}{dateMonth}</p>
        <img alt='облачко'></img>
        <div className='double__temperature'><p className="temp_max">{props.temp_max}<sup><small>o</small></sup></p>
            <p className="temp_min ">{props.temp_min}<sup><small>o</small></sup></p>
        </div>
        <p className="description--onday">{props.description}</p>
    </div>
    )
}
export default PogodaOnXDay;