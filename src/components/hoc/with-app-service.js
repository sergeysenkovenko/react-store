import React from 'react';
import { ServiceConsumer } from '../app-service-context';

const withAppService = () => (Wrapped) => {
    return (props) => {
        return(
            <ServiceConsumer>
                {
                    (appService) => {
                        return (
                            <Wrapped {...props} appService={appService}/>
                        )
                    }
                }
            </ServiceConsumer>
        );
    }
}

export default withAppService;