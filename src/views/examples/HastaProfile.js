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
  FormGroup,
  Form,
  Input,
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
  const [toothCategories, setToothCategories] = useState([]);
  const colors = [
      'red',
      'green',
      'yellow',
      'blue',
      'black'
  ];

  useEffect(() => {
      console.log("renk", colors[1])
      console.log("categoriler", toothCategories)
  }, [toothCategories]);

  useEffect(() => {

      const xrayImg = document.querySelector('.xray-img');
      xrayDetail.map((e, index) => {
          const elementLeft = e.xmin * 100 / selectedFileSize.width;
          const elementTop = e.ymin * 100 / selectedFileSize.height;
          const elementWidth = (e.xmax - e.xmin) * 100 / selectedFileSize.width;
          const elementHeight = (e.ymax - e.ymin) * 100 / selectedFileSize.height;
          const newElement = document.createElement("div");
          newElement.classList.add('teeth-bulgu');
          newElement.classList.add(`teeth-bulgu-${index}`);
          newElement.style.left = `${elementLeft}%`;
          newElement.style.top = `${elementTop}%`;
          newElement.style.width = `${elementWidth}%`;
          newElement.style.height = `${elementHeight}%`;
          xrayImg.appendChild(newElement)
      })

  }, [xrayDetail]);


  const categories = (resData) => {
      return resData.reduce((acc, obj) => {
          const key = obj['name'];
          if (!acc[key]) {
              acc[key] = [];
          }
          acc[key].push(obj);
          return acc;
      }, {});
  }


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
              setToothCategories(categories(response.data.result));
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

  const teethSelected = (num) => {

      if (document.querySelector(`.teeth-${num}`).classList.contains('selected')) {

          document.querySelector(`.teeth-${num}`).classList.remove('selected')
          document.querySelector(`.teeth-bulgu-${num}`).classList.remove('selected')
      } else {
          document.querySelector(`.teeth-${num}`).classList.add('selected')
          document.querySelector(`.teeth-bulgu-${num}`).classList.add('selected')
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
            <Card className="bg-secondary shadow">
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

{
xrayDetail ?. length && (
    <div className="analysis">

        <div className="row">
            <div className="col-12 col-lg-8">
                <div className="analysis-section xray-img">
                    <img src={selectedImg}
                        alt=""/>
                </div>
                <div className="analysis-section teeth d-none">
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>18</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>17</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>16</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>15</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>14</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>13</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>12</span>
                    </div>
                    <div className="tooth bg-success">
                        <img src={toothImg}
                            alt=""/>
                        <span>11</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>21</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>22</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>23</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>24</span>
                    </div>
                    <div className="tooth bg-success">
                        <img src={toothImg}
                            alt=""/>
                        <span>25</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>26</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>27</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>28</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>48</span>
                    </div>
                    <div className="tooth bg-danger">
                        <img src={toothImg}
                            alt=""/>
                        <span>47</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>46</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>45</span>
                    </div>
                    <div className="tooth bg-danger">
                        <img src={toothImg}
                            alt=""/>
                        <span>44</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>43</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>42</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>41</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>31</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>32</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>33</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>34</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>35</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>36</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>37</span>
                    </div>
                    <div className="tooth">
                        <img src={toothImg}
                            alt=""/>
                        <span>38</span>
                    </div>
                </div>
                <div className="analysis-section counter">

                    {
                    toothCategories && Object.entries(toothCategories).map((e, index) => (
                        <div className={
                                `counter-btn kist ${
                                    colors[index]
                                }`
                            }
                            key={index}>
                            <div>{
                                e[0]
                            }</div>
                            <div>{
                                e[1].length
                            }</div>
                        </div>
                    ))
                } </div>
            </div>
            <div className="col-12 col-lg-4">

                {
                xrayDetail.map((e, index) => (

                    <div className={
                            `analysis-section details teeth-${index}`
                        }
                        key={index}>
                        <img src={eyeImg}
                            alt=""
                            className="tooth-visibility"
                            onClick={
                                () => teethSelected(index)
                            }/>
                        <div className="tooth-numbers">
                            <img src={toothImg}
                                alt=""/>
                            <span>{
                                index + 1
                            }</span>

                        </div>
                        <div className="tooth-info">
                            <CropTooth img={selectedImg}
                                elementLeft={
                                    e.xmin
                                }
                                elementTop={
                                    e.ymin
                                }
                                elementWidth={
                                    e.xmax - e.xmin
                                }
                                elementHeight={
                                    e.ymax - e.ymin
                                }/>


                            <div className="tooth-info-details">
                                <span className="text-info me-1">
                                    {
                                    e.name
                                }</span>
                                %{
                                Math.trunc(e.confidence * 100)
                            }<br/>
                                +Bulgu ekle<br/>
                                +Tedavi planı gör
                            </div>
                        </div>
                    </div>

                ))
            } </div>
        </div>
    </div>
)
}


{
(xrayDetail.length == 0 && selectedImg && isChecked) && (
    <div className="alert alert-danger">Mükemmel hiçbirşey yok :)</div>
)
}

{
isLoading && (
    <div className="alert alert-success">geliyorrrr</div>
)
} </div>

















              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
