import { CONSTANTS } from '../actions';

const initialState = [
    {
        title: "List Title",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: "static list card item 1"
            },
            {
                id: `card-${1}`,
                text: "static list card item 2"
            }
        ]
    },
    {
        title: "List Title 2",
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text: "static list card item 1"
            },
            {
                id: `card-${3}`,
                text: "static list card item 2"
            },
            {
                id: `card-${4}`,
                text: "static list card item 3"
            }
        ]
    }
]

let listID = 3;
let cardID = 5;


const listsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                id: `list-${listID}`,
                title: action.payload,
                cards: [],
            }

            listID++;
            return [...state, newList];
        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`
            }
            cardID++;

            const newState = state.map(list => {
                if(list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list;
                }
            });

            return newState;
        default:
            return state;
    }
};

export default listsReducer;