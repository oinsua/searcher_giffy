import styled from '@emotion/styled';

export const Skeleton_gif = styled.div`
                                display: flex;
                                position: relative;
                                flex-direction: column; 
                                justify-content: center;
                                align-items: center;
                                overflow: hidden;
                                width: ${props => props.width};
                                height: ${props => props.height};
                                background-color: ${props => props.theme == "dark" ? 'var(--theme--contrast-0)' : 'var(--theme-body-bg)'};
`