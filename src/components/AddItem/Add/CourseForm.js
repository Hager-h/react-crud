import React, { Component,Fragment } from 'react'
import "./Add.css"

export default function CourseForm(props) {
  return (
    <div>
      
<form>

<input onChange={props.changeFun} type="text" placeholder='WRITE YOUR COURSE' value={props.current}/>
      <button id="sub" onClick={props.addCourse}> Add Course</button>
</form>

    </div>
  )
}
