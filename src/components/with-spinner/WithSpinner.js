import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './WithSpinnerStyles';

// return a function new Syntax
/*const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {

    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
            <WrappedComponent {...otherProps} />
        )
} */

// old syntax better understanding
// HOC
const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
                <WrappedComponent {...otherProps} />
            )
    }
    return Spinner;
}

export default WithSpinner;