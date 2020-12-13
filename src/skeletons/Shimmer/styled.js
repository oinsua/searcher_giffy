import styled from '@emotion/styled';

export const Shimmer_element = styled.div`
                               width: 50%;
                                height: 100%;
                                background-color: rgba(255,255,255,0.1);
                                transform: skewX(-30deg);
`

export const Shimmer_wrapper = styled.div`
                                position: absolute;
                                top: 0px;
                                left: 0px;
                                width: 100%;
                                height: 100%;
                                animation: loading 1s infinite; 
                                
          @keyframes loading {
                                0% {transform: translateX(-120%);}
                                50% {transform: translateX(-40%);}
                                100% {transform: translateX(120%);}
                                }
`
