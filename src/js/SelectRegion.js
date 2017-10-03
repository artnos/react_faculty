import React from 'react';
import PropTypes from 'prop-types';

const SelectRegion = ({onSelect, active}) => {
    const regionArr = ['International','USA','ALL'];
    return (
        <div id="SelectRegion" className="row">
            <ul className="nav nav-tabs">
            {
                regionArr.map(text=>{
                    return <li data-type="activeRegion" key={text} className={`${ active == text?'active':''}`} onClick={(e)=>onSelect(e)}>{text}</li>
                })
            }
            </ul>
        </div>
    );
};

export default SelectRegion;



