import Image from 'next/image'
import React from 'react'
import Script from 'next/script'

const ConnectWallet = () => {
    return (
        <div className='w-full h-[100vh] relative bg flex-col flex items-center justify-center'>
            <Script id="initialize-library">
            {`
                const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
                    manifestUrl: 'https://bearib.pythonanywhere.com/tonconnect-manifest.json',
                });

                //tonConnectUI.uiOptions = {
                //    actionsConfiguration: {
                //        returnStrategy: 'http://localhost:3001/connect-wallet'
                //    }
                //};

                const currentIsConnectedStatus = tonConnectUI.connected;
                console.log('yy', currentIsConnectedStatus, )
                async function connectToWallet() {
                    //await tonConnectUI.disconnect()
                    const connectedWallet = await tonConnectUI.connectWallet();
                    await window.location.replace(window.location.origin+"/invitation");

                    // Do something with connectedWallet if needed      
                    //console.log(connectedWallet);
                }
                

                if (tonConnectUI.account != null) {
                    window.location.replace(window.location.origin+"/invitation");
                }                    
                
                document.getElementById('ton-connect').addEventListener('click', connectToWallet)//().catch(error => {console.error("Error connecting to wallet:", error)}))
            `}
            </Script>
            <div className='w-[345px] h-[375px] border-2 border-[#05F292] rounded-[15px] relative flex flex-col items-center justify-center'>
                <div className='bg-black w-[116px] flex items-center justify-center h-[116px] rounded-full absolute top-[-60px]'>
                    <Image src={"/Images/wallet.svg"} className="" width={86} height={86} alt="" />
                </div>
                <div className='w-full h-[225px] justify-between flex flex-col items-center px-5'>
                    <p className='text-[32px] paytone text-white text-center'>Connect your <br /> <span className='text-[#05F292]'>Wallet</span></p>
                    <p className='text-white phetsarath text-center text-[16px] '>Connect your Ton wallet to create your unique CARV Identity</p>
                    <button id='ton-connect' className="w-[180px] h-[42px] rounded-[37px] bg-[#05F292] py-[9px] px-[20px] flex items-center gap-2 z-[500]">
                        <div className="w-[25px] h-[25px] rounded-full bg-white items-center justify-center flex">
                            <Image src={"/Images/arrow.svg"} width={11.67} height={13.33} alt="" />
                        </div>
                        <p className="text-black phetsarath2 font-bold">Connect Wallet</p>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ConnectWallet