import { useState } from "react"

function DropDown()
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
        <select name="course" onChange={(e)=>setCourse(e.target.value)}>
            <option>Select Course</option>
            <option value="C">C</option>
            <option value="C++">C++</option>
            <option value="DS">DS</option>
            <option value="Java">Java</option>
        </select>
        <br/>
        <input type="submit" value="submit" onClick={displayCourse} />
        </form>
        {res}
    </div>)
}
export default DropDown;