import Card from '../components/Card'
import data from '../utils/data'



const CardsContainer = () => {
    return (
        <div className='container'>
            {
                data.map((item,index) => <Card key={index} data={item} />)
            }
        </div>
    )
}
export default CardsContainer