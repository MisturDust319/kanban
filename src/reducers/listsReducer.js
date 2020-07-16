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

const listsReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default listsReducer;