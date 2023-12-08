import Link from 'next/link'
import React from 'react'

const BlackBtn = ({text, goTo}) => {
    return goTo ? (
        <Link href={goTo} passHref>
            <button className="w-[200px]font-bold bg-black text-white py-4 px-4 border-white border text-lg">{text}</button>
        </Link>
    ) : (
        <button className="w-[200px] font-bold text-lg bg-black text-white py-4 px-4 border-white border">{text}</button>
    );
}
export default BlackBtn