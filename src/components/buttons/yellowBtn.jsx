import Link from 'next/link'
import React from 'react'

const YellowBtn = ({text, goTo}) => {
    return goTo ? (
        <Link href={goTo} passHref>
            <button className="w-[200px]font-bold bg-createYellow text-black py-4 px-4 border-createYellow border text-lg">{text}</button>
        </Link>
    ) : (
        <button className="w-[200px] font-bold text-lg bg-createYellow text-black py-4 px-4 border-createYellow border">{text}</button>
    );
}
export default YellowBtn