import React from 'react';
import  {Skeleton_detail} from './styled';
import Skeleton_Gif from '../Gif/Skeleton_Gif'; 

const Skeleton_Detail = ({type, width, height}) => {
    return (
        <Skeleton_detail>
           <Skeleton_Gif type={type} width={width} height={height} />
       </Skeleton_detail>
    )
}

export default Skeleton_Detail
