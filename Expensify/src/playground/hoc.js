
import React from "react";
import { createRoot } from "react-dom/client";


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private info. Please don't share!</p>
            <WrappedComponent {...props} />
            </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props}/>):
             (<p>Please login to view info</p>)}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


const appRoot = document.getElementById("app");
const root = createRoot(appRoot);
root.render(<AuthInfo isAuthenticated={true} info='This is the info'/>);
