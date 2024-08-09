

// store,next,action

export const loggerMiddleware = (store)=>{
    return function(next){
        return function(action){
            // log actions
            console.log("[LOG]: "+action.type+" "+new Date().toString());
            next(action);
            console.log(store.getState());
        }
    }
}