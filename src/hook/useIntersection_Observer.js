import {useRef, useEffect, useState} from 'react';

export const useIntersection_Observer = ({distance = '200px', ref_external, flag}={}) => {
     const [intersection, setIntersection] = useState(false); //Crear el estado para la interseccion del elemento
     const ref_element = useRef(); //Crear una referencia que permita mantener actualizado el elemento.

  /*Efecto que gestiona el proceso de intersection observer */
  useEffect(() => {
    //Se crea el objeto options, donde se define todo el viewport, distancia y el umbral.
      const options = {
        root: null,
        rootMargin: distance,
        threshold: 0
      }

      let observer; //Se define la variable observer
      //Si la referencia externa existe, se asigna el elemento del DOM, sino se le asigna el elemento de referencia del hook
      const ref_visor = ref_external ? ref_external.current : ref_element.current;
      
      /* Callback que se ejecuta cuando se crea el objeto intersection observer */
      const Callback = (entries, observer) => {
         const element = entries[0]; //Se asigna a element el primer elemento del array entries
         if(element.isIntersecting){ //Si el elemento esta siendo intersectado por el viewport
           setIntersection(true);  // Se actualiza el estado a true
           flag && observer.disconnect(); //La bandera esta en true, y permite el observer deje de observar
         }
         else{
            !flag && setIntersection(false);// Cambia true, Permite controlar la cantidad de veces que se debe de hacer intersecting
         }
      }
      /*Promesa que se encarga de definir si estamos en presencia de un navegador que soporta Intersection Observer */
      Promise.resolve( //Si IntersectionObserver existe, entonces usamos IntersectionObserver, sino importamos el pollyfill
                       typeof IntersectionObserver == 'undefined' ? IntersectionObserver : import('intersection-observer')
                      )//Si se resuelve la promesa entonces hacemos
                      .then(
                             () => {
                              observer = new IntersectionObserver(Callback, options); //Se crea el objeto observer
                              ref_visor ? observer.observe(ref_visor) : null //Si existe ref_visor se pone a observer, sino null
                             }
                           )
      return () => observer && observer.disconnect(); //Se devuelve una funcion de limpieza que permita desconectar el elemento observado
     }
    )
    /*Retorno el estado de la interseccion y el elemento de referencia */
    return {intersection, ref_element};

  };
