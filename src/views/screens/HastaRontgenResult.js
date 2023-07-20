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
import { useEffect, useState } from 'react';
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


const HastaRontgenResult = () => {


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

        setTimeout(() => {
            setSelectedImg(JSON.parse(localStorage.getItem('xray-img')))
            setXrayDetail(JSON.parse(localStorage.getItem('xray-detail')))
          
               
                if (!!localStorage.getItem('xray-detail')) {
                    const xrayImg = document.querySelector('.xray-img');
                    console.log("xrayImg : ", xrayImg)
                    console.log("datalar : ", localStorage.getItem('xray-detail'))
                    JSON.parse(localStorage.getItem('xray-detail')).map((e, index) => {
                        console.log("new element : ", e)
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
                
            }
        }, 1000)
        setIsLoading(false)
    }, [localStorage]);


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


    const teethSelected = (numx) => {

        console.log("bulgu : ", document.querySelector(`.teeth-bulgu-${numx}`))
        console.log("diş : ", document.querySelector(`.teeth-${numx}`))

        if (document.querySelector(`.teeth-${numx}`).classList.contains('selected')) {
            console.log("if içi")
            document.querySelector(`.teeth-${numx}`).classList.remove('selected')
            setTimeout(() => {
                document.querySelector(`.teeth-bulgu-${numx}`).classList.remove('selected')
            }, 1000);

        } else {
            console.log("else içi")
            document.querySelector(`.teeth-${numx}`).classList.add('selected')
            setTimeout(() => {
                document.querySelector(`.teeth-bulgu-${numx}`).classList.add('selected')
            }, 1000);

        }


    }


    return (
        <>
            <UserHeader /> {/* Page content */}
            <Container className="mt--7" fluid>
                <Row>

                    <Col>
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">


                                    <h3 className="mb-0">Röntgen Sonucu</h3>
                                    <div className="col text-right">
                                        <Button color="primary" type="button">
                                            Yazdır
                                        </Button>
                                    </div>


                                </Row>
                            </CardHeader>
                            <CardBody>


                                Bu kısma hasta bilgileri gelecek (hasta bilgileri documana göre yapılacak) (Sidebar kaldırılacak)


                                <div className="">


                                    {
                                        xrayDetail?.length > 0 && (
                                            <div className="analysis">

                                                <div className="row">
                                                    <div className="col-12 col-lg-8">
                                                        <div className="analysis-section xray-img">
                                                            <img src={selectedImg}
                                                                alt="" />
                                                        </div>
                                                        <div className="analysis-section teeth d-none">
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>18</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>17</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>16</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>15</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>14</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>13</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>12</span>
                                                            </div>
                                                            <div className="tooth bg-success">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>11</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>21</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>22</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>23</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>24</span>
                                                            </div>
                                                            <div className="tooth bg-success">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>25</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>26</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>27</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>28</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>48</span>
                                                            </div>
                                                            <div className="tooth bg-danger">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>47</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>46</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>45</span>
                                                            </div>
                                                            <div className="tooth bg-danger">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>44</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>43</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>42</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>41</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>31</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>32</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>33</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>34</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>35</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>36</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>37</span>
                                                            </div>
                                                            <div className="tooth">
                                                                <img src={toothImg}
                                                                    alt="" />
                                                                <span>38</span>
                                                            </div>
                                                        </div> <pre>{toothCategories}</pre>
                                                        <div className="analysis-section counter">

                                                           

                                                            {
                                                                toothCategories && Object.entries(toothCategories).map((e, index) => (
                                                                    <div className={
                                                                        `counter-btn kist ${colors[index]
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
                                                            xrayDetail?.map((e, index) => (

                                                                <div className={
                                                                    `analysis-section details teeth-${index}`
                                                                }
                                                                    key={index}>
                                                                    <img src={eyeImg}
                                                                        alt=""
                                                                        className="tooth-visibility"
                                                                        onClick={
                                                                            () => teethSelected(index)
                                                                        } />
                                                                    <div className="tooth-numbers">
                                                                        <img src={toothImg}
                                                                            alt="" />
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
                                                                            } />


                                                                        <div className="tooth-info-details">
                                                                            <span className="text-info me-1">
                                                                                {
                                                                                    e.name
                                                                                }</span>
                                                                            %{
                                                                                Math.trunc(e.confidence * 100)
                                                                            }<br />
                                                                            +Bulgu ekle<br />
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
                                        (xrayDetail?.length == 0 && selectedImg && isChecked) && (
                                            <div className="alert alert-danger">Mükemmel hiçbirşey yok :)</div>
                                        )
                                    }

                                    {
                                        isLoading && (
                                            <div className="alert alert-success">geliyorrrr</div>
                                        )
                                    } </div>


                                Yorum ekleme ve listeleme alanı


                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HastaRontgenResult;
