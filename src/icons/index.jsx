export const Arrow = (props) => {
    return (

        <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.5 7.5a.5.5 0 010 1H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5z" />
        </svg>
    )
}

export const Timer = (props) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M6 2h12v6l-4 4 4 4v6H6v-6l4-4-4-4V2m10 14.5l-4-4-4 4V20h8v-3.5m-4-5l4-4V4H8v3.5l4 4M10 6h4v.75l-2 2-2-2V6z" />
        </svg>
    );
}