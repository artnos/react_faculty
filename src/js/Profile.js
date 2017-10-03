import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({detail,selectFaculty}) => {

    const {address,country,fullname,id,institution,lastname,title} = detail;

    return (
        <div className="list-item col-sm-4 col-md-4">
            <h5 dangerouslySetInnerHTML={ {__html: fullname } }   onClick={e=> selectFaculty(id)} />
            <p dangerouslySetInnerHTML={ {__html: institution } } />
            <p><em><span className="address"  dangerouslySetInnerHTML={ {__html: address } } /></em></p>
        </div>
    )
};

Profile.propTypes = {};
Profile.defaultProps = {};

export default Profile;

