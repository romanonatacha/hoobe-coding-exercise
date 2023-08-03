import Instagram from '@/app/components/icons/instagram'
import Threads from '@/app/components/icons/threads'
import Tiktok from '@/app/components/icons/tiktok'
import Twitter from '@/app/components/icons/twitter'

interface SocialIconProps {
    social: string
    color?: string
    link: string
}
const SocialIcon = ({ social, color, link }: SocialIconProps): JSX.Element => {

    let icon

    switch (social) {
        case 'Instagram':
            icon = <Instagram color={color} />
            break
        case 'Threads':
            icon = <Threads color={color} />
            break
        case 'Tiktok':
            icon = <Tiktok color={color} />
            break
        case 'Twitter':
            icon = <Twitter color={color} />
            break
        default:
            break
    }


    return (
        <div className='c-social-icon'>
            <a href={link} target='_blank' rel="noreferrer">
                {icon}
            </a>
        </div>
    )
}

export default SocialIcon