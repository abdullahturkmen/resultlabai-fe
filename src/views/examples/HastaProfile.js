/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/resultlab-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/resultlab-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import toothImg from "./../../assets/img/tooth.png";
import eyeImg from "./../../assets/img/eye.png";
import {useEffect, useState} from 'react';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import CropTooth from "components/CropTooth";
import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

const Profile = () => {



  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileSize, setSelectedFileSize] = useState([]);
  const [xrayDetail, setXrayDetail] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {

    if(selectedImg?.length > 0){
        localStorage.setItem('xray-img', JSON.stringify(selectedImg))
    }

  }, [selectedImg]);



  useEffect(() => {

    if(xrayDetail?.length > 0){
        localStorage.setItem('xray-detail', JSON.stringify(xrayDetail))
    }

  }, [xrayDetail]);





  const handleSubmit = async (event) => {
      setIsLoading(true)
      event.preventDefault()
      const formData = new FormData();
      formData.append("file", selectedFile);
      try {
          await axios({
              method: "post",
              url: `${apiURL}`,
              data: formData,
              headers: {
                  "accept": "application/json",
                  "Content-Type": "multipart/form-data"
              },
              proxy: false
          }).then(response => {
              console.log("datalar", response.data.result);
              setXrayDetail(response.data.result);
              setIsChecked(true);
              setIsLoading(false);
          });
      } catch (error) {
          console.log(error)
      }
  }


  const handleFileSelect = (event) => {
      setXrayDetail([])
      setIsChecked(false)
      setSelectedFile(event.target.files[0])
      setSelectedImg(URL.createObjectURL(event.target.files[0]));


      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);


      reader.onload = function (e) {
          var image = new Image();
          image.src = e.target.result;
          image.onload = function () {
              setSelectedFileSize({'width': this.width, 'height': this.height})
          };
      }

  }



  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../../assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Button
                    className="mr-4"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Connect
                  </Button>
                  <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Message
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">22</span>
                        <span className="description">Friends</span>
                      </div>
                      <div>
                        <span className="heading">10</span>
                        <span className="description">Photos</span>
                      </div>
                      <div>
                        <span className="heading">89</span>
                        <span className="description">Comments</span>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                    Jessica Jones
                    <span className="font-weight-light">, 27</span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    Bucharest, Romania
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    University of Computer Science
                  </div>
                  <hr className="my-4" />
                  <p>
                    Ryan — the name taken by Melbourne-raised, Brooklyn-based
                    Nick Murphy — writes, performs and records all of his own
                    music.
                  </p>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Show more
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow mb-4">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Röntgen</h3>
                  </Col>
                
                </Row>
              </CardHeader>
              <CardBody>
                
                










              <div className="">


<form onSubmit={handleSubmit}>
    <div className="input-group my-3">
        <input type="file" className="form-control" id="inputGroupFile02"
            onChange={handleFileSelect}/>
        <button className="input-group-text" htmlFor="inputGroupFile02" type="submit">check</button>
    </div>
</form>

</div>

{
                                    (xrayDetail.length == 0 && selectedImg && isChecked) && (
                                        <div className="alert alert-danger">Mükemmel hiçbirşey yok :)</div>
                                    )
                                }

{
isLoading && (
    <div className="alert alert-success">geliyorrrr</div>
)
} 

              </CardBody>
            </Card>

            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Geçmiş Röntgenler</h3>
                  </Col>
                
                </Row>
              </CardHeader>
              <CardBody>
                
                
....
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
