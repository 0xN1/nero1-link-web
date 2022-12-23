import Draggable from 'react-draggable'
import TermLoader from '@/components/TermLoader'

function Terminal({ loadNumber, termText, draggable }) {
    return (
        <Draggable grid={[10, 10]} handle=".handle" disabled={!draggable}>
            <div className="relative mb-24 flex h-[377] w-[596] flex-col items-center sm:mb-4">
                <svg
                    className="handle"
                    width="611"
                    height="402"
                    viewBox="0 0 611 402"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_ddiiii_13_203)">
                        <rect
                            x="5"
                            y="10"
                            width="596"
                            height="377"
                            rx="25"
                            fill="#1E1E1E"
                        />
                    </g>
                    <g filter="url(#filter1_ddddii_13_203)">
                        <rect
                            x="27"
                            y="27"
                            width="552"
                            height="343"
                            rx="25"
                            fill="#1E1E1E"
                        />
                        <rect
                            x="27.5"
                            y="27.5"
                            width="551"
                            height="342"
                            rx="24.5"
                            stroke="#1E1E1E"
                        />
                    </g>
                    <rect
                        x="51.5"
                        y="50.5"
                        width="503"
                        height="296"
                        rx="14.5"
                        fill="#121212"
                        stroke="#1E1E1E"
                    />
                    <defs>
                        <filter
                            id="filter0_ddiiii_13_203"
                            x="2"
                            y="7"
                            width="602"
                            height="383"
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
                                result="effect1_dropShadow_13_203"
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
                                in2="effect1_dropShadow_13_203"
                                result="effect2_dropShadow_13_203"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect2_dropShadow_13_203"
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
                                result="effect3_innerShadow_13_203"
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
                                in2="effect3_innerShadow_13_203"
                                result="effect4_innerShadow_13_203"
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
                                in2="effect4_innerShadow_13_203"
                                result="effect5_innerShadow_13_203"
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
                                in2="effect5_innerShadow_13_203"
                                result="effect6_innerShadow_13_203"
                            />
                        </filter>
                        <filter
                            id="filter1_ddddii_13_203"
                            x="0"
                            y="0"
                            width="611"
                            height="402"
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
                                result="effect1_dropShadow_13_203"
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
                                in2="effect1_dropShadow_13_203"
                                result="effect2_dropShadow_13_203"
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
                                in2="effect2_dropShadow_13_203"
                                result="effect3_dropShadow_13_203"
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
                                in2="effect3_dropShadow_13_203"
                                result="effect4_dropShadow_13_203"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect4_dropShadow_13_203"
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
                                result="effect5_innerShadow_13_203"
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
                                in2="effect5_innerShadow_13_203"
                                result="effect6_innerShadow_13_203"
                            />
                        </filter>
                    </defs>
                </svg>
                <div className="relative -mt-[300px] flex flex-col items-center gap-4">
                    <span className=" scale-50 font-sans">
                        <TermLoader number={loadNumber} />
                    </span>
                    <span className="mt-5 h-[150px] w-[500px] overflow-hidden px-10 font-plex text-xl">
                        {termText}
                    </span>
                </div>
            </div>
        </Draggable>
    )
}
export default Terminal
