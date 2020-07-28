import { CONSTANTS } from '../actions';

const initialState = [
    {
        title: "List Title",
        id: 0,
        cards: [
            {
                id: 0,
                text: "static list card item 1"
            },
            {
                id: 1,
                text: "static list card item 2"
            }
        ]
    },
    {
        title: "List Title 2",
        id: 1,
        cards: [
            {
                id: 0,
                text: "static list card item 1"
            },
            {
                id: 1,
                text: "static list card item 2"
            },
            {
                id: 2,
                text: "static list card item 3"
            }
        ]
    }
]

let listID = 2;
let cardID = 4;


const listsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                id: listID,
                title: action.payload,
                cards: [],
            }

            listID++;
            return [...state, newList];
        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardID
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