import React,{useState} from 'react';
import './categories.css';


const Categories = ()=>{
    const [categories,setCategories] = useState(['Destination','Temple','Dharamshala','Sthal','Puja','Bhojanalaya','Padayatra','Events'])
    return(
        <> { categories?.map((categories,index)=>{
                const srcValue = './images/'+`${categories}`+'.png';
              return <div className='categoriesMainDiv' key={index}>
                        <div><img src={srcValue} alt={categories}/></div>
                        
                        <div><p className='tittle'>{categories}</p></div>
                    </div>
            })
        }
            
        </>
    )
}

export default Categories