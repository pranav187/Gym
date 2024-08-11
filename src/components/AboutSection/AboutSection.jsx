import React from 'react'

import { motion } from 'framer-motion'
import AboutImg from "../../assets/images/about-img.jpg"
import PurpleBtn from '../PurpleBtn/PurpleBtn'


function AboutSection() {
  return (
    <div className='bg-black text-light py-4 py-sm-5' id='about'>
        <div className="container">
            <div className="flex-column-reverse flex-lg-row row">
                <motion.div
                className='col-lg-6 d-flex justify-content-center'
                      initial={{ opacity: 0, x: -300 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                    >

                    <img className='img-fluid w-75 mt-4 mt-lg-0' src={AboutImg} alt='about us img'/>

                </motion.div>
                <motion.div
                className='col-lg-6 d-flex flex-column justify-content-center align-items-start'
                      initial={{ opacity: 0, x: -350 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                
                >
                    <h2 className='section-title text-capitalize fw-bold'>About <span className='text-purple'>us</span></h2>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro qui quas et ducimus ipsa eaque quod, minus cumque numquam corporis aliquam eum pariatur mollitia enim! Sed sequi corporis amet. Cupiditate quia animi, ducimus voluptatum ullam assumenda suscipit culpa, iste deleniti facilis numquam obcaecati, reiciendis consectetur adipisci molestias ratione repellat tenetur!</p>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ex fugit maxime saepe. Excepturi maiores et veritatis ullam. Et eaque assumenda ut provident asperiores deserunt repellat reprehenderit alias enim, quos eius inventore, quo voluptatum quae unde dolorem officiis facere pariatur.</p>

                    <PurpleBtn btnTitle='More about us'/>

                </motion.div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutSection
