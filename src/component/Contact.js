import React from 'react'
import { useEffect, useState } from 'react'
import Booking from './Booking.tsx'
import outdoor from '../outdoor.json'
import styled from 'styled-components'

import { BsFillPersonFill } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BsEnvelopeFill } from 'react-icons/bs'

// Simple contact form is created with html and css
// Using local json file again to fetch the titles when user wants to select a spa type during booking
function Contact() {
    const [showModal, setShowModal] = useState(false)
    const [showForm, setShowForm] = useState(true)
    const modalClickEvent = (event) => {
        event.preventDefault()
        setShowModal(true)
        setShowForm(false)
    }

    const [selectSpa, setSelectSpa] = useState([])

    useEffect(() => {
        setSelectSpa(outdoor)
    }, [])

    return (
        <Wrap>
            {showForm && (
                <div className="con">
                    (
                    <form className="form-container">
                        <div className="flex-container">
                            <BsFillPersonFill />
                            <input type="text" placeholder="First Name" />
                            <BsFillPersonFill />
                            <input type="text" placeholder="First Name" />
                        </div>

                        <div className="flex-container">
                            <BsFillTelephoneFill />
                            <input type="number" placeholder="Phone Number" />
                            <BsEnvelopeFill />
                            <input type="email" placeholder="Email Addres" />
                        </div>

                        <div className="flex-container">
                            <input type="date" placeholder="Date & Time" />

                            <div>
                                <select>
                                    {selectSpa.map((spa) => (
                                        <option key={spa.id} value={'spa day'}>
                                            {spa.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="form-sub">
                            <input onClick={modalClickEvent} type="submit" />
                        </div>
                    </form>
                    )
                </div>
            )}
            <div>
                {showModal && (
                    <Booking
                        className="my-modal"
                        heading="Are you sure?"
                        text="Are you sure you want to continue the booking?"
                        cancel="Cancel"
                        confirm="Confirm"
                    />
                )}
            </div>
        </Wrap>
    )
}

export default Contact

const Wrap = styled('form')`
    form {
        padding: 30px;
    }
    .flex-container {
        display: flex;
        flex-direction: row;
        justify-content: center;

        padding: 2%;
        column-gap: 15px;
    }

    input {
        padding: 3px;
    }
    select {
        padding: 6px;
    }

    .form-sub {
        text-align: center;
        margin-top: 10px;
    }
    .form-sub input {
        background-color: #0092ca;
        border: none;
        border-radius: 3px;
        width: 80px;
        font-size: large;
        padding: 5px;
        color: white;
    }
`
