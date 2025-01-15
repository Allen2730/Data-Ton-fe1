'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import GeneralModal from './Modal'
import { useRouter } from 'next/navigation'

const CreateDid = () => {
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const medias = ["/Images/tel.svg", "/Images/x.svg", "/Images/mail.svg", "/Images/discord.svg", "/Images/email.svg"]
    const handleCreate = () => {
        setOpen(!open)
        setTimeout(() => {
            setOpen(false)
            router.push("/dashboard/createdpage")
            // window.location.href("/dashboard/created")
        }, 4000)
    }

    const close = () => {
        setOpen(false)
    }
    return (
        <div className='w-full h-[100vh] relative bg flex-col flex items-center pt-[10%] overflow-hidden px-[6%] gap-4'>
            <div className='flex flex-row gap-2 items-center'>
                <p className='flex paytone text-[28px] font-normal text-white'>Data</p>
                <p className='flex paytone text-[28px] font-normal text-[#05F292]'> DID</p>
            </div>

            <div className='w-full '>
                <div>
                    <div className='w-full card h-[225px] flex flex-col justify-between p-4 relative'>
                        <div className='flex flex-col'>
                            <p className='text-white font-bold phetsarath2 text-[33px]'>Data DID</p>
                            <div className='flex flex-row items-center gap-1'>
                                {
                                    medias.map((item, index) => (
                                        <Image key={index} src={item} width={25.54} height={25.54} alt='' />
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <div className='w-full justify-between flex relative'>
                                <p className='text-[8px] w-[70%] text-white'>SELF-MANAGE DIGITAL IDENTITY AND PROTECT PRIVACY. OWN, MANAGE, AND MONETIZE YOUR DATA.</p>
                                <Image src={"/Images/did.svg"} width={98.75} className='rotate-[-8.6] absolute right-0 bottom-[-20px]' height={98.75} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='px-3 w-full text-white mt-3 flex flex-col gap-5'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row items-center justify-between'>
                                <p>Network</p>
                                <p>Polygon</p>
                            </div>
                            <div className='flex flex-row items-center justify-between'>
                                <p>Mint To</p>
                                <p>0xb189...nh79</p>
                            </div>
                            <div className='flex flex-row items-center justify-between'>
                                <p>Play With</p>
                                <p>0.00 MEMO</p>
                            </div>
                            <div className='flex flex-row items-center justify-between'>
                                <p>Total</p>
                                <p>0.00 MEMO + GAS FEE</p>
                            </div>
                        </div>
                        <button onClick={handleCreate} className='bg-[#05F292] rounded-[38px] flex items-center justify-center font-bold text-black h-[42px]'>Create</button>
                        <p className='flex text-center text-[11px]'>Total cost includes gas fees for Smart Account deployment, NFT minting and future profile upgrades.</p>
                    </div>
                </div>
            </div>
            {
                open && (
                    <GeneralModal handleClose={close} />
                )
            }


        </div>
    )
}

export default CreateDid