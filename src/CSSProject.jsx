import { Col } from "react-bootstrap";
export const CSSProjectCard = ({title,imgUrl,description,href}) =>{
 

  return (
<Col sm={6} md={4}>
    <div className="project-card">
 <div  className="video-card" >
<img src={imgUrl} alt="" /> 
    </div>
<h4>
 {title}
</h4>
      <p className='hello'>
{description}
{/* This project is built exclusively using HTML and CSS, showcasing a fully functional, responsive design without any JavaScript. */}
      </p>
      <button className='demo'>
        <a href={href}>live Demo</a>
      </button>
    </div>
    </Col>
  );
}
