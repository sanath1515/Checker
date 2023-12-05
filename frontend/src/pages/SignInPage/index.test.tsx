import { fireEvent, getByPlaceholderText, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SignInPage from ".";
import PrivacyPolicy from "../../../public/assets/images/PrivacyPolicy.svg";
describe('SignInPage Testcases', () => {
    it('render signin component', () => {
        render(
            <MemoryRouter>
                <SignInPage />
            </MemoryRouter>

        )
        expect(PrivacyPolicy).toBeInTheDocument;
        const signInComponent = screen.getByText('Email');
        expect(signInComponent).toBeInTheDocument;
        expect(screen.getByText('Please enter your login credentials')).toBeInTheDocument;
        expect(screen.getAllByText('Sign in')).toBeInTheDocument;
        expect(screen.getByText('Email')).toBeInTheDocument;
        expect(screen.getByText('Password')).toBeInTheDocument;

    })

    it('handles email input change', () => {

        render(
            <MemoryRouter>
                <SignInPage/>
            </MemoryRouter>
        )

        const emailInput=screen.getByPlaceholderText(
            "rhernandez@gmail.com"
        ) as HTMLInputElement

        fireEvent.change(emailInput,{target:{value:"somnath@gmail.com"}});
        expect(emailInput.value).toBe("somnath@gmail.com");

    })

    it('handles email input change', () => {

        render(
            <MemoryRouter>
                <SignInPage/>
            </MemoryRouter>
        )

        const passInput=screen.getByPlaceholderText(
            "********"
        ) as HTMLInputElement

        fireEvent.change(passInput,{target:{value:"Somnath@2001"}});
        expect(passInput.value).toBe("Somnath@2001");

    })
})

