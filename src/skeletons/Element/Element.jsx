import React from 'react';
import {Skeleton} from './styled';

const Element = ({border, width, height}) => {
    return (
        <Skeleton border={border} width={width} height={height} />
    )
}

export default Element
