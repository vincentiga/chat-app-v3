import React from 'react'
import PropTypes from 'prop-types'
import './Contact.css'



const Contact = ({ name, avatar, online, on }) => {
    return (
        <div className='Contact'>
            
            <img src={avatar} className='avatar' alt={avatar}></img>
            <h4 className='name'>{name}
                <div className='status'>
                    <div className={on ? 'status-online' : 'status-offline'}></div>
                    <p className='status-text'>{online ? 'online' : 'offline'}</p>             
                </div>
            </h4>
        </div>

    );
}
Contact.propTypes = {
    name: PropTypes.string,
    on: PropTypes.bool,
    online: PropTypes.bool,
}    
export default Contact;