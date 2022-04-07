

const intialState={
    data: [],
    querySearch: []
}

export function rootReducer(state= intialState, action){
    switch (action.type){

        case "GET_SEARCH_EXPERIENCIAS": 
            return {
                ...state,
                querySearch: action.payload
            }
    
        default:
            return state;
    }
}

export default rootReducer;