import React, { ComponentType, Suspense } from 'react';

export const WithSuspense = <P extends object>(Component: ComponentType<P>) => {
    return (props: P) => {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Component {...props} />
            </Suspense>
        );
    };
};