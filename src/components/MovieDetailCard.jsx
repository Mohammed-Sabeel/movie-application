import React from 'react'
import { Badge } from 'react-bootstrap'

const MovieDetailCard = () => {
    return (
        <div className='movie-detail-card'>
            <div className="movied-detail-Img">
                <img src='https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg' />
            </div>
            <div className='my-3'>
                <p className='mb-0 text-secondary'>Release Date</p>
                <p className='mb-0'>2018</p>
            </div>
            <div className='my-3'>
                <p className='mb-0 text-secondary'>Available Languages</p>
                <div className='d-flex flex-wrap gap-2 my-2'>
                    <Badge pill bg="secondary">
                        Tamil
                    </Badge>
                    <Badge pill bg="secondary">
                        English
                    </Badge>
                </div>
            </div>
            <div className='my-3'>
                <p className='mb-0 text-secondary'>Genres</p>
                <div className='d-flex flex-wrap gap-2 my-2'>
                    <Badge pill bg="secondary">
                        Drama
                    </Badge>
                    <Badge pill bg="secondary">
                        Action
                    </Badge>
                </div>
            </div>
            <div className='my-3'>
                <p className='mb-2 text-secondary'>Director</p>
                <div className='director'>
                    <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" width={50} height={50} className='img-fluid rounded' />

                    <p className='mb-0'>Sabeel</p>
                </div>
            </div>
            <div className='my-3'>
                <p className='mb-2 text-secondary'>Producer</p>
                <div className='director'>
                    <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" width={50} height={50} className='img-fluid rounded' />

                    <p className='mb-0'>John</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetailCard