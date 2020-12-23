import styled from '@emotion/styled';
import {Link as Link_Router} from 'react-router-dom';

export const Trendind_Div = styled.div`
                      border: 1px solid var(--brand-color_1);
                      border-radius: 10px;                         
`

export const Link = styled(Link_Router)`
                      text-decoration: none;
                      padding: 10px;
                      color: var(--theme-body-txt);

                      &:hover{
                          color: var(--brand-color_1);
                          text-decoration: dotted;
                      }                    
`