import { BrowserRouter } from "react-router-dom"
import SignUpPage from "."
import { render ,screen} from "@testing-library/react"
import PrivacyPolicy from "../../../public/assets/images/PrivacyPolicy.svg";

import SignUpCard from "../../components/organisms/Signupcard";
describe('SignUp Page tescase', () => {
    it('renders the Signup and image component', () => {
        render(
            <BrowserRouter>
                <SignUpPage />
            </BrowserRouter>
        )
        expect(PrivacyPolicy).toBeInTheDocument;
        expect(SignUpCard).toHaveBeenCalled;
        expect(screen.getByText('Please sign up to start exploring the platform')).toBeInTheDocument;
        expect(screen.getAllByText('Sign up')).toBeInTheDocument;
        expect(screen.getByText('Email')).toBeInTheDocument;
        expect(screen.getByText('Password')).toBeInTheDocument;

    })
})