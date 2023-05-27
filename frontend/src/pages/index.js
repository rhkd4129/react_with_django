import React from 'react';
import AppLayout from 'compoents/AppLayout';
import {Route } from 'react-router-dom';
function Root(){
    return(
        <div>
            <AppLayout>최상의 컴포넌트
                <Route path ='/'></Route>
            </AppLayout>
        </div>
    );
}

export default Root;