import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from '../services/actionCreators/api-action-creators';

//slice declaration
const slice = createSlice({
  name: 'country',
  initialState:{
    countriesData: [],
    States: [],
    totalCount: 0,
    totalStatesCount: 0
  },
  reducers: {
    getReceivedCountriesData:(country, action) => {
        country.countriesData = action.payload;
        country.totalCount = action.payload.length
    },
    getReceivedStatesData:(country, action) => {
      country.States = action.payload;
      country.totalStatesCount = action.payload.length
  }
  },
})

// Action creators are generated for each case reducer function
export const { 
    getReceivedCountriesData,
    getReceivedStatesData
} = slice.actions

//custome actions
export const fectchCountryData = () =>(dispatch, getState) => {
  let data ={}
    return dispatch(
        apiCallBegan({
            url: "https://restcountries.com/v3.1/all",
            onSuccess: getReceivedCountriesData.type,
    
        })
    )

}
export const fectchStateData = () =>(dispatch, getState) => {
  let data ={}
    return dispatch(
        apiCallBegan({
            url: "https://reststates.com/v3.1/all",
            onSuccess: getReceivedStatesData.type,
        
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