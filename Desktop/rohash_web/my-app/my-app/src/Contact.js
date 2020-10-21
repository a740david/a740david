import React, { Component } from "react";



const arr =["Everything","01","02","03","04","05","06","07","08","09","10","11"];

function Wrapper(props) {
    let list =[]
  for(let tag of arr){
    list.push(
    
    <button className="tags" onClick={(e) =>{ console.log(`${tag}`)
    props.handleClick(tag)}} >
    
   <img className="tags1"  src={`${tag}.png`} alt={`${tag}`} />
   
</button>

  )
    }
    return list
  }
  

  
  function Contact(props){
  let list1=Wrapper(props);
  return(
    <div className = "buttuns-parent" >
      {list1}
    </div>
  )
};
class Table extends Component {
  constructor(props) {
     super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
     this.state = { //state is by default an object
         renderStudents: [
           { name:'(איפוס)תיקון', age: 'תקלות', email: 'שעות טיסה', number:  "מס' מלא" },
           { id: 1, name: 'דרוש תיקון', age: "תקלה 2", email: '5:32' ,number: "01_0001"},
           { id: 2, name: 'דרוש תיקון', age: "תקלה 2", email: '5:32' ,number:"01_0002"},
           { id: 3, name: 'דרוש תיקון', age: "תקלה 2", email: '5:32' ,number:"01_0003"},
           { id: 4, name: 'דרוש תיקון', age: "תקלה 2", email: '5:32' ,number:"01_0004"},
           { id: 5, name: 'דרוש תיקון', age: "תקלה 2", email: '5:32' ,number:"01_0005"},
           { id: 6, name: 'דרוש תיקון', age: "תקלה 2", email: '5:32' ,number:"01_0006"},
           { id: 7, name: 'דרוש תיקון', age: "תקלה 2", email: '5:32' ,number:"01_0007"},
           { id: 8, name: 'דרוש תיקון', age: "תקלה 2", email: '5:32' ,number:"01_0008"},
           { id: 9, name: 'דרוש תיקון', age: "תקלה 2", email: '5:32' ,number:"01_0009"},
           { id: 10, name: 'דרוש תיקון', age: "תקלה 2", email: '5:32' ,number:"01_00010"},
           { id: 11, name: 'דרוש תיקון', age: "תקלה 2", email: '5:32' ,number:"01_00011"},
           
        ],    
        students: []
     }
     this.renderSpecificStudent = this.renderSpecificStudent.bind(this)
  }

  componentDidMount() {
     const students = this.state.renderStudents
     this.setState({students})
  }
 
   renderTableData() {
         return this.state.students.map((student, index) => {
            const { id, name, age, email ,number} = student //destructuring
            return (
               <tr className="line-frame" key={id}>
                  
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{email}</td>
                  <td>{number}</td>
               </tr>
            )
         })
  }

  renderSpecificStudent(id){
     const parsedId = parseInt(id)
    if (id === "Everything"){
       const allStudents = this.state.renderStudents
         this.setState({students: allStudents})
      } else {
         let student=  this.state.renderStudents.filter(student => student.id === parsedId);
          if(student.length >0) {
             this.setState({
                students: student
             })
          }
      }
  }

  render() {
     return (
        <div className = "contact-container">
        <Contact handleClick={this.renderSpecificStudent} />
        <div className="Search-background">
           <h1 className="Letters"> חיפוש</h1>
        </div>
           <table id='students'>
           
              <tbody className="frame">
                 {this.renderTableData()}
              </tbody>
           </table>
           
        </div>
     )
  }
 
}

export default Table 