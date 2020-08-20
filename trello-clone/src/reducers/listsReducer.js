const initialState = [
    {
        id: 0,
        title: "First List",
        cards: [
            {
                id: 0,
                title: "First Card",
            },
            {
                id: 1,
                title: "Second Card",
            },
        ],
    },
    // {
    //     id: 1,
    //     title: "Second List",
    //     cards: [
    //         {
    //             id: 0,
    //             title: "Third Card",
    //         },
    //         {
    //             id: 1,
    //             title: "Fourth Card",
    //         },
    //     ],
    // },
];

let id = 0;
const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CARD":
            return [...state, { id: id }];
        default:
            return state;
    }
};

export default listsReducer;
