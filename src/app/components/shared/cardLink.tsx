import Image from 'next/image'

interface CardLinkProps {
    image: string
    title?: string
    link?: string
}

const CardLink = ({ image, title, link }: CardLinkProps): JSX.Element => {

    return (
        <a
            className='c-card-link'
            href={link}
        >
            <img
                className='c-card-link__bg-img'
                src={image}
                alt={title}
            />
            <div className='c-card-link__footer'>
                <div className='c-card-link__footer__title'>
                    {title && title}
                </div>
                <Image src='/assets/logos/hoobe.svg' width={24} height={24} alt='hoo.be logo' />
            </div>
        </a>
    )
}

export default CardLink