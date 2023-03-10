const initialState = {
    characters: [],
    requesting: false
}

const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "START_GETTING_CHARS_REQUEST":
            return {
                ...state,
                characters: [...state.characters],
                requesting: true
            }
        case "GET_CHARS":
            return {
                ...state,
                characters: action.characters,
                requesting: false
            }
        default:
            return state;
    }
}

export default characterReducer;