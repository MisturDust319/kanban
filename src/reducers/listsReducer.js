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
        case CONSTANTS.ADD_CARD: {
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
        }

        case CONSTANTS.DRAG_HAPPENED:
            // copy state object
            const newState = [...state];
            // extract the information for drag and drop from the action
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId
            } = action.payload;

            // when the droppable id is the same
            // for the beginning and the end of the gesture,
            // the card is being moved within the same list
            if(droppableIdStart === droppableIdEnd) {
                // copy the actual list object in the app state
                // this is done by using the find operation
                // and searching for the ID of the current droppable id
                // (which is the id of the appropriate list)
                const list = state.find(list => droppableIdStart === list.id);
                
                // NOTE: we use splice because it is faster than the spread opreation, or at least used to be 
                // use the splice operation to do two things:
                // 1. grab the specific card (the return value of splice is a list of deleted values)
                // we only delete the first element found
                // 2. remove the card from the list so that it can be repositioned
                const card = list.cards.splice(droppableIndexStart, 1);
                // add in card at the drop index
                list.cards.splice(droppableIndexEnd, 0, ...card);
            }
            else if(droppableIdStart !== droppableIdEnd) {
                // find the list where the card started...
                const listStart = state.find(list => droppableIdStart === list.id);
                // then remove the card from that list
                const card = listStart.cards.splice(droppableIndexStart, 1);

                // then, find the card where the 
                const listEnd = state.find(list => droppableIdEnd === list.id);                
                
                listEnd.cards.splice(droppableIndexEnd, 0, ...card);
            }

            return newState;
        default:
            return state;
    }
};

export default listsReducer;