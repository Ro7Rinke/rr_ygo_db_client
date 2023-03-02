import './Card.css'
import axios from 'axios'

const getPic = async () => {
    const resp = await axios.get('https://static.wikia.nocookie.net/yugioh/images/4/44/RedEyesBlackDragon-MAMA-EN-URPR-1E.png/revision/latest?cb=20221204134836')

    console.log(resp)
    return resp
}

const Card = () => {
    return (
        <div className='container-card'>
            <img className='pic-card' src='https://static.wikia.nocookie.net/yugioh/images/4/44/RedEyesBlackDragon-MAMA-EN-URPR-1E.png' />
            <div className='container-box-info-card'>
                <div className='text-info-card'>
                    <strong>Name:</ strong> Red-Eyes B. Dragon
                </div>
                <div className='text-info-card'>
                    <strong>Tag Force 1</strong>
                </div>
                <div className='text-booster-card'>
                    Begner's Monters <span className='text-rarity-card'>Ultra Rare</span>
                </div>
                <div className='text-booster-card'>
                    Begner's Monters <span className='text-rarity-card'>Ultra Rare</span>
                </div>
                <div className='text-booster-card'>
                    Begner's Monters <span className='text-rarity-card'>Ultra Rare</span>
                </div>
                <div className='text-info-card'>
                    <strong>Tag Force 1</strong>
                </div>
                <div className='text-booster-card'>
                    Begner's Monters <span className='text-rarity-card'>Ultra Rare</span>
                </div>
                <div className='text-booster-card'>
                    Begner's Monters <span className='text-rarity-card'>Ultra Rare</span>
                </div>
                <div className='text-booster-card'>
                    Begner's Monters <span className='text-rarity-card'>Ultra Rare</span>
                </div>
            </div>
        </div>
    )
}

export default Card