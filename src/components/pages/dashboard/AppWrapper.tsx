import Footer from '@/components/reusable/Footer'
import React, { ReactNode } from 'react'
interface AppWrapperProps {
    children: ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
    return (
        <div>
            {children}
            <Footer />
        </div>
    )
}

export default AppWrapper