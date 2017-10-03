import React from 'react';

const SelectorABC = ({letters,active,onSelect,filterLetter  }) => {


   return (
        <div id="SelectorABC" className={`${filterLetter === null?'inactive row':'row'}`} >

            <ul className="nav nav-pills">
                {
                    letters.map(z => {
                         // if (!filterRemove.includes(z) ){
                                let text = z;
                                if(z === null){ text = 'all'};
                                return ( <li
                                    className={`${active === z ? 'active' : '' }`}
                                    key={text}
                                    onClick={() => onSelect(z)}
                                >{text}</li> );
                          //}
                    })
                }
            </ul>
        </div>
    );
};


export default SelectorABC;
