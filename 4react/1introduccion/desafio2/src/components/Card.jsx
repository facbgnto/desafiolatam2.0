import React from "react";
import CardBootstrap from "react-bootstrap/Card";

const Card = ({titulo,url,descripcion}) => {
    return  <div class="col-12 col-md-4 p-3">
                <CardBootstrap   style={{ width: "18rem", border: "#fff 2px solid" }}>
                    <CardBootstrap.Img variant="top" src={url}/>
                    <CardBootstrap.Body class="bg-dark p-3">
                        <CardBootstrap.Title>{titulo}</CardBootstrap.Title>
                        <CardBootstrap.Text>{descripcion}</CardBootstrap.Text>
                    </CardBootstrap.Body>
                </CardBootstrap>
            </div>
}
export default Card;