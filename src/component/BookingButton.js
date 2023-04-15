import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// Booking button component that will be used in some other components
// Styled component used here
function BookButtonomponent() {
    return (
        <div>
            <MyButton>
                <Link className="btn" to="/contact">
                    {' '}
                    Book Now{' '}
                </Link>
            </MyButton>
        </div>
    )
}

export default BookButtonomponent

const MyButton = styled(Button)`
    background-color: #007cb9;
    .btn {
        color: white;
        background-color: #007cb9;
    }

    &&:hover {
        background-color: grey;
    }
    .btn:hover {
        background-color: grey;
    }
`
