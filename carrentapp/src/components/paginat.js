import React from "react";
import { Link } from "react-router-dom";

const Pagination=({totposts,postperpg,setpage})=>{
    let pages=[];

    for (let id = 0; id <Math.ceil(totposts/postperpg); id++) {
        pages.push(id);
    }
    return(
        <div className="pagebuttons">
            {pages.map((page,index)=>{
                return <button onClick={()=>setpage(page+1)} className="button">
                    <Link to={`/${page+1}`}>{page+1}</Link>
                    </button>
                })
            }
        </div>
    )
}

export default Pagination;