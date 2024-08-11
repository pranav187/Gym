import React from 'react'
import "./Train.css"
import { motion } from 'framer-motion'
import Container from 'react-bootstrap/Container';

function Train() {
  return (
    <div className='train-section py-5 position-relative '>
        <motion.div
        className='bg-shape position-absolute'
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}

        
        >

        </motion.div>
        <Container>
            <div className="row">
                <div className="col-md-4 z-2">
                    <h2 className='text-start text-capitalize fw-bold'>Lets Train Together</h2>
                    <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed temporibus aut consequuntur magni vero placeat iure id doloremque debitis rem?</p>

                    <div className="d-flex">
                        <h5 className='text-capitalize fw-semibold text-nowrap'>Call Us:</h5>
                        <a className='mx-2 text-decoration-none h5' href="./">47493874984</a>


                    </div>

                </div>
            </div>
        </Container>

      
    </div>
  )
}

export default Train
