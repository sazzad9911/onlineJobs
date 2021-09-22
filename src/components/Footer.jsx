import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" style={{backgroundColor:'#0995ED',color:'white',width:'100%'}} className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title" style={{color:'white'}}>About Us</h5>
            <p>
              Scientistx Private Company Limited is an organization that's main work to support all the employers who are interested in 
              online private jobs and services. We provide some jobs and services that are important to the online marketing
              and system that are expends their business over the country.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title" style={{color:'white'}}>Important Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!" style={{color:'#FEF9E7'}}>SAFTA Food</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" style={{color:'#FEF9E7'}}>GUAINS BroadBrand</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" style={{color:'#FEF9E7'}}>Scientistx Graphics</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" style={{color:'#FEF9E7'}}>Scientistx E-commerce</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.scientistx.info" style={{color:'#FEF9E7'}}> Scientistx LTD </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;