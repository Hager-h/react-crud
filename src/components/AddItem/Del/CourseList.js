import React, { Component } from 'react'
import "./Del.css"

export default class CourseList extends Component {

state={
  isedit:false
}

renderCourse=()=>{


  return (
    <div className="format">
    <span className='first'> {this.props.details.name}</span>
  <div className="btns">
  <button onClick={this.isToggle} > Edit Course</button>
  <button onClick={()=>this.props.del(this.props.index)}> Delete Course</button>
  </div>
    </div>

  )

}

update=(e)=>{
e.preventDefault()
this.props.edit(this.props.index,this.input.value)
this.isToggle()
}

renderUpdateCourse=()=>{
  return (
    <div>
    <form id="form" onSubmit={this.update}>
    <input id="inp" type ="text" defaultValue={this.props.details.name} ref={(val)=>this.input=val}      />
    <button>update</button>
    </form>
    </div>
  )
}

isToggle=()=>{
  const {isedit}=this.state
  this.setState({
  isedit:!isedit
  
})
}

  render() {
  return (
    <div>
    {this.state.isedit?this.renderUpdateCourse():this.renderCourse()}
    </div>
  )
  }
}
