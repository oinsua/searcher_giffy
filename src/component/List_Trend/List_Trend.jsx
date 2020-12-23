import React from 'react';
import { useTrending } from '../../hook/useTrending';
import Trendings from '../Trendings/Trendings';
import {Trend_List_Div} from './styled';

const List_Trend = () => {
    /* Ejecutar el useTrendings para obtener el listado de tendencias con sus respectivos estados */
    const {trend} = useTrending();

    return (
        <Trend_List_Div>
           {  
           Array.isArray(trend) && trend.map((item, index) => <Trendings key={item,index} trend={item} />)
           }
        </Trend_List_Div>
    )
}

export default List_Trend
