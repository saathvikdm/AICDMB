import React from 'react'
import './pubStyle.css'
import Scopus from './assets/indexers/scopus_tbg.png'
import Sjr from './assets/indexers/sjr.png'
import Compendex from './assets/indexers/comp.png'

const Publication = () => {
    return ( 
        <div>
            <div className="container about-section pt-3 mb-5">
                {/* <h1 className="display-5 text-center">Publication</h1><hr className="ruler"/> */}
                <div className="div-bg-col"><p className="display-3 text-center"><span className="color-red">IOP </span> Conference Series</p><hr className="ruler"/>
                <p className="text-custom text-center">Material Science and Engineering</p>
                </div>
                <p className="text-center">Indexed by:</p>
                <div className="indexers row justify-content-center">
                    <div className="col- mx-1 my-1"><img src={Scopus} alt="" height="100px" width="250px" /></div>
                    <div className="col- mx-1 my-1"><img src={Sjr} alt="" height="100px" width="150px"/></div>
                    <div className="col- mx-1 my-1"><img src={Compendex} alt="" height="80px" width="80px"/><p className="text-center color-0e487e">Compendex</p></div>
                </div>
                <p className="text-custom text-center mt-5">All the accepted full length papers will be published in the
                <br/><span className="color-yellow">IOP Conference Series: Material Science and Engineering</span>
                </p>
            </div>
        </div>
     );
}
 
export default Publication;