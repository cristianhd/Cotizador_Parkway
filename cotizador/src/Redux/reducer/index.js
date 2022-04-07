

const intialState={
    data: [],
    querySearch: []
}

export function rootReducer(state= intialState, action){
    switch (action.type){

        case "GET_SEARCH": 
            return {
                ...state,
                querySearch: action.payload,
                typeProduct: action.payload
            }
    
        default:
            return state;
    }
}

export default rootReducer;