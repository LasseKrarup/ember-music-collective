import React from 'react'

const Paragraph = ( {className, children} ) => {
    return (
        <p className={`text-justify px-4 sm:px-16 max-w-3xl ${className}`}>
            {children}
        </p>
    )
}

export default Paragraph
