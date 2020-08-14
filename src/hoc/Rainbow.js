import React from 'react'

const Rainbow = (WrappedComponent) => {

    const colours = ['pink', 'red', 'green', 'brown', 'blue'];
    const randomColour = colours[Math.floor(Math.random() * colours.length)];
    const className = `${randomColour}-text`;
    return () => {
        return (
            <div className={className}>
                <WrappedComponent />
            </div >
        )
    }
}

export default Rainbow