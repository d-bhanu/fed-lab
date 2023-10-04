import React,{Component} from 'react';
export default class Arrayobj extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            studentdetails:[
                {
                    sno:1,
                    sname:"mounika",
                    technology:"full stack developer"
                },
                {
                    sno:2,
                    sname:"jm",
                    technology:"java developer"
                },
                {
                    sno:3,
                    sname:"thv",
                    technology:"Designer"
                }
            ]
        }
    }
    render()
    {
        const{studentdetails}=this.state;
        return(
            <div>
                <table>
                    <tr>
                        <th>student number</th>
                        <th>student name</th>
                        <th>technology</th>
                    </tr>
                    {studentdetails.length>0 && studentdetails.map((student)=>{
                        return <tr key={student.sno}>
                            <td>{student.sno}</td>
                            <td>{student.sname}</td>
                            <td>{student.technology}</td>
                        </tr>
                    })}
                </table>
            </div>
        )
    }
}