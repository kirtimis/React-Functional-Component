import { useState } from "react"

function ListBox()
{
    const[course,setCourse]=useState([])
    const[res,setResult]=useState(undefined)
    function handleListItem(e)
    {
       
        const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
        setCourse(selectedOptions)
    }
    function displayCourse(e)
    {
        setResult(course.join(','))

        e.preventDefault()
    }
    return(<div>
        <form>
        <select name="course" multiple onChange={handleListItem} >
            <option value="C">C</option>
            <option value="C++">C++</option>
            <option value="DS">DS</option>
            <option value="Java">Java</option>
        </select>
        <br/>
        <input type="submit" value="submit" onClick={displayCourse}/>
        </form>
        {res}
    </div>)
}
export default ListBox