const initialState ={
    count:0,
}

var reducer = (state = initialState ,action) => {
if(action.type==='INCREMENT'){
    return{ count : state.count+action.value};
}
if(action.type==='DECREMENT'){
    return{ count : state.count-action.value};
}
if(action.type==='RESET'){
    return{ count : 0};
}
return state;
}

export default reducer;