import React, { useState } from 'react'

function Carusel() {
    const [changeImg, setChangeImg] = useState(0)
    const [letStopTime, setLetStopTime] = useState(false)

    function nextBtnClick(){
        setLetStopTime(true)
        if(changeImg != -2000){
            setChangeImg(changeImg - 400)
        }else{
            setChangeImg(0)
        }
    }

    function prevBtnClick(){
        if(changeImg != 0){
            setChangeImg(changeImg + 400)
        }
    }

    if(changeImg == -2000){
       const timeOut = setTimeout(() => {
            setChangeImg(0)
        },1000)

        if(letStopTime){
            clearTimeout(timeOut)
        }
    }
    else{
        const timeOut = setTimeout(() => {
            setChangeImg(changeImg - 400)
        },1000)

        if(letStopTime){
            clearTimeout(timeOut)
        }
    }

    if(letStopTime){
        setTimeout(() => {
            setLetStopTime(false)
        },3000) 
    }


  return (
    <div>
        <div className={`w-[400px] flex items-center mx-auto mt-10 overflow-x-auto`}>
            <img className='transition' style={{"transform":`translateX(${changeImg}px)`}} src='https://picsum.photos/id/1/400/400' alt='Random Img' width={400} height={400}/>
            <img className='transition' style={{"transform":`translateX(${changeImg}px)`}} src='https://picsum.photos/id/2/400/400' alt='Random Img' width={400} height={400}/>
            <img className='transition' style={{"transform":`translateX(${changeImg}px)`}} src='https://picsum.photos/id/3/400/400' alt='Random Img' width={400} height={400}/>
            <img className='transition' style={{"transform":`translateX(${changeImg}px)`}} src='https://picsum.photos/id/4/400/400' alt='Random Img' width={400} height={400}/>
            <img className='transition' style={{"transform":`translateX(${changeImg}px)`}} src='https://picsum.photos/id/5/400/400' alt='Random Img' width={400} height={400}/>
            <img className='transition' style={{"transform":`translateX(${changeImg}px)`}} src='https://picsum.photos/id/6/400/400' alt='Random Img' width={400} height={400}/>
        </div>
        <div className='flex items-center justify-center mt-5 space-x-4'>
            <button onClick={prevBtnClick} className={`bg-green-500 p-2 rounded-md text-white font-semibold ${changeImg == 0 ? "cursor-not-allowed opacity-50" : ""}`}>Prev</button> 
            <button onClick={nextBtnClick} className='bg-blue-500 p-2 rounded-md text-white font-semibold'>Next</button> 
        </div>
    </div>
  )
}

export default Carusel