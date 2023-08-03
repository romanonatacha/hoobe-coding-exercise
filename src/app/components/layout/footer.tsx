import Button from '../shared/button'

const Footer = (): JSX.Element => {

    return (
        <div className="c-footer animate__animated animate__slideInUp animate__delay-3s">
            <Button
                icon='/assets/logos/hoobe-sm.svg'
                text='create your hoo.be'
                action={() => alert('login')}
            />
            <a className='c-footer__link'>
                login
            </a>
        </div>
    )
}

export default Footer