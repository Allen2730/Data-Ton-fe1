import AppWrapper from '@/components/pages/dashboard/AppWrapper';
import React from 'react'

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className=''>
            <AppWrapper>
                {children}
            </AppWrapper>
        </div>
    )
}

// export default layout