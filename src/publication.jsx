import React from 'react'
import './pubStyle.css'
import Scopus from './assets/indexers/scopus_tbg.png'
import Sjr from './assets/indexers/sjr.png'
import Compendex from './assets/indexers/comp.png'

const Publication = () => {
    return ( 
        <div className="publication">
            <div className="container about-section pt-3 mb-5">
                {/* <h1 className="display-5 text-center">Publication</h1><hr className="ruler"/> */}
                <p className="text-custom text-center mt-5">All the accepted full length papers will be published in
                <div className="div-bg-col"><p className="display-3 text-center"><span className="color-red">IOP </span> Conference Series</p><hr className="ruler"/>
                <p className="text-custom text-center" style={{fontSize: '1em'}}>Journal of Physics (indexed in WoS, SCOPUS)(Submitted)</p>
                </div>
                <p className="text-center color-yellow">Few selected papers will be published in</p>
                <ul style={{textDecoration: 'none', listStyle: 'none'}}>
                    <li>Taylor & Francis (indexed in WoS, SCOPUS)(Submitted)</li>
                    <li>IET (indexed in WoS, SCOPUS)(Submitted)</li>
                </ul>
                {/* <div className="indexers row justify-content-center">
                    <div className="col- mx-1 my-1"><img src={Scopus} alt="" height="100px" width="250px" /></div>
                    <div className="col- mx-1 my-1"><img src={Sjr} alt="" height="100px" width="150px"/></div>
                    <div className="col- mx-1 my-1"><img src={Compendex} alt="" height="80px" width="80px"/><p className="text-center color-0e487e">Compendex</p></div>
                </div> */}
                
                {/* <br/><span className="color-yellow">IOP Conference Series: Material Science and Engineering</span> */}
                </p>
            </div>
        </div>
     );
}
 
export default Publication;