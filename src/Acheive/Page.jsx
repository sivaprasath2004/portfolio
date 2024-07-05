import React,{useState} from 'react'
import frontendMentor from "../asset/Front-end-mentor.png" 
import Batch1 from '../asset/Batch1.png'
import Batch2 from '../asset/Batch2.png'
import Batch3 from '../asset/Batch3.png'
import './index.css'
const Page = ({mode}) => {
  const [switcher,setSwitcher]=useState(false)
  return (
    <main id='acheive'> 
      <section id='navigation'> <button onClick={()=>setSwitcher(false)}>
              <img
                className={!switcher?"filter_work":"filter_not"}
                id='github'
                src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
                alt="github"
              />
            </button>
            <button onClick={()=>setSwitcher(true)}>
              <img id="frontend_mentor"
                className={switcher?"filter_work":"filter_not"}
                src={frontendMentor}
                alt="frontend mentor"
              />
            </button></section>
  <section id='switcher'>
  {switcher?<>
  <h1>Front End Mentor</h1>
  <h1 id='heading' className='achieve_text'>Achievement</h1> 
  <div id='project_Info'>
  <p>Score : 2,520</p>
  <p>Solutions : 16</p>
  <p>Comments : 157</p>
  <p>Helpful Comments : 117</p>
  </div>
  <a href='https://www.frontendmentor.io/profile/sivaprasath2004'><button className="inspect">{`View >>`}</button></a>
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" id="line" />
  <h1 id='heading'>Solutions</h1>
  <div id='mentor_solution'> 
  <div>
    <p>Designing</p>
  <svg>
    <circle cx="70" cy="70" r="50"></circle>
    <circle cx="70" cy="70" r="50" style={{strokeDasharray: 280}} ></circle>
    </svg>
    </div>
    <div>
    <p>Responsive</p>
     <svg>
    <circle cx="70" cy="70" r="50"></circle>
    <circle cx="70" cy="70" r="50" style={{strokeDasharray: 315}}  ></circle>
    </svg> 
    </div>
    <div>
    <p>Performance</p>
    <svg>
    <circle cx="70" cy="70" r="50"></circle>
    <circle cx="70" cy="70" r="50" style={{strokeDasharray: 315}} ></circle>
    </svg></div>
    <div>
    <p>Best Practises</p>
    <svg>
    <circle cx="70" cy="70" r="50"></circle>
    <circle cx="70" cy="70" r="50" style={{strokeDasharray: 315}} ></circle>
    </svg></div>
    <div>
    <p>SEO</p>
    <svg>
    <circle cx="70" cy="70" r="50"></circle>
    <circle cx="70" cy="70" r="50" style={{strokeDasharray: 315}} ></circle>
    </svg></div>
  </div>
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" id="line" />
<h1 id='heading' className='achieve_text'>Batches</h1>
<div id='Batches'>
<div id='Batch'><img src={Batch1} alt='Batch1'/><p>Mentor Of the week 3rd</p></div>
<div id='Batch'><img src={Batch2} alt='Batch2'/><p>Mentor Of the week 2nd</p></div>
<div id='Batch'><img src={Batch3} alt='Batch3'/><p>Mentor Of the Month 3rd</p></div>
</div>
  </>: 
  <>
  <h1>Github</h1>
  <h1 id='heading'>Projects 🔥</h1>
  <div id='project_Info'>
  <p>Total Projects:50+</p>
  <p>Mern & Full Stack Projects:5</p>
  <p>Android Projects:2</p>
  <p>API Projects:3</p>
  <p>Other projects:42+</p>
  <a href='https://github.com/sivaprasath2004?tab=repositories'><button className="inspect">{`View >>`}</button></a>
  </div>
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" id="line" />
<h1 id='heading'>💻Tech Stack <img src = "https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" id='small_icon' /> </h1>
<div id='image_container'>
<img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt='html'  id='secondary' />

 <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt='javascript' id='secondary' />
 
<img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"  alt='css' id='secondary' />

<img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt='tailwind'  id='secondary' />

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt='React' id='secondary' />

<img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt='node' id='secondary' />

<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt='express' id='secondary'  />

<img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"  alt='mongodb'  id='secondary' /> 
  
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt='npm' id='secondary'  />

<img src="https://img.shields.io/badge/Pug-FFF?style=for-the-badge&logo=pug&logoColor=A86454" alt='pug'  id='secondary' />
 
</div>
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" id="line" />
 <h1 id='heading'>Tools are used<img src="https://media.giphy.com/media/iY8CRBdQXODJSCERIr/giphy.gif" id='small_icon'  />&nbsp; </h1>
<div id='image_container'>
<img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"  id='secondary'/>
<img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" id='secondary' />
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" id='secondary' />
<img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white"id='secondary' />
<img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white" id='secondary' />
</div>
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" id="line" />

<h1 id='heading'>Statistical Data 👾</h1>
<div id='status_container'>
 <img align="center"
    src={`https://github-readme-stats.vercel.app/api/top-langs?username=sivaprasath2004&show_icons=true&locale=en&bg_color=${mode?"0d1117":"white"}&text_color=${mode?"ffffff":"black"}&layout=compact`}
    bg_color="#808080" id="important_img" /> 
 

 <img align="center" src={`https://github-readme-stats.vercel.app/api?username=sivaprasath2004&show_icons=true&locale=en&bg_color=${mode?"0d1117":"white"}&text_color=${mode?"ffffff":"black"}&repo=convoychat`}
    alt="adam-pw" id='important_img' /> 
 

 <img align="center" src={`https://github-readme-streak-stats.herokuapp.com/?user=sivaprasath2004&theme=${mode?"dark":"light"}&background=${mode?"0d1117":"white"}&date_format=M%20j%5B%2C%20Y%5D`} id='important_img'/> 
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" id="line" />
</div></> }
</section>   
    </main>
  )
}

export default Page