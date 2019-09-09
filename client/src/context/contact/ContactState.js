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
import portrait from '../../img/portrait.png'

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Bgogusia',
                email: 'bogusia@gmmm.com',
                phone: '525425242',
                type: 'personal',
                img: {portrait}
            }, {
                id: 2,
                name: 'Gićka',
                email: 'gicka@ffafa.com',
                phone: '520098242',
                type: 'personal',
                img: 'uri(../../img/portrait.png)'
            }, {
                id: 3,
                name: 'Wisia',
                email: 'wisia@uuuro.com',
                phone: '20473198242',
                type: 'professional',
                img: '../../img/portrait.png'
            }, {
                id: 4,
                name: 'Wisia',
                email: 'wisia@uuuro.com',
                phone: '20473198242',
                type: 'professional',
                img: '../../img/portrait.png'
            }
        ],
        current: null,
        filtered: null
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
    const deleteContact = id => {
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        })
    }
    //SET CURRENT CONTACT
    const setCurrent = contact => {
        dispatch({
            type: SET_CURRENT,
            payload: contact
        })
    }

    //CLEAR CURRENT CONTACT
    const clearCurrent = () => {
        dispatch({
            type: CLEAR_CURRENT
        })
    }

    //UPDATE CONTACT
    const updateContact = contact => {
        dispatch({
            type: UPDATE_CONTACT,
            payload: contact
        })
    }

    //FILTER CONTACTS
    const filterContacts = text => {
        dispatch({
            type: FILTER_CONTACT,
            payload: text
        })
    }

    //CLEAR FILTER
    const clearFilter = () => {
        dispatch({
            type: CLEAR_FILTER
        })
    }

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter
            }}
        >
            {props.children}

        </ContactContext.Provider>
    );
};

export default ContactState;


