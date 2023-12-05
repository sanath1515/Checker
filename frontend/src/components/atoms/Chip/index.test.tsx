import { render } from "@testing-library/react";
import CustomChip from ".";

describe('Chip component Testcases', () => { 
    it('should render label to be in the document', () => 
    { 

        const label='CLEAR';
        const {getByText}=render(<CustomChip label={label}/>)
        const ChipText=getByText('CLEAR');
        expect(ChipText).toBeInTheDocument();
    })

    it('should apply custom styles to the Chip', () => {
        const label = 'CUSTOM';
        const customStyles = {
            backgroundColor: 'red',
            color: 'white',
        };
        
        const { container } = render(<CustomChip label={label} styles={customStyles} />);

        const chipElement = container.querySelector('.MuiChip-root');
        expect(chipElement).toHaveStyle('background-color: red');
        expect(chipElement).toHaveStyle('color: white');
    });

})