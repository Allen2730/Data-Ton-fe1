'use client'
import React from 'react'
import OTPInput from 'react-otp-input'

const InvitationCode: React.FC = () => {
    const [otp, setOtp] = React.useState('')
    return (
        <div className='w-full h-[100vh] relative bg flex-col flex items-center justify-center '>
            <div className='flex flex-col gap-3 items-center'>
                <p className='text-[30px] text-[#05F292] paytone'>Early Access Airdrop</p>
                <p className='text-white'>Enter your invite code to claim your airdrop</p>
                <div className='flex flex-col gap-3'>
                    <OTPInput
                        value={otp}
                        onChange={(value) => setOtp(value)}
                        numInputs={6}
                        // isInputNum
                        renderInput={(props) => <input {...props} />}
                        inputStyle={{
                            width: '48px',
                            height: '48px',
                            margin: '0.3rem',
                            fontSize: '1rem',
                            textAlign: 'center',
                            outline: "none",
                            color: "black",
                            background: "white",
                            border: "none",
                            borderRadius: "8px"
                        }}
                    />
                    <button className='h-[42px] bg-[#05F292] rounded-[38px] font-bold text-white'>Enter Invitation code</button>
                </div>
                <p className='text-white'>No Invitation code? <a href="/dashboard" className='underline'>Skip</a></p>
            </div>
        </div>
    )
}

export default InvitationCode