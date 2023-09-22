import SignUpFormComponent from "../../components/sign-up-form/sign-up-form.component";
import SigninFormComponent from "../../components/sing-in-form/signin-form.component";

import './signin.styles.scss';

const SinginComponent = () => {
    return (
        <div className='signin-container'>
            <SigninFormComponent/>
            <SignUpFormComponent/>
        </div>
    );
};

export default SinginComponent;