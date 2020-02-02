export const initalState = {
    todos:[{
        task:'Learn about reducers',
        completed:false,
        id:1
    }]
};

export const todoReducer = (state) =>{
    return {
        count:state.count + 1
    }
};