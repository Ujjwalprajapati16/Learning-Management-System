export const signUpFormControls = [
    {
        name : 'userName',
        lable : 'User name',
        placeholder : 'Enter your user name',
        type : 'text',
        ComponentType : 'input'
    },
    {
        name : 'UserEmail',
        lable : 'Email',
        placeholder : 'Enter your email',
        type : 'email',
        ComponentType : 'input'
    },
    {
        name : 'password',
        lable : 'Password',
        placeholder : 'Enter your password',
        type : 'password',
        ComponentType : 'input'
    }
];

export const signInFormControls = [
    {
        name : 'UserEmail',
        lable : 'Email',
        placeholder : 'Enter your email',
        type : 'email',
        ComponentType : 'input'
    },
    {
        name : 'password',
        lable : 'Password',
        placeholder : 'Enter your password',
        type : 'password',
        ComponentType : 'input'
    }
];

export const initialSignInFormData = {
    UserEmail : '',
    password : ''
};

export const initialSignUpFormData = {
    userName : '',
    UserEmail : '',
    password : ''
};