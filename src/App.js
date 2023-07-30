import React, { Component } from 'react'
import './App.css';
import CourseList from"./components/AddItem/Del/CourseList.js"
import CourseForm from './components/AddItem/Add/CourseForm.js';
 class App extends Component {

constructor(props) {
  super(props)

  this.state = {
     courses:[
      {name:"html"},
      {name:"js"},
      {name:"css"},
    

     ],
     current:"",
  }
}

changeFun=(e)=>{
  this.setState
({
  current:e.target.value
})
}

addCourse=(e)=>{
  e.preventDefault()
  let current=this.state.current
  if(current.length!==0){
let courses=this.state.courses
courses.push({name:current})
this.setState({
  courses,
  current:""
})
  }else{
    alert("please enter data")
  }
}

edit=(index,value)=>{
let courses=this.state.courses

let course=courses[index]

course['name']=value
this.setState({
courses
})
}


del=(index)=>{
let courses=this.state.courses
courses.splice(index,1)
this.setState({
  courses
})
}

  render() {
    const{courses}=this.state
    const courseList=courses.map((course,index)=>{
      return <CourseList key={index} courses={this.state.courses} details={course} del={this.del} index={index} edit={this.edit}/>
    })
    return (
      <section className="APP">
        <h1>Add course</h1>
      <CourseForm changeFun={this.changeFun} addCourse={this.addCourse} current={this.state.current} />
      <div className="flex">
    </div> 

    {courseList.length?courseList:<p className='text'>No Courses To Show</p>} 

</section>
    )
  }
}
export default App