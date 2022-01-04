import React from 'react'

function NavBar(props) {
    const { searchstring , setSearchstring} = props;
 
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light pe-3 align-items-center">
                <div className='col-2'>
                    <a className="navbar-brand" href="#">Logo</a>
                </div>

                <div className="col input-group">
                    <span className="input-group-text" id="basic-addon1">&#128269;</span>
                    <input type="text" className="form-control" placeholder="Search here" 
                        value={searchstring} onInput={(e)=> setSearchstring(e.target.value)}
                       
                    />
                </div>
                
            </nav>
        </div>
    )
}

export default NavBar
