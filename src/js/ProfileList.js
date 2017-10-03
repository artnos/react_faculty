import React from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';

const ProfileList = ({data,selectFaculty}) => {
    //console.log(data);
    if(data == null){return <span className="fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom"></span> }
    return (
        <div className="row is-flex">
            {
                data.map(d => {
                   return  <Profile detail={d}  key={`${d.id}`}  selectFaculty={selectFaculty} />
                })
            }
        </div>
    );
};



ProfileList.propTypes = {};
ProfileList.defaultProps = {};

export default ProfileList;
