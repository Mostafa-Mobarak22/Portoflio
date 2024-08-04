import React from 'react'
import './portfolio.css'
export default function Portfolio() {
    const traks = ['WEB DESIGN','MOBILE DESIGN','LOGO DESIGN','WEB APPLICATION DEVELOPMENT','MOBILE APPLICATION DEVELOPMENT','PWA DEVELOPMENT']
  return (<>
    <div className='p-5'><h2>Portoflio</h2></div>
    <div className='porto d-flex justify-content-center align-items-center flex-wrap gap-5'>
        {
            traks.map((track,index)=>{
                if((index+1)%2==0){
                    if(index==0||index==1||index==2){
                        return <>
                                <div className="track d-flex justify-content-center align-items-center shadow-lg text-white px-2" style={{backgroundColor:'rgb(192, 192, 192)'}}>
                                    <h4 className='text-center text-decoration-underline'>{track}</h4>
                                </div>
                        </>
                    }
                    else{
                        return <>
                                <div className="track d-flex justify-content-center align-items-center shadow-lg text-white px-2" style={{backgroundColor:'rgb(192, 192, 192)'}}>
                                    <h4 className='text-center'>{track}</h4>
                                </div>
                        </>
                    }
                }
                else{
                    if(index==0||index==1||index==2){
                        return <>
                                <div className="track d-flex justify-content-center align-items-center shadow-lg text-white px-2" style={{backgroundColor:'rgb(92, 92, 92)'}}>
                                    <h4 className='text-center text-decoration-underline'>{track}</h4>
                                </div>
                        </>
                    }
                    else{
                        return <>
                                <div className="track d-flex justify-content-center align-items-center shadow-lg text-white px-2" style={{backgroundColor:'rgb(92, 92, 92)'}}>
                                    <h4 className='text-center'>{track}</h4>
                                </div>
                        </>
                    }
                }
                
            })
        }
    </div>
    </>)
}
