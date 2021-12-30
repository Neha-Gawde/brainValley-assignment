import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from '../services/actionCreators/api-action-creators';

//slice declaration
const slice = createSlice({
  name: 'country',
  initialState:{
    countriesData: [],
    totalCount: 0
  },
  reducers: {
    getReceivedCountriesData:(country, action) => {
        country.countriesData = action.payload;
        country.totalCount = action.payload.length
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
    getReceivedCountriesData
} = slice.actions

//custome actions
export const fectchCountryData = () =>(dispatch, getState) => {
    return dispatch(
        apiCallBegan({
            url: "https://restcountries.com/v3.1/all",
            onSuccess: getReceivedCountriesData.type,
           
        })
    )

}
export const getCountryData = (state) => {
  return state.country.countriesData
}
export const getTotalCountryCount = (state) => {
  return state.country.totalCount
}
//assignment of slice to countryReducer 
export const countryReducer = slice.reducer