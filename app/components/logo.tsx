type LogoProps = {
    size?: number;
}

export default function Logo({ size = 40 }: LogoProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-3"
        >
            <circle
                cx="50"
                cy="50"
                r="45"
                stroke="white"
                strokeWidth="3"
            />

            {[25, 35].map((radius) => (
                <circle
                    key={radius}
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="white"
                    strokeWidth="2"
                    opacity="0.8"
                />
            ))}

            <circle
                cx="50"
                cy="50"
                r="15"
                fill="white"
            />
        </svg>
    )
}
