import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useRouter} from 'next/navigation';
import React, {ReactNode, useEffect, useState} from "react";

export interface IAuthRouteProps {
    children: ReactNode
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
    const { children } = props;
    const auth = getAuth();
    const {push} = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AuthCheck();
    }, [auth]);

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if(user){
            setLoading(false);
        } else {
            console.log('unauthorized');
            push('/login');
        }
    });

    if (loading) return <p>loading ...</p>;
    return <>{children}</>;
};

export default AuthRoute;
