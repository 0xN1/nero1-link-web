import { APP_NAME } from '@/lib/constants'
import Head from 'next/head'
import { use, useEffect, useState } from 'react'
import Draggable from 'react-draggable'

import Ticker from '@/components/Ticker'
import Terminal from '@/components/Terminal'
import Button from '@/components/Button'

const randomText = [
    // 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti',
    // 'Random text is random. They are not real words. They are just random letters',
    // 'Presentation is everything, and this is not a presentation. This is a website',
    'Hey, Nero One here. Currently exploring : 3D, VJ, Mograph, XR, Creative Coding, Web3, DAO',
]

const randomTicker = [
    'work in progress',
    'hotel california',
    'the end',
    'the beginning',
    'the middle',
    'breaking news',
]

const Home = () => {
    const [ticker, setTicker] = useState('work in progress')
    const [termText, setTermText] = useState(
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti',
    )
    const [loadNumber, setLoadNumber] = useState(0)

    // changing number from 0-100 and loop
    const changeNumber = () => {
        if (loadNumber < 100) {
            setLoadNumber(loadNumber + 1)
        } else {
            setLoadNumber(0)
        }
    }

    // changing text from randomText array and loop
    const changeText = () => {
        const random = Math.floor(Math.random() * randomText.length)
        setTermText(randomText[random])
    }

    const changeTicker = () => {
        const random = Math.floor(Math.random() * randomTicker.length)
        setTicker(randomTicker[random])
    }

    useEffect(() => {
        const interval = setInterval(() => {
            changeText()
        }, 5000)
        return () => clearInterval(interval)
    }, [termText])

    useEffect(() => {
        const interval = setInterval(() => {
            changeTicker()
        }, 5000)
        return () => clearInterval(interval)
    }, [ticker])

    useEffect(() => {
        const interval = setInterval(() => {
            changeNumber()
        }, 100)
        return () => clearInterval(interval)
    }, [loadNumber])

    return (
        <div className="flex min-h-[100vh] flex-col items-center justify-center bg-[#1E1E1E] bg-grid bg-repeat py-10 font-chak text-[#C4B3AD] ">
            <Head>
                <title>Nero One</title>
                <link rel="icon" href="/mono.svg" />
            </Head>

            <div className="-my-[50vh] scale-50 columns-1 items-center gap-8 font-chak text-3xl sm:-my-0 sm:scale-100 sm:gap-20 2xl:columns-2">
                <div className="mb-10 flex justify-center">
                    <svg
                        width="587"
                        height="132"
                        viewBox="0 0 587 132"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_ddddii_0_1)">
                            <rect
                                x="9"
                                y="9"
                                width="384.389"
                                height="111.161"
                                rx="12.3213"
                                fill="#1F1F1F"
                            />
                        </g>
                        <path
                            d="M41.6901 42.3098H47.2538L68.7051 75.8159H68.8287V42.3098H74.5161V85.5833H68.9524L47.5011 52.0773H47.3774V85.5833H41.6901V42.3098ZM83.7682 42.3098H112.823V47.5026H89.7029V61.2883H111.031V66.4193H89.7029V80.3905H112.823V85.5833H83.7682V42.3098ZM152.007 71.9831V85.5833H146.072V73.4667L140.941 67.9648H126.167V85.5833H120.232V42.3098H145.763L151.76 48.3063V61.7829L147 66.543L152.007 71.9831ZM126.167 62.8956H143.105L145.887 60.1756V50.099L143.105 47.379H126.167V62.8956ZM160.364 78.6596V49.2336L167.288 42.3098H187.688L194.612 49.2336V78.6596L187.688 85.5833H167.288L160.364 78.6596ZM184.844 80.3905L188.677 76.5577V51.3354L184.844 47.5026H170.131L166.298 51.3354V76.5577L170.131 80.3905H184.844ZM210.35 48.4917L200.768 53.4373V47.9972L211.154 42.3098H216.285V85.5833H210.35V48.4917ZM224.211 83.4815V80.3905L226.313 78.2886H229.589L231.691 80.3905V83.4815L229.589 85.5833H226.313L224.211 83.4815ZM239.282 42.3098H245.217V80.4523H267.101V85.5833H239.282V42.3098ZM273.278 42.3098H279.213V85.5833H273.278V42.3098ZM288.786 42.3098H294.35L315.801 75.8159H315.925V42.3098H321.612V85.5833H316.048L294.597 52.0773H294.473V85.5833H288.786V42.3098ZM330.864 42.3098H336.799V61.412H345.701L356.643 42.3098H363.196L350.77 63.8847L364.123 85.5833H357.447L345.701 66.6048H336.799V85.5833H330.864V42.3098Z"
                            fill="#474747"
                        />
                        <g filter="url(#filter1_ddddii_0_1)">
                            <rect
                                x="427.389"
                                y="9"
                                width="148.561"
                                height="111.161"
                                rx="12.3213"
                                fill="#1E1E1E"
                            />
                        </g>
                        <path
                            d="M467.312 54.1435L448.167 98.3444L537.066 75.0281L556.211 30.8167L467.312 54.1435ZM470.246 58.5962L526.714 73.1965L455.874 91.7759L470.246 58.5962ZM534.163 70.5754L477.663 55.9646L548.503 37.3852L534.163 70.5754Z"
                            fill="#474747"
                        />
                        <defs>
                            <filter
                                id="filter0_ddddii_0_1"
                                x="0"
                                y="0"
                                width="404.389"
                                height="131.161"
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
                                <feOffset dx="3" dy="3" />
                                <feGaussianBlur stdDeviation="4" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.9 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_0_1"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="-3" dy="-3" />
                                <feGaussianBlur stdDeviation="3" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.196078 0 0 0 0 0.196078 0 0 0 0 0.196078 0 0 0 0.9 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="effect1_dropShadow_0_1"
                                    result="effect2_dropShadow_0_1"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="3" dy="-3" />
                                <feGaussianBlur stdDeviation="3" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.2 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="effect2_dropShadow_0_1"
                                    result="effect3_dropShadow_0_1"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="-3" dy="3" />
                                <feGaussianBlur stdDeviation="3" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.2 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="effect3_dropShadow_0_1"
                                    result="effect4_dropShadow_0_1"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect4_dropShadow_0_1"
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
                                    result="effect5_innerShadow_0_1"
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
                                    values="0 0 0 0 0.196078 0 0 0 0 0.196078 0 0 0 0 0.196078 0 0 0 0.3 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="effect5_innerShadow_0_1"
                                    result="effect6_innerShadow_0_1"
                                />
                            </filter>
                            <filter
                                id="filter1_ddddii_0_1"
                                x="418.389"
                                y="0"
                                width="168.561"
                                height="131.161"
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
                                <feOffset dx="3" dy="3" />
                                <feGaussianBlur stdDeviation="4" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.9 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_0_1"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="-3" dy="-3" />
                                <feGaussianBlur stdDeviation="3" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0 0.188235 0 0 0 0.9 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="effect1_dropShadow_0_1"
                                    result="effect2_dropShadow_0_1"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="3" dy="-3" />
                                <feGaussianBlur stdDeviation="3" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.2 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="effect2_dropShadow_0_1"
                                    result="effect3_dropShadow_0_1"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="-3" dy="3" />
                                <feGaussianBlur stdDeviation="3" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.2 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="effect3_dropShadow_0_1"
                                    result="effect4_dropShadow_0_1"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect4_dropShadow_0_1"
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
                                    result="effect5_innerShadow_0_1"
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
                                    in2="effect5_innerShadow_0_1"
                                    result="effect6_innerShadow_0_1"
                                />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <Ticker ticker={ticker} />
                <Terminal loadNumber={loadNumber} termText={termText} />
                <div className="mx-auto grid scale-90 grid-cols-3">
                    <Button
                        text="ESC"
                        extraClass="text-[#474747] font-bold"
                        onClick={() => {
                            setLoadNumber(0)
                            setTicker('ESC')
                            setTermText('')
                        }}
                        variant={1}
                    />
                    <Button
                        text="PROCEED"
                        extraClass="text-[#FF4D00]"
                        onClick={() => {}}
                        variant={2}
                    />
                    <Button
                        text="NUL"
                        extraClass="text-[#1A1A1A] font-bold"
                        onClick={() => {}}
                        variant={1}
                    />
                    <Button text="▲" onClick={() => {}} variant={1} />
                    <Button
                        text="SPC"
                        extraClass="text-[#1A1A1A] font-bold"
                        onClick={() => {}}
                        variant={1}
                    />
                    <Button text="◀" onClick={() => {}} variant={1} />
                    <Button text="SEL" onClick={() => {}} variant={1} />
                    <Button text="▶" onClick={() => {}} variant={1} />
                    <Button
                        text="SPC"
                        extraClass="text-[#1A1A1A] font-bold"
                        onClick={() => {}}
                        variant={1}
                    />
                    <Button text="▼" onClick={() => {}} variant={1} />
                    <Button
                        text="BRK"
                        extraClass="text-[#1A1A1A] font-bold"
                        onClick={() => {}}
                        variant={1}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
