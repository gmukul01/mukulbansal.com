import { Text } from '@medly-components/core';
import React from 'react';
import * as Styled from './Home.styled';

export const Home: React.SFC = React.memo(props => (
    <Styled.Home>
        <Text textSize="L1">Coming Soon</Text>
    </Styled.Home>
));
