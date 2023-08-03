import { ReactNode } from 'react'

interface BoxProps {
    children: ReactNode
}
const Box = ({ children }: BoxProps): JSX.Element => {
    return (
        <div className='c-box'>
            {children}
        </div>
    )
}

export default Box