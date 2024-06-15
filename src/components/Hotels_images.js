import React from 'react'
import Tajhotel from '../assets/images/tajhotel.jpg'
import TajLands from '../assets/images/tajlands.jpg'
import Trident from '../assets/images/hoteltrident.jpg'
import Hilton from '../assets/images/hilltone.avif'

const Hotels_images = () => {
    return (
        <>
            <div className="hotel-images">
                <div className="img">
                    <img src={Tajhotel} alt="" />
                    <p>Taj Palace Hotel</p>
                </div>
                <div className="img">
                    <img src={TajLands} alt="" />
                    <p>Taj Lands End</p>
                </div>
                <div className="img">
                    <img src={Trident} alt="" />
                    <p>Trident Hotel</p>
                </div>
                <div className="img">
                    <img src={Hilton} alt="" />
                    <p>Hilton Mumbai</p>
                </div>
            </div>
        </>
    )
}

export default Hotels_images
