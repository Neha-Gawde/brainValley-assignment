import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../commonuicomponents/Card'
import NavBar from '../commonuicomponents/NavBar'
import {fectchCountryData, getCountryData, getTotalCountryCount} from '../store/countryslice';

function LandingPage() {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fectchCountryData())
    }, []);
    const Totaldata = useSelector(getCountryData);
    const TotalCount = useSelector(getTotalCountryCount);
    var TotalCountAfterSearch = 0;
    const [totalCountriesAfterSearch, setTotalCountriesAfterSearch] = useState()
    const [searchstring, setSearchstring] = useState("");
    const [noOfCountries, setNoOfCountries] = useState(20);
    const [noOfCountriesForSearch, setNoOfCountriesForSearch] = useState(20);

    const [isShowMore, setIsShowMore] = useState(false);
    const [isShowMoreForSearch, setIsShowMoreForSearch] = useState(false);
    const [filterData, setFilterData] = useState([]);
    useEffect(() => {
        handleData(searchstring)
    }, [Totaldata, searchstring, noOfCountries, noOfCountriesForSearch, TotalCount, totalCountriesAfterSearch,TotalCountAfterSearch]);

    function paginatrionData(n, data) {
        const array = [...data];
        const paginatrionData = array.slice(0, n);
        return paginatrionData
    }
    function getSearchData() {
        let string = searchstring.toLowerCase();
        let searchedDataList = JSON.parse(JSON.stringify(Totaldata));
        searchedDataList = searchedDataList.filter(
            function (el) {
                if(el.name.official.toLowerCase().includes(string)) {
                    return true
                }
                
            }
        )
        TotalCountAfterSearch = searchedDataList.length
        // console.log(searchedDataList)
        return searchedDataList
    }
    const handleData = (searchstring) => {
        // console.log(noOfCountries,"noraml counter");
        console.log(noOfCountriesForSearch,"search counter");
        var dataToshow = searchstring === "" ? paginatrionData(noOfCountries, Totaldata) : [];
        var dataAfterSearched = searchstring !== "" ? paginatrionData(noOfCountriesForSearch,getSearchData()) : [];
        if(searchstring === "") {
            setFilterData(dataToshow);
            setIsShowMoreForSearch(false);
            setNoOfCountriesForSearch(20);
 
            if(noOfCountries < TotalCount) {
                setIsShowMore(true)
            }else if(noOfCountries === TotalCount) {
                setIsShowMore(false);
                setNoOfCountries(TotalCount)
            }else if(noOfCountries > TotalCount) {
                if(dataToshow.length > 0) {
                    setNoOfCountries(TotalCount)
                }
                setIsShowMore(false)
            }
        } else if(searchstring !== "") {
            console.log(TotalCountAfterSearch)
            setIsShowMore(false);
            setNoOfCountries(20);
            // setFilterData(dataAfterSearched)
            
            if(noOfCountriesForSearch < TotalCountAfterSearch) {
                setIsShowMoreForSearch(true);
                setTotalCountriesAfterSearch(TotalCountAfterSearch)
                setFilterData(dataAfterSearched)
            } else if (noOfCountriesForSearch === TotalCountAfterSearch) {
                setIsShowMoreForSearch(false);
                setNoOfCountriesForSearch(TotalCountAfterSearch);
                setTotalCountriesAfterSearch(TotalCountAfterSearch)
                setFilterData(dataAfterSearched)
            } else if(noOfCountriesForSearch > TotalCountAfterSearch) {
                setIsShowMoreForSearch(false);
                //setNoOfCountriesForSearch(TotalCountAfterSearch)
                setTotalCountriesAfterSearch(TotalCountAfterSearch);
                setFilterData(dataAfterSearched)
            }
        }
    }
    const handleShowMore = () => {   
        setNoOfCountries(noOfCountries + 20)
    }
    const handleShowMoreForSearch = () => {
        setNoOfCountriesForSearch(noOfCountriesForSearch + 20)
    }
    return (
        <div className='landingpage-div'>
            <NavBar
                searchstring={searchstring}
                setSearchstring={setSearchstring}
            />
            <div className='row'>
                <span>{`Showing 1- ${filterData.length} of ${searchstring !== "" ? totalCountriesAfterSearch : TotalCount} Countries`}</span>
            </div>
            <Card 
                data={filterData}
            />
            {isShowMore &&
                <button type="button" className="btn btn-secondary btn-md mt-2" onClick={()=>{handleShowMore()}}>Show More</button>
            }
            {isShowMoreForSearch &&
                <button type="button" className="btn btn-secondary btn-md mt-2" onClick={()=>{handleShowMoreForSearch()}}>Show More</button>
            }
        </div>
    )
}

export default LandingPage
