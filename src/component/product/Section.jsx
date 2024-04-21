import React from 'react'
import Card from './card/Card'
import Sale from './card/Sale'
import Popular from './card/Popular'

const Section = () => {
  return (
  <section className="py-5">
  <div className="container px-4 px-lg-5 mt-5">
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      <div className="col mb-5">
        <Card/>
      </div>
      <div className="col mb-5">
        <Popular/>
      </div>
      <div className="col mb-5">
        <Sale />
      </div>
      <div className="col mb-5">
       <Card />
      </div>
      <div className="col mb-5">
      <Sale />
      </div>
      <div className="col mb-5">
        <Card />
      </div>
      <div className="col mb-5">
        <Popular />
      </div>
      <div className="col mb-5">
        <Card />
      </div>
    </div>
  </div>
</section>

  
  )
}

export default Section