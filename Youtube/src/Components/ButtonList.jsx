import React from 'react'

export const ButtonList = () => {

 const buttonList = ["All",'JavaScript','Gaming','Kapil Sharma','Music','User Interface Design','Mixes','AI','Live']
    // 'Free Fire','Smart Phone','India Pop Music','Comedy','Cars']

  return (
    // <div>
    <div className='fixed bg-white w-full ml-4 flex gap-3 pt-5 pb-4 z-10'>
     {
        buttonList.map((buttonName,index)=>{
            return (<button  key={index} className='bg-gray-200 rounded-lg font-semibold pt-[2px] pb-[2px] pl-[5px] pr-[5px] whitespace-nowrap'>{buttonName}</button>)
        })
     }
    </div>
    // </div>
  )
}
