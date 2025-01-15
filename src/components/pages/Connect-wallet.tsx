'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
interface datatype {
    img: string,
    title: string,
    act: string
}

const Connectwallet = () => {
    const [active, setActive] = useState("Binance")

    const data: datatype[] = [
        {
            img: "/Images/binance.svg",
            title: "Binance web3 Wallet",
            act: "Binance"
        },
        {
            img: "/Images/particle.svg",
            title: "Particle",
            act: "particle"
        },
        {
            img: "/Images/okx.svg",
            title: "OKX Wallet",
            act: "okx"
        },
        {
            img: "/Images/omni.svg",
            title: "Omni",
            act: "omni"
        },
        {
            img: "/Images/argent.svg",
            title: "Argent",
            act: "argent"
        },
        {
            img: "/Images/ledger.svg",
            title: "Ledger",
            act: "ledger"
        },
        {
            img: "/Images/imtoken.svg",
            title: "Im Token",
            act: "token"
        },
    ]
    return (
        <div className='w-full h-[100vh] relative bg flex-col flex items-center justify-center '>
            <div className='connect py-7 px-5'>
                {/* <p className='text-white'>hello</p> */}
                <div className='flex flex-col gap-3'>
                    {
                        data.map((item, index) => (
                            <Link href={"/invitation"} key={index} onClick={() => setActive(item.act)} className={`flex flex-row items-center justify-between w-full ${active === item.act ? "bg-[#05F2920D] rounded-[8px] p-2" : ""}`}>
                                <div className={`flex flex-row items-center gap-4 `}>
                                    <Image src={item.img} width={33.88} height={36} alt='' />
                                    <p className='text-white phetsarath2 font-bold text-[16px]'>{item.title}</p>
                                </div>
                                {
                                    active === item.act ?
                                        <Image src={"/Images/check.svg"} width={15} height={16} alt='' />
                                        : ""
                                }
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Connectwallet