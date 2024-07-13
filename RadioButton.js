import { useState } from "react"

function RadioButton()
{
    const[course,setCourse]=useState(undefined)
    const[res,setResult]=useState(undefined)

    function displayCourse(e)
    {
        setResult(course)
        
        e.preventDefault()
    }
    return(<div>
        <form>
        <input type="radio" name="course" value="C" onChange={(e)=>setCourse(e.target.value)} />C
        <br/>
        <input type="radio" name="course" value="C++" onChange={(e)=>setCourse(e.target.value)} />C++
        <br/>
        <input type="radio" name="course" value="DS" onChange={(e)=>setCourse(e.target.value)}/>DS
        <br/>
        <input type="radio" name="course" value="JAVA" onChange={(e)=>setCourse(e.target.value)}/>JAVA
        <br/>
        <input type="submit" value="submit" onClick={displayCourse} />
        </form>
        {res}
    </div>)
}
export default RadioButton;