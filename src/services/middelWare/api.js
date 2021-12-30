import axios from 'axios';
import * as actions from "../actionCreators/api-action-creators";

const api = ({  dispatch }) =>  next => action => {
    if (action.type !== actions.apiCallBegan.type) return next (action);

    const { url, method, data, config, onSuccess, onError } = action.payload;

   // if (onStart) dispatch({type: onStart});
    next(action);
    const response = axios.request({
        url,
        method,
        data,
        config
    })
    .then((response) => {
        const payload = response.data
        //general
        dispatch(actions.apiCallSuccess(payload));
        //Specific
        if(onSuccess) dispatch({ type: onSuccess, payload});
        
    })
    .catch((error) => {
        //general
        dispatch(actions.apiCallFailed(error.message))
        //specific
        if(onError) dispatch({ type: onError, payload: error.message });
    })

};

export default api;