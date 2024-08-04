import React from "react";
import './skills.css'

export default function Skills() {
    const skills = [
        {name:'HTML',pers:90},
        {name:'CSS',pers:80},
        {name:'JAVA',pers:60},
        {name:'REACT',pers:75},
        {name:'PHP',pers:70},
        {name:'SQL',pers:95}
      ]
    return (
    <div className="skill">
        <h1>Skills</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolores eveniet corrupti reiciendis expedita incidunt ex praesentium vel dicta delectus. Tenetur voluptates nesciunt nostrum possimus, tempora, perspiciatis laudantium reiciendis molestiae, culpa ad neque. Ipsam voluptatem neque praesentium ad corporis, placeat enim ipsum illum. Voluptatem minus rem inventore quas alias aliquam.
        </p>
        <div className="list d-flex justify-content-around">
                <div className="focus">
                    <h3>My Focus</h3>
                    <ul>
                        <li>Full Stack Python</li>
                        <li>Full Stack .Net</li>
                        <li>UI/UX Design</li>
                        <li>Web Design</li>
                    </ul>
                </div>
                <div className='graph d-flex justify-content-center w-25 flex-wrap gap-3'>
                    {
                        skills.map((skill)=>{
                            return <>
                                <div className="lang">
                                    {skill.name}
                                </div>
                                <div className="pers" style={{background:`linear-gradient(to right, rgb(192, 192, 192), rgb(192, 192, 192) ${skill.pers}%,white ${skill.pers}%)`}}>
                        
                                </div>
                            </>
                        })
                    }
                </div>
        </div>
        
    </div>

  )
}
