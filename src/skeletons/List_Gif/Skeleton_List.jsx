import React from 'react';
import Skeleton_Gif from '../Gif/Skeleton_Gif';
import  {Skeleton_list} from './styled';

const Skeleton_List = ({array}) => {
    return (
        <Skeleton_list>
            {
                 array.map(n => <Skeleton_Gif key={n} width="270px" height="280px" />)
            }
        </Skeleton_list>
       
    )
}

 /* <div className="skeleton-list">
           {
               array.map(n => <Skeleton_Gif key={n} />)
           }
        </div> */

export default Skeleton_List
