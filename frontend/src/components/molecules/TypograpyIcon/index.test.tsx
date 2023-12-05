import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TypograpyIcon from './index';

describe('Typograpy Icon side bar element testcases', () => {
    it('renders icon and typography correctly', () => {
        const content = 'Home'
        render(
            <TypograpyIcon
                iconSrc="path-to-icon.png"
                iconAlt="Icon Alt Text"

                typographyProps={{
                    typoVariant: 'body1',
                    color: 'textPrimary',
                    children: content,
                }}
                iconOnClick={() => { }}
            />
        );
        const icon = screen.getByAltText('Icon Alt Text');
        const typography = screen.getByText('Home');

        expect(icon).toBeInTheDocument();
        expect(typography).toBeInTheDocument();
    })

})
    ;

