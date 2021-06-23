import React from 'react'
import PropTypes from 'prop-types'

import { motion } from "framer-motion"

import EmberColour from "../images/EmberColour.svg"

const Pane = ({colour, initial, animate, exit, transition}) => {


    return (
        <motion.div className="w-screen overflow-hidden fixed flex items-center justify-center z-50" initial={initial} animate={animate} exit={exit} transition={transition} style={{backgroundColor: colour}}>
            <motion.div initial="initial" animate={{bottom: 0, top: "auto"}} exit={{top: 0, bottom: "auto"}} className="flex items-center justify-center w-screen h-screen absolute">
                <img src={EmberColour} alt="Ember Logo" className="w-28 mt-12 sm:mt-24 md:w-64"></img>
            </motion.div>
        </motion.div>
    )
}

Pane.propTypes = {
    colour: PropTypes.string
}

Pane.defaultProps = {
    transition: {duration: 0.4, delay: 0.2, ease: [.37,.09,.94,1]}
}

export default Pane

