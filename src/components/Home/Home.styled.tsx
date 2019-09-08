import { defaultTheme } from '@medly-components/theme';
import { centerAligned } from '@medly-components/utils';
import { styled } from '@styled';

export const Home = styled('div')`
    width: 100%;
    height: 100%;
    background-color: ${defaultTheme.colors.black};
    ${centerAligned('flex')}
`;
