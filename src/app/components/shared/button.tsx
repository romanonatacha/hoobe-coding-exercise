import Image from 'next/image'

interface ButtonProps {
    text: string
    icon?: string
    action: () => void
}

const Button = ({ text, icon, action }: ButtonProps): JSX.Element => {

    return (
        <button
            className='c-button'
            onClick={action}
        >
            {icon &&
                <Image src={icon} width={24} height={24} alt={text} />
            }
            {text}
        </button>
    )
}

export default Button