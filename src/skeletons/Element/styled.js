import styled from '@emotion/styled';
 
export const Skeleton = styled.div`
                                 ${props => console.log(props)}
                                background-color: var(--skeletons-color);
                                margin: 5px 0;
                                border-radius:${props => props.border || '4px'};
                                width: ${props => props.width || '100px'};
                                height: ${props => props.height || '100px'};
                                `