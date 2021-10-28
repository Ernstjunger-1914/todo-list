import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function(SpecificComponent, option, rootRoute=null) {
    function AuthenticationCheck(props) {
        const dispatch = useDispatch();

        useEffect(()=> {
            dispatch(auth()).then(response => {
                console.log(response);

                if(!response.payload.isAuth) {
                    if(option) {
                        props.history.push('/login');
                    }
                } else {
                    if(rootRoute&&!response.payload.isRoot) {
                        props.history.push('/');
                    } else {
                        if(option===false) {
                            props.history.push('/');
                        }
                    }
                }
            })
        }, []);
        return (
            <SpecificComponent />
        );
    }
    return AuthenticationCheck;
}

