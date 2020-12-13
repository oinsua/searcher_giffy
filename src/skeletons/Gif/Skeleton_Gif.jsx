import React from 'react'
import Shimmer from '../Shimmer/Shimmer';
import {Skeleton_gif} from './styled';
import Element from '../Element/Element';

const Skeleton_Gif = ({theme, type, width, height}) => {
  console.log(type,width,height);
    return ( 
        <Skeleton_gif theme={theme} width={width} height={height}>
            <div>
                {  
                    type == 'detail' ?
                                        ( //Se muestra un skeleton para el detalle
                                           <>
                                            <Element width={width} height="10px"/>
                                            <Element width={width} height="10px"/>
                                            <Element width={width} height="250px"/>
                                           </> 
                                        )
                                     :
                                     (
                                         <>
                                            <Element width="270px" height="10px"/>
                                            <Element width="270px" height="10px"/>
                                            <Element width="270px" height="250px"/>
                                         </>
                                     )
                }                
            </div>
            <Shimmer />
        </Skeleton_gif>
    )
}

export default Skeleton_Gif
