import React from 'react';
// we can get props becouse of route done to this component in App.js. This is extrapower to router - access to props properties
const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/about');  //push to about PAGE AFTER 2 SECONDS
    }, 2000)
    return (
        <div className="container">
            <h4 className="center">This is the contact page</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sint in a doloribus, non, distinctio corporis voluptas unde voluptates officiis similique ratione, rerum accusamus labore quam itaque neque nam. In!</p>
        </div>
    )
}

export default Contact