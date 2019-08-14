import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER
} from '../types'

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Bgogusia',
                email: 'bogusia@gmmm.com',
                phone: '525425242',
                type: 'personal'
            }, {
                id: 2,
                name: 'Gićka',
                email: 'gicka@ffafa.com',
                phone: '520098242',
                type: 'personal'
            }, {
                id: 3,
                name: 'Wisia',
                email: 'wisia@uuuro.com',
                phone: '20473198242',
                type: 'professional'
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    //ADD CONTACT
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({
            type: ADD_CONTACT,
            payload: contact
        })
    }

    //DELETE CONTACT

    //SET CURRENT CONTACT

    //CLEAR CURRENT CONTACT

    //UPDATE CONTACT

    //FILTER CONTACTS

    //CLEAR FILTER

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                addContact
            }}
        >
            {props.children}

        </ContactContext.Provider>
    );
};

export default ContactState;


