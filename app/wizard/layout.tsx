import React, { ReactNode } from 'react';
// Changed this line 
// ReactNode type,
interface LayoutProps {
    children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default Layout;
