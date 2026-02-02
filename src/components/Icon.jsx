const NeonQuoteIcon = ({ size = 64, color = '#00E5FF' }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M166 80C109 80 64 125 64 182C64 239 109 284 166 284C179 284 192 281 204 276C199 318 178 356 144 387C130 400 134 422 151 430C166 437 184 432 194 418C237 366 260 305 260 244C260 153 216 80 166 80Z"
            stroke={color}
            strokeWidth="40"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M366 80C309 80 264 125 264 182C264 239 309 284 366 284C379 284 392 281 404 276C399 318 378 356 344 387C330 400 334 422 351 430C366 437 384 432 394 418C437 366 460 305 460 244C460 153 416 80 366 80Z"
            stroke={color}
            strokeWidth="40"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default NeonQuoteIcon;
