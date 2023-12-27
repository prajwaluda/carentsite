import React from 'react';
import './stil.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'

const Navigator=()=>{
        return(
            <div className="firstbox">
                <div class="navig">
                    <span >
                        <input type="text" placeholder= "search...                   &#xf002;" className="srch"/>
                    </span>
                    <span >
                        <select name="relevance" aria-placeholder="Relevance" className="frsdrpbox">
                            <option value="yes">Relevance</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </span>
                    <span >
                        <select name="brand" aria-placeholder="All brands" className="secdrpbox">
                            <option value="yes" >All brands</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </span>
                </div>
            </div>
        )
}

export default Navigator;