import { useEffect, useState } from 'react'

function Button({ text, onClick, variant, extraClass }) {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(true)
        onClick()
    }

    useEffect(() => {
        if (isClicked) {
            setTimeout(() => {
                setIsClicked(false)
            }, 10)
        }
    }, [isClicked])

    return (
        <button
            className={`relative flex flex-col items-center justify-center ${extraClass}`}
            onClick={handleClick}
        >
            {variant === 1 &&
                (isClicked ? (
                    <svg
                        width="196"
                        height="87"
                        viewBox="0 0 196 87"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_ddiiii_13_202)">
                            <rect
                                x="3"
                                y="3"
                                width="189.761"
                                height="80.6485"
                                rx="11.8601"
                                fill="#1E1E1E"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_ddiiii_13_202"
                                x="-2"
                                y="-2"
                                width="199.761"
                                height="90.6485"
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
                                    values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.5 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_13_202"
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
                                    values="0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0.3 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="effect1_dropShadow_13_202"
                                    result="effect2_dropShadow_13_202"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect2_dropShadow_13_202"
                                    result="shape"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="5" dy="5" />
                                <feGaussianBlur stdDeviation="6.5" />
                                <feComposite
                                    in2="hardAlpha"
                                    operator="arithmetic"
                                    k2="-1"
                                    k3="1"
                                />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.9 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="shape"
                                    result="effect3_innerShadow_13_202"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="-5" dy="-5" />
                                <feGaussianBlur stdDeviation="5" />
                                <feComposite
                                    in2="hardAlpha"
                                    operator="arithmetic"
                                    k2="-1"
                                    k3="1"
                                />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0.9 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="effect3_innerShadow_13_202"
                                    result="effect4_innerShadow_13_202"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="5" dy="-5" />
                                <feGaussianBlur stdDeviation="5" />
                                <feComposite
                                    in2="hardAlpha"
                                    operator="arithmetic"
                                    k2="-1"
                                    k3="1"
                                />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.2 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="effect4_innerShadow_13_202"
                                    result="effect5_innerShadow_13_202"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="-5" dy="5" />
                                <feGaussianBlur stdDeviation="5" />
                                <feComposite
                                    in2="hardAlpha"
                                    operator="arithmetic"
                                    k2="-1"
                                    k3="1"
                                />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.2 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="effect5_innerShadow_13_202"
                                    result="effect6_innerShadow_13_202"
                                />
                            </filter>
                        </defs>
                    </svg>
                ) : (
                    <svg
                        width="223"
                        height="114"
                        viewBox="0 0 223 114"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_ddddii_13_200)">
                            <rect
                                x="15"
                                y="15"
                                width="189.761"
                                height="80.6485"
                                rx="11.8601"
                                fill="#1E1E1E"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_ddddii_13_200"
                                x="0"
                                y="0"
                                width="222.761"
                                height="113.648"
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
                                <feOffset dx="5" dy="5" />
                                <feGaussianBlur stdDeviation="6.5" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.9 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_13_200"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="-5" dy="-5" />
                                <feGaussianBlur stdDeviation="5" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0.9 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="effect1_dropShadow_13_200"
                                    result="effect2_dropShadow_13_200"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="5" dy="-5" />
                                <feGaussianBlur stdDeviation="5" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.2 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="effect2_dropShadow_13_200"
                                    result="effect3_dropShadow_13_200"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="-5" dy="5" />
                                <feGaussianBlur stdDeviation="5" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.2 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="effect3_dropShadow_13_200"
                                    result="effect4_dropShadow_13_200"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect4_dropShadow_13_200"
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
                                    result="effect5_innerShadow_13_200"
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
                                    in2="effect5_innerShadow_13_200"
                                    result="effect6_innerShadow_13_200"
                                />
                            </filter>
                        </defs>
                    </svg>
                ))}
            {variant === 2 &&
                (isClicked ? (
                    <svg
                        width="399"
                        height="87"
                        viewBox="0 0 399 87"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_ddiiii_13_228)">
                            <rect
                                x="3"
                                y="3"
                                width="393"
                                height="81"
                                rx="11.8601"
                                fill="#1E1E1E"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_ddiiii_13_228"
                                x="-2"
                                y="-2"
                                width="403"
                                height="91"
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
                                    values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.5 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_13_228"
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
                                    values="0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0.3 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="effect1_dropShadow_13_228"
                                    result="effect2_dropShadow_13_228"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect2_dropShadow_13_228"
                                    result="shape"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="5" dy="5" />
                                <feGaussianBlur stdDeviation="6.5" />
                                <feComposite
                                    in2="hardAlpha"
                                    operator="arithmetic"
                                    k2="-1"
                                    k3="1"
                                />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.9 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="shape"
                                    result="effect3_innerShadow_13_228"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="-5" dy="-5" />
                                <feGaussianBlur stdDeviation="5" />
                                <feComposite
                                    in2="hardAlpha"
                                    operator="arithmetic"
                                    k2="-1"
                                    k3="1"
                                />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0.9 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="effect3_innerShadow_13_228"
                                    result="effect4_innerShadow_13_228"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="5" dy="-5" />
                                <feGaussianBlur stdDeviation="5" />
                                <feComposite
                                    in2="hardAlpha"
                                    operator="arithmetic"
                                    k2="-1"
                                    k3="1"
                                />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.2 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="effect4_innerShadow_13_228"
                                    result="effect5_innerShadow_13_228"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="-5" dy="5" />
                                <feGaussianBlur stdDeviation="5" />
                                <feComposite
                                    in2="hardAlpha"
                                    operator="arithmetic"
                                    k2="-1"
                                    k3="1"
                                />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.2 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="effect5_innerShadow_13_228"
                                    result="effect6_innerShadow_13_228"
                                />
                            </filter>
                        </defs>
                    </svg>
                ) : (
                    <svg
                        width="426"
                        height="114"
                        viewBox="0 0 426 114"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_ddddii_13_227)">
                            <rect
                                x="15"
                                y="15"
                                width="393"
                                height="81"
                                rx="11.8601"
                                fill="#1E1E1E"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_ddddii_13_227"
                                x="0"
                                y="0"
                                width="426"
                                height="114"
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
                                <feOffset dx="5" dy="5" />
                                <feGaussianBlur stdDeviation="6.5" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.9 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_13_227"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="-5" dy="-5" />
                                <feGaussianBlur stdDeviation="5" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0.9 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="effect1_dropShadow_13_227"
                                    result="effect2_dropShadow_13_227"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="5" dy="-5" />
                                <feGaussianBlur stdDeviation="5" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.2 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="effect2_dropShadow_13_227"
                                    result="effect3_dropShadow_13_227"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="-5" dy="5" />
                                <feGaussianBlur stdDeviation="5" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.2 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="effect3_dropShadow_13_227"
                                    result="effect4_dropShadow_13_227"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect4_dropShadow_13_227"
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
                                    result="effect5_innerShadow_13_227"
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
                                    in2="effect5_innerShadow_13_227"
                                    result="effect6_innerShadow_13_227"
                                />
                            </filter>
                        </defs>
                    </svg>
                ))}

            <span className="absolute top-0 p-8 text-5xl">{text}</span>
        </button>
    )
}
export default Button
