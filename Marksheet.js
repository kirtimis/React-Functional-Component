import { useState } from "react"

function Marksheet()
{
    let[english,setEnglish]=useState(0)
    let[hindi,setHindi]=useState(0)
    let[maths,setMaths]=useState(0)
    let[science,setScience]=useState(0)
    let[social,setSocial]=useState(0)
    let[total,setTotal]=useState('')
    let[all,setAll]=useState([])
    let[per,setPer]=useState('')
    let[res,setRes]=useState('')
    let[result,setResult]=useState(undefined)
    let[gracesubject,setGraceSubject]=useState('')
    let[dis,setDis]=useState(' ')

    function setAllValue(e)
    {
        const m=new Map()
        m.set(`English : ${english} ,`)
        m.set(`Hindi : ${hindi} ,`)
        m.set(`Maths : ${maths} ,`)
        m.set(`Science : ${science} ,`)
        m.set(`Scoial : ${social} `)
        //const m1 = [ English:english,hindi,maths,science,social ]
        setAll([...all,m])

        e.preventDefault()
    }
    // function Total(e)
    // {
    //     //let t=parseInt(english)+parseInt(hindi)+parseInt(maths)+parseInt(science)+parseInt(maths)+parseInt(social);
    //     let t=english+hindi+maths+science+maths+science+social
    //     let p=t/6
    //     setTotal(t)
    //     setPer(Math.round(p))
    // }
    function Result(e)
    {
        let ar=[]
        if(english<33 && hindi<33 || english<33 && maths<33 || english<33 && science<33 || english<33 && social<33 ||
            hindi<33 && maths<33 || hindi<33 && science<33 || hindi<33 && social<33 ||
            maths<33 && science<33 || maths<33 && social<33 ||
            science<33 && social <33)
            {
                setRes('Fail')

            } 
        else{
            if(english < 33 || hindi<33 || maths<33 || science<33 || social < 33)
                {
                    let grace
                    let flag=false
                    if(english<33 && english>=28 && flag==false)
                    {
                        grace=33-english
                        english=english+grace;
                        setGraceSubject(`Got grace of ${grace} in English`)
                        setRes('Pass')
                        flag=true
                    }
                    else if(hindi<33 && hindi>=28  && flag==false)
                    {
                        grace=33-hindi
                      hindi=hindi+grace;
                      setGraceSubject(`Got grace of ${grace} in Hindi`)
                      setRes('Pass')
                        flag=true
                    }
                    else if(maths<33 && maths>=28  && flag==false)
                    {
                        grace=33-maths
                        maths=maths+grace
                        setGraceSubject(`Got grace of ${grace} in Maths`)
                        setRes('Pass')
                        flag=true
                    }
                    else if(science<33 && science>=28 && flag==false)
                    {
                        grace=33-science
                        science=science+grace
                        setGraceSubject(` Got grace of ${grace} in Science`)
                        setRes('Pass')
                        flag=true
                    }
                    else if(social<33 && social>=28 && flag==false)
                    {
                        grace=33-social
                        social=social+grace
                        setGraceSubject(`Got grace of ${grace} in Social Science`)
                        setRes('Pass')
                        flag=true
                    }

                }
        if(english>=33 && hindi >=33 && maths>=33 && science>=33 && social>=33)
        {
            setRes('Pass')
            //Total();
        }
        if(res=='Pass')
        {
           
            //document.getElementsByTagName('p').visible=true
            if(english>=75 || hindi >=75 || maths>=75 ||science>=75 || social>=75)
            {
                setResult(true)
                if(english>=75)
                {
                   
                    setDis(prevText => prevText +'English ')
                }
                if(hindi>=75)
                {
                    
                    setDis(prevText => prevText +'Hindi ')
                if(maths>=75)
                {
                   
                    setDis(prevText => prevText +'Maths ')
                }
                if(science>=75)
                {
                   
                    setDis(prevText => prevText +'Science ')
                }
                if(social>=75)
                {
                   
                    setDis(prevText => prevText+'Social ')
                }

            }
        }
    }  
    }
    }
    return(<div className="marksheet">
        <h1 className="h1">Marksheet</h1>
        <form className="form">
            <table>
             <tr>
                <td><label>English :</label></td>
                <td><input type="number" placeholder="Enter in Number Only" onChange={(e)=>setEnglish(parseInt(e.target.value))}/></td>
            </tr>

            <tr>
                <td><label>Hindi :</label></td>
                <td><input type="number"  placeholder="Enter in Number Only" onChange={(e)=>setHindi(parseInt(e.target.value))}/>
                </td>
            </tr>

            <tr>
                <td><label>Maths :</label></td>
                <td><input type="number"  placeholder="Enter in Number Only" onChange={(e)=>setMaths(parseInt(e.target.value))}/></td>
            </tr>

            <tr>
                <td><label>Science :</label></td>
                <td><input type="number" placeholder="Enter in Number Only" onChange={(e)=>setScience(parseInt(e.target.value))}/></td>
            </tr>

            <tr>
                <td><label>Social Science :</label></td>
                <td><input type="number" placeholder="Enter in Number Only" onChange={(e)=>setSocial(parseInt(e.target.value))}/></td>
            </tr>
        <br/>
            <tr>
                <td><input type="submit"  value="Show Marks" onClick={setAllValue} /></td>
                <td><input type="button"  value="Total Marks" onClick={Total} /></td>
                <td><input type="button"  value="Result" onClick={Result}   /></td>
          
            </tr>
            </table>
        </form>
        {all}
        <p >Total Marks: {total}</p>
        <p >Percentage :{per}%</p>
        <p >Result : {res}</p>
        <p >Grace Subject : {gracesubject}</p>
        {result && <p >Distinction Subject : {dis}</p>}
    </div>)
}

export default Marksheet