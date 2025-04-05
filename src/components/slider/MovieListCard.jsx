import React from 'react'
import { Card } from 'react-bootstrap'

const MovieListCard = () => {
  return (
    <div>
         <Card className='mx-2'>
      <Card.Body className='p-0'>
        <img src='https://13thdimension.com/wp-content/uploads/2018/03/D1nkY7UVAAUs7KN-580x859.jpg' height={200}  className='w-100 img-fuild rounded' />
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieListCard