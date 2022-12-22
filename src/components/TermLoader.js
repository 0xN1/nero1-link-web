import { useState, useEffect } from 'react'

function TermLoader({ number }) {
    const [termText, setTermText] = useState('█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒')

    const checkNumber = (number) => {
        if (number > 0 && number < 6) {
            setTermText('█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒')
        } else if (number > 5 && number < 11) {
            setTermText('██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒')
        } else if (number > 10 && number < 16) {
            setTermText('███▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒')
        } else if (number > 15 && number < 21) {
            setTermText('████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒')
        } else if (number > 20 && number < 26) {
            setTermText('█████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒')
        } else if (number > 25 && number < 31) {
            setTermText('██████▒▒▒▒▒▒▒▒▒▒▒▒▒▒')
        } else if (number > 30 && number < 36) {
            setTermText('███████▒▒▒▒▒▒▒▒▒▒▒▒▒')
        } else if (number > 35 && number < 41) {
            setTermText('████████▒▒▒▒▒▒▒▒▒▒▒▒')
        } else if (number > 40 && number < 46) {
            setTermText('█████████▒▒▒▒▒▒▒▒▒▒▒')
        } else if (number > 45 && number < 51) {
            setTermText('██████████▒▒▒▒▒▒▒▒▒▒')
        } else if (number > 50 && number < 56) {
            setTermText('███████████▒▒▒▒▒▒▒▒▒')
        } else if (number > 55 && number < 61) {
            setTermText('████████████▒▒▒▒▒▒▒▒')
        } else if (number > 60 && number < 66) {
            setTermText('█████████████▒▒▒▒▒▒▒')
        } else if (number > 65 && number < 71) {
            setTermText('██████████████▒▒▒▒▒▒')
        } else if (number > 70 && number < 76) {
            setTermText('███████████████▒▒▒▒▒')
        } else if (number > 75 && number < 81) {
            setTermText('████████████████▒▒▒▒')
        } else if (number > 80 && number < 86) {
            setTermText('█████████████████▒▒▒')
        } else if (number > 85 && number < 91) {
            setTermText('██████████████████▒▒')
        } else if (number > 90 && number < 96) {
            setTermText('███████████████████▒')
        } else if (number > 95 && number < 101) {
            setTermText('████████████████████')
        }
    }

    useEffect(() => {
        checkNumber(number)
        // console.log(number)
    }, [number])

    return <div>{termText}</div>
}
export default TermLoader
