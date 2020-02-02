export const initialState = [{
   
        task:'Learn about reducers',
        completed:false,
        id:Math.random()
    }]


export const todoReducer = (state,action) =>{
    switch(action.type){
        case 'ADD-TODO':
            return[
                ...state,
                action.payload
            ]
        case 'COMPLETE-TODO':
            return state.map((item)=>{
                return item.id === action.payload ?
                {
                    ...item,completed: !item.completed
                }
                : item
            })
        case 'CLEAR-COMPLETED':
            return state.filter((item)=> !item.completed)

        default:
            return state
    }
    
};