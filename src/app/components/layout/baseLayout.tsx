import { ReactNode } from 'react'
import Footer from '@/app/components/layout/footer'

interface BaseLayoutProps {
    children: ReactNode
}
const BaseLayout = ({ children }: BaseLayoutProps): JSX.Element => {
    return (
        <div className='c-base-layout'>
            <div className='c-base-layout__container'>
                {children}
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default BaseLayout