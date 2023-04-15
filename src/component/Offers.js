import React from 'react'
import OffersChildComponent from './OffersChildComponent'

function Offers() {
    const images = [
        {
            id: 1,
            title: 'Honeymoon escape',
            src: 'https://plus.unsplash.com/premium_photo-1661964016494-6eac797ea040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
            text: `   Celebrate and enjoy the lovel.
             moments with your loved one
                        of your honeymoon/anniversary date, 20% discount upon presentation of
                        your wedding certificate.`
        },
        {
            id: 2,
            title: 'Kayak ',
            src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            text: `Celebrate and enjoy the lovely moments with your loved one
                        of your honeymoon/anniversary date, 20% discount upon presentation of
                        your wedding certificate.`
        },
        {
            id: 3,
            title: 'Floating Meal',
            src: 'https://images.unsplash.com/photo-1644027613475-6bf8ac889599?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            text: `Celebrate and enjoy the lovely moments with your loved one
                        of your honeymoon/anniversary date, 20% discount upon presentation of
                        your wedding certificate.`
        }
    ]

    return (
        <div>
            <div>
                {images.map((image) => (
                    <OffersChildComponent key={image.id} image={image} />
                ))}
            </div>
        </div>
    )
}

export default Offers
