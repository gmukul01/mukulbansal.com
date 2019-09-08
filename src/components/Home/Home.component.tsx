import { Text } from '@medly-components/core';
import React from 'react';
import * as Styled from './Home.styled';

export const Home: React.SFC = React.memo(props => (
    <Styled.Home>
        <Text textSize="L1">Mukul Bansal coming soon</Text>
    </Styled.Home>
));
