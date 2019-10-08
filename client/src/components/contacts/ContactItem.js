import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/contactContext'
import defaultImg from '../../img/default_portrait.svg'


const ContactItem = ({ contact }) => {

    const contactContext = useContext(ContactContext);
    const { deleteContact, setCurrent, clearCurrent } = contactContext;

    const { id, name, email, phone, type, img } = contact;

    const onEdit = () => {
        setCurrent(contact);
    }

    const onDelete = () => {
        if (window.confirm('Are you sure?')) {
            deleteContact(id);
            clearCurrent();
        }
    }

    useEffect(() =>{
        console.log(img);
        console.log(defaultImg);
    })

    return (
        <div className='card'>
            <h3 className="text-left">
                {name}{'  '}
                <div className='picture-and-type'>
                    <img src={img ? {img} : {defaultImg}} alt={name}/>
                    <span                        
                        className={'badge ' + (type === 'professional' ?
                            'badge-success' : 'badge-primary')}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
                </div>
            </h3>
            <ul>
                {email && (<li>
                    <i className="fas fa-envelope-open"><span>{'  ' + email}</span></i>
                </li>)}

                {phone && (<li>
                    <i className="fas fa-phone"><span>{'  ' + phone}</span></i>
                </li>)}
            </ul>
            <p>
                <button className="btn btn-dark btn-sm" onClick={onEdit}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
            </p>

        </div>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default ContactItem
