import React from 'react';
import {Trendind_Div, Link} from './styled';

const Trendings = ({trend}) => {

    return (
        <Trendind_Div>
            {
                trend &&  <Link to={`/search/${trend}`}>{`${trend}`}</Link>
            }  
        </Trendind_Div>
    )
}

export default Trendings
