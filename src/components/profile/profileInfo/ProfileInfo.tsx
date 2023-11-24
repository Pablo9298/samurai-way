import React from 'react';
import styled from 'styled-components';

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <ImageStyled src="https://rare-gallery.com/uploads/posts/802141-Tropics-Coast-Branches-Beach.jpg"
                             alt="beach"/>
            </div>

            <DescriptionBlock>
                avatar + descr
            </DescriptionBlock>
        </div>
    );
};

const ImageStyled = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
`

const DescriptionBlock = styled.div`
    padding: 20px;
`

