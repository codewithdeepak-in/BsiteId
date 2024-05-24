import React, { useState } from 'react';
import SearchNavBar from '../components/navbar';


const ApplicationLayout = ({ children }: any) => {


    const [notification, setNotification] = useState(true);


    function handleNotification(){
        setNotification(false);
    }

    return (
        <React.Fragment>
            <div className="alert alert-warning alert-dismissible fade show mb-0" role="alert">
                <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handleNotification}></button>
            </div>
            <SearchNavBar notify={notification} />
            <div className="">
                {children}
            </div>
        </React.Fragment>
    )
}

export default ApplicationLayout;