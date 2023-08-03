interface TiktokProps {
    color?: string,
}

const Tiktok = ({
    color = '#000'
}: TiktokProps): JSX.Element => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
        >

            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16.6066 10.3412V15.1952C16.6066 18.4195 14.6454 22 9.80057 22C6.06483 21.9839 3 18.9706 3 15.3145C3 15.2579 3.00078 15.2013 3.00234 15.1402C3.11169 11.6117 6.10778 8.76808 9.71466 8.76808C10.0482 8.76808 10.3817 8.79254 10.7121 8.8407C11.1252 8.90185 11.4314 9.24966 11.4314 9.65861V12.8095C11.4314 13.0663 11.3096 13.3079 11.1018 13.4646C10.894 13.6213 10.6246 13.6741 10.3707 13.6091C10.2083 13.567 10.0404 13.5456 9.87165 13.5456C8.82739 13.5456 7.95808 14.3628 7.91591 15.384L7.91122 15.5094C7.91122 16.4152 8.67274 17.1613 9.59828 17.1613L9.9724 17.1621C10.8933 17.1621 11.6509 16.4206 11.6509 15.5186L11.6423 15.3145V2.82709C11.6423 2.37074 12.0211 2 12.4874 2H15.6717C16.0864 2 16.4403 2.29506 16.5059 2.69561C16.7347 4.08989 17.169 4.96514 17.8204 5.51246C18.4772 6.06436 19.327 6.27687 20.2885 6.42746C20.6985 6.49167 21 6.83794 21 7.24385V10.4047C21 10.6355 20.9008 10.8564 20.7274 11.0124C20.554 11.1691 20.3213 11.2478 20.0862 11.2287C18.8787 11.1316 17.7016 10.8305 16.6066 10.3412ZM14.9758 3.65418H13.3325V15.2854C13.3379 15.3626 13.3411 15.4406 13.3411 15.5186C13.3411 17.3272 11.8204 18.8155 9.9724 18.8155C9.90758 18.8155 9.84275 18.8139 9.77792 18.8094C9.71856 18.8132 9.65842 18.8147 9.59828 18.8147C7.74564 18.8147 6.22182 17.3226 6.22182 15.5094C6.22182 15.4391 6.22416 15.368 6.22728 15.3168C6.30461 13.4577 7.85499 11.9602 9.74121 11.8945V10.4223L9.71466 10.4215C7.01536 10.4215 4.77298 12.5504 4.69097 15.1868C4.69018 15.2289 4.6894 15.2717 4.6894 15.3145C4.6894 18.0664 6.99662 20.3344 9.80448 20.3458C13.4567 20.3458 14.9164 17.6276 14.9164 15.1952V8.9523C14.9164 8.65036 15.0851 8.37211 15.3562 8.22688C15.6272 8.08164 15.9568 8.0931 16.2169 8.25592C17.1627 8.84834 18.2132 9.25654 19.3098 9.45987V7.92876C18.3132 7.71319 17.4384 7.3715 16.7199 6.76762C15.9435 6.11481 15.3273 5.15242 14.9758 3.65418Z'
                fill={color}
            />
        </svg>


    )
}

export default Tiktok
