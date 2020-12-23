import React, {Suspense} from 'react'
import { useIntersection_Observer } from '../../hook/useIntersection_Observer';
import {Div_Lazy} from './styled';

const Trendings = React.lazy( //Se carga el componente a traves de lazy y solo se puede renderizar con Suspense
                              () => import('../List_Trend/List_Trend')
                            )

const Lazy_Trendings = () => {
    const {intersection, ref_element} =  useIntersection_Observer({distance: '400px'}); //Se crean las variables de Intersection Observer

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Div_Lazy ref={ref_element}> 
               <h1>Trendings</h1>
              {
                  intersection ? <Trendings/> : null
              }
            </Div_Lazy>
        </Suspense>
    )
}

export default Lazy_Trendings
