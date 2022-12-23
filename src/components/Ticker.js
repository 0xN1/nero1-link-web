import Draggable from 'react-draggable'

function Ticker({ ticker, draggable }) {
    return (
        <Draggable grid={[10, 10]} handle=".handle" disabled={!draggable}>
            <div className="relative mb-4  flex flex-col items-center">
                <svg
                    className="handle"
                    width="611"
                    height="183"
                    viewBox="0 0 611 183"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_ddiiii_13_209)">
                        <rect
                            x="5"
                            y="4"
                            width="596"
                            height="170"
                            rx="25"
                            fill="#1E1E1E"
                        />
                    </g>
                    <g filter="url(#filter1_ddddii_13_209)">
                        <rect
                            x="27"
                            y="27"
                            width="552"
                            height="124"
                            rx="25"
                            fill="#1E1E1E"
                        />
                        <rect
                            x="27.5"
                            y="27.5"
                            width="551"
                            height="123"
                            rx="24.5"
                            stroke="#1E1E1E"
                        />
                    </g>
                    <rect
                        x="38.5"
                        y="35.5"
                        width="529"
                        height="107"
                        rx="14.5"
                        fill="#121212"
                        stroke="#1E1E1E"
                    />
                    <defs>
                        <filter
                            id="filter0_ddiiii_13_209"
                            x="2"
                            y="1"
                            width="602"
                            height="176"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="-1" dy="-1" />
                            <feGaussianBlur stdDeviation="1" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0588235 0 0 0 0 0.0588235 0 0 0 0 0.0588235 0 0 0 0.5 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_13_209"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="1" dy="1" />
                            <feGaussianBlur stdDeviation="1" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.168627 0 0 0 0 0.168627 0 0 0 0 0.168627 0 0 0 0.3 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect1_dropShadow_13_209"
                                result="effect2_dropShadow_13_209"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect2_dropShadow_13_209"
                                result="shape"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="3" dy="3" />
                            <feGaussianBlur stdDeviation="4" />
                            <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                            />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0588235 0 0 0 0 0.0588235 0 0 0 0 0.0588235 0 0 0 0.9 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect3_innerShadow_13_209"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="-3" dy="-3" />
                            <feGaussianBlur stdDeviation="3" />
                            <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                            />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.168627 0 0 0 0 0.168627 0 0 0 0 0.168627 0 0 0 0.9 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect3_innerShadow_13_209"
                                result="effect4_innerShadow_13_209"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="3" dy="-3" />
                            <feGaussianBlur stdDeviation="3" />
                            <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                            />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0588235 0 0 0 0 0.0588235 0 0 0 0 0.0588235 0 0 0 0.2 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect4_innerShadow_13_209"
                                result="effect5_innerShadow_13_209"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="-3" dy="3" />
                            <feGaussianBlur stdDeviation="3" />
                            <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                            />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0588235 0 0 0 0 0.0588235 0 0 0 0 0.0588235 0 0 0 0.2 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect5_innerShadow_13_209"
                                result="effect6_innerShadow_13_209"
                            />
                        </filter>
                        <filter
                            id="filter1_ddddii_13_209"
                            x="0"
                            y="0"
                            width="611"
                            height="183"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="9" dy="9" />
                            <feGaussianBlur stdDeviation="11.5" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.9 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_13_209"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="-9" dy="-9" />
                            <feGaussianBlur stdDeviation="9" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0.9 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect1_dropShadow_13_209"
                                result="effect2_dropShadow_13_209"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="9" dy="-9" />
                            <feGaussianBlur stdDeviation="9" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.2 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect2_dropShadow_13_209"
                                result="effect3_dropShadow_13_209"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="-9" dy="9" />
                            <feGaussianBlur stdDeviation="9" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.2 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect3_dropShadow_13_209"
                                result="effect4_dropShadow_13_209"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect4_dropShadow_13_209"
                                result="shape"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="-1" dy="-1" />
                            <feGaussianBlur stdDeviation="1" />
                            <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                            />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.5 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect5_innerShadow_13_209"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="1" dy="1" />
                            <feGaussianBlur stdDeviation="1" />
                            <feComposite
                                in2="hardAlpha"
                                operator="arithmetic"
                                k2="-1"
                                k3="1"
                            />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0.3 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect5_innerShadow_13_209"
                                result="effect6_innerShadow_13_209"
                            />
                        </filter>
                    </defs>
                </svg>
                <div className="relative -mt-[140px] flex  h-[88px] w-[513px] overflow-x-hidden overflow-y-clip text-center font-bold">
                    <span className="animate-marquee whitespace-nowrap text-8xl uppercase text-ora">
                        <span>{ticker}---</span>
                    </span>
                    <span className="absolute top-0 animate-marquee2 whitespace-nowrap text-8xl uppercase text-ora">
                        <span>{ticker}---</span>
                    </span>
                </div>
            </div>
        </Draggable>
    )
}
export default Ticker
