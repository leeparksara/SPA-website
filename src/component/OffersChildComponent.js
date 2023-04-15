import React from 'react'

function OffersChildComponent(props) {

// Using props to style the offers component
    // using props to render the offer images, text and paragraph from the array in the offers component
    const { offerStyle } = props
    return (
        <div
            style={{
                backgroundColor: offerStyle ? 'white' : '#f4ebeb',
                width: offerStyle ? '100px' : '600px'
            }}
            className="offers-container"
        >
            <div className="offers">
                <div className="an">
                    <div className="img-container">
                        <img src={props.image.src} alt="" />

                        <div
                            style={{
                                marginTop: offerStyle ? '5px' : '10px',
                                textAlign: offerStyle ? 'center' : 'left'
                            }}
                        >
                            <h3
                                style={{
                                    color: offerStyle ? 'black' : '#046daf'
                                }}
                            >
                                {props.image.title}
                            </h3>
                            <p
                                style={{
                                    color: offerStyle ? 'black' : '#046daf',
                                    fontSize: offerStyle ? '24px' : '19px'
                                }}
                            >
                                {props.image.text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OffersChildComponent
