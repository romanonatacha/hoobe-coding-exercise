import Image from 'next/image'
import { socialIntToDisplay } from '@/app/utils/helperFunctions'
import CardLink from '@/app/components/shared/cardLink'
import SocialIcon from '@/app/components/shared/socialIcon'
import Box from '@/app/components/shared/box'

interface User {
    fullName: string
}

interface Social {
    socialPlatform: number
    link: string
}

interface Content {
    content: { title?: string, link?: string, isEmbedEnabled: boolean, hasPhoto: boolean }
}

interface ProfileProps {
    user: User
    social: Social[]
    content: Content[]
}
const Profile = ({ user, social, content }: ProfileProps): JSX.Element => {

    return (
        <div className='c-profile'>
            <Box>
                <div className='c-profile'>
                    <Image
                        src='/assets/logos/hoobe-icon.png'
                        width={104}
                        height={104}
                        alt='hoo.be logo'
                        className='animate__animated animate__bounceInDown'
                    />

                    <h2 className='c-profile__name animate__animated animate__bounceInDown animate__delay-1s'>{user.fullName}</h2>

                    {social && social.length > 0 &&
                        <div className='c-profile__social'>
                            {social.map((item, i) => (
                                <div
                                    key={i}
                                    className={`animate__animated animate__headShake animate__delay-${i + 1}s`}>
                                    <SocialIcon
                                        social={socialIntToDisplay(item.socialPlatform)}
                                        link={item.link}
                                        color='#fff'
                                    />
                                </div>
                            ))}
                        </div>
                    }

                    {content && content.length > 0 &&
                        <div className='c-profile__content'>
                            {content.map((item, i) => (
                                <div key={i} className={`animate__animated animate__zoomIn animate__delay-${i}s`}>
                                    {item.content.hasPhoto &&
                                        <CardLink
                                            title={item.content.title}
                                            link={item.content.link}
                                            image='/assets/images/content-id-f9wzS1vHcf-image.jpg'
                                        />
                                    }
                                    {item.content.isEmbedEnabled &&
                                        <div className='c-profile__content__video'>
                                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/VywJBsrMCDQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                        </div>
                                    }
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </Box>
        </div>
    )
}

export default Profile