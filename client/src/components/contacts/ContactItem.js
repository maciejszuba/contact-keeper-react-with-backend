import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/contactContext'

const ContactItem = ({ contact }) => {

    const contactContext = useContext(ContactContext);
    const { deleteContact, setCurrent, clearCurrent } = contactContext;

    const { id, name, email, phone, type } = contact;

    const onEdit = () => {
        setCurrent(contact);
    }

    const onDelete = () => {
        if (window.confirm('Are you sure?')) {
            deleteContact(id);
            clearCurrent();
        }
    }

    return (
        <div className='card'>
            <h3 className="text-primary text-left">
                {name}{'  '}
                <span
                    style={{ float: 'right' }}
                    className={'badge ' + (type === 'professional' ?
                        'badge-success' : 'badge-primary')}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
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
                <button className="btn btn-dark btn-sm"onClick={onEdit}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
            </p>

        </div>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default ContactItem
