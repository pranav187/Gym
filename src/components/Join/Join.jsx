import React from 'react'
import "./Join.css"
import Container from 'react-bootstrap/Container';
import { motion } from 'framer-motion';
import PurpleBtn from '../PurpleBtn/PurpleBtn';

function Join() {
  return (
    <div className='join-section py-5 text-light '>
        <Container className='h-100'>
            <div className='h-100 d-flex flex-column align-items-center justify-content-center'>
                <motion.h2
                className='section-title text-capitalize fw-bold' 
                      initial={{ opacity: 0, x: -300 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                
                >
                    <span className='text-purple'>Shape</span>

                </motion.h2>
                <motion.p
                className='text-center w-75'
                      initial={{ opacity: 0, x: 300 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}

                
                >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit temporibus dolore reprehenderit ipsa numquam nostrum natus beatae esse quidem maxime rerum amet doloremque velit perferendis, modi perspiciatis architecto quasi expedita voluptatibus odit adipisci aliquid illo. Nisi mollitia maxime necessitatibus ipsa?

                </motion.p>
                <motion.div
                      initial={{ opacity: 0, x: -200 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                
                >
                    <PurpleBtn btnTitle='Join Now'/>

                </motion.div>

            </div>

        </Container>
      
    </div>
  )
}

export default Join
