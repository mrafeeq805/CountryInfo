import { THUMB_URL } from "../utils/constants"

const Card = (props) => {
    console.log(props);
    const {name,rating,delivery_time,place,cousine} = props.data
    return (
        <div className='card'>
            <div className='thumb'>
                <img src={THUMB_URL} alt='thumb' />
            </div>
            <span className='heading'>{name}</span>
            <div className='cont'>
                <span className='sub'>{rating}</span>
                <span className='sub'>{delivery_time}</span>
            </div>
            <span className='cuisenes'>{cousine}</span>
            <span className='cuisenes'>{place}</span>
        </div>
    )
}
export default Card