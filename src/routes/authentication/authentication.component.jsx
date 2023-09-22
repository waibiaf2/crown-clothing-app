import SignUpFormComponent from "../../components/sign-up-form/sign-up-form.component";
import SigninFormComponent from "../../components/sing-in-form/signin-form.component";

import './authentication.styles.scss';

const AuthenticationComponent = () => {
    return (
        <div className='authentication-container'>
            <SigninFormComponent/>
            <SignUpFormComponent/>
        </div>
    );
};

export default AuthenticationComponent;