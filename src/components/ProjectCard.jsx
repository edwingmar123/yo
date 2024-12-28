import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export const ProjectCard = ({ title, description, imgUrl, onClick,url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx"
       onClick= {onClick}
       style={{ cursor: "pointer" }}>
       <a href={url}>
        <img src={imgUrl} />
        
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        </a>
      </div>
    </Col>
  )
}
