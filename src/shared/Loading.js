import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='body-container'>
            <Spinner animation="grow" variant="danger" />
        </div>
    )
}

export default Loading;
