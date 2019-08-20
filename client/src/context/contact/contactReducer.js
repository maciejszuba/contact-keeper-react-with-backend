import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER
} from '../types'

export default (state, action) => {
    switch (action.type) {

        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }

        case UPDATE_CONTACT:
            return {
                ...state,
                //It goes through all contacts and matches id of edited contact with the same one in the state. 
                //If id matches, it returns updated contact. If it doesn't, it just returns contact as it was before.
                contacts: state.contacts.map(contact =>
                    contact.id === action.payload.id ? action.payload : contact)
            }

        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }

        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }

        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }

        case FILTER_CONTACT:
            return {
                ...state,
                filtered: state.contacts.filter(contact => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return contact.name.match(regex) || contact.email.match(regex) || contact.phone.match(regex);
                })
            }            

        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            }

        default:
            return state;
    }
}