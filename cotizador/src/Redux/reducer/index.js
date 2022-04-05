

const intialState={
    data: [],
    activeItemNav: "Experiencias"
}

export function rootReducer(state= intialState, action){
    switch (action.type){

        case "SET_ITEM_NAV": 
            return {
                ...state,
                activeItemNav: action.payload
            }
    
        default:
            return state;
    }
}

export default rootReducer;