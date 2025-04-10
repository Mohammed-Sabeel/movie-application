import React, { useContext } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { CiSearch } from "react-icons/ci";
import { mymovieContext } from '../context/MovieContext';
const SearchCard = () => {
    const context = useContext(mymovieContext);

    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <h5>{context}</h5>
                    <p>Endless Entertainment, Anytime, Anywhere!</p>
                </div>
                <div className='moive-search-input'>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="What are you looking for?"

                        />
                        <InputGroup.Text id="basic-addon1"><CiSearch /></InputGroup.Text>
                    </InputGroup>
                </div>
            </div>
            <div className='d-flex align-items-center flex-wrap gap-2 category-btn'>
                <Button variant="secondary">Movies</Button>
                <Button variant="secondary">Tv Series</Button>
                <Button variant="secondary">Horror</Button>
                <Button variant="secondary">Thriller</Button>
                <Button variant="secondary">Romantic</Button>
                <Button variant="secondary">Comedy</Button>
                <Button variant="secondary">Action</Button>
            </div>

        </div>
    )
}

export default SearchCard