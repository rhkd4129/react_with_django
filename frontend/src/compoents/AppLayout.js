import React from 'react';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
function AppLayout({children}){
    return(
        <div>
            <AppHeader/>
              
                {children}
            <AppFooter/>
        </div>
    );
}

export default AppLayout;