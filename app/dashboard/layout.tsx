import React, { ReactNode } from 'react';
import Navbar from "@/components/Navbar";
interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <div className="">
            <Navbar />
            {children}
        </div>
    );
}

export default DashboardLayout;