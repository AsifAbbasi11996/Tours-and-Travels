import React from 'react'
import Places from './Places'
import '../assets/css/AllPlaces.css'

const AllPlaces = () => {
  return (
    <>
    <Places/>
      <div className="all-places-container">
        <div className="four-images">
            <div className="img">
              <h1>Image 1</h1>
            </div>
            <div className="img">
              <h1>Image 2</h1>
            </div>
            <div className="img">
              <h1>Image 3</h1>
            </div>
            <div className="img">
              <h1>Image 4</h1>
            </div>
        </div>
      </div>
    </>
  )
}

export default AllPlaces
