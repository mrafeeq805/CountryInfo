import { THUMB_URL } from "../utils/constants"

const Card = (props) => {
    const {name,avgRating,sla,locality,cuisines,cloudinaryImageId} = props.data
    return (
        <div className='card'>
            <div className='thumb'>
                <img src={THUMB_URL+cloudinaryImageId} alt='thumb' />
            </div>
            <span className='heading'>{name}</span>
            <div className='cont'>
                <span className='sub'>{avgRating}</span>
                <span className='sub'>{sla.deliveryTime}</span>
            </div>
            <span className='cuisenes'>{cuisines.join(',')}</span>
            <span className='cuisenes'>{locality}</span>
        </div>
    )
}
export default Card