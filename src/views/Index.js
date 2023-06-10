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

import { useState, useEffect } from "react";
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    Col,
    Form,
    FormGroup,
    Input
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { useDispatch, useSelector } from 'react-redux';
import { request } from "variables/services";
import moment from "moment";

const Index = (props) => {
    const { token } = useSelector(state => state.auth)
    const [modalOpen, setModalOpen] = useState(false);
    const [patientList, setPatientList] = useState([]);

    useEffect(() => {
        request({ url: '/patient', token: token }).then(result => {
            return setPatientList(result.data)
        })
    }, [])

    return (
        <>
            <Header /> {/* Page content */}
            <Container className="mt--7" fluid>
                {/* Table */}
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0 d">
                                <Row className="align-items-center">
                                    <h3 className="mb-0">Hasta Listesi</h3>
                                    <div className="col text-right">
                                        <Button color="primary" type="button"
                                            onClick={
                                                () => setModalOpen(!modalOpen)
                                            }>
                                            Yeni Hasta Ekle
                                        </Button>
                                    </div>
                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Hasta ID</th>
                                        <th scope="col">Adı-Soyadı</th>
                                        <th scope="col">Doğum Tarihi</th>
                                        <th scope="col">Hekim</th>
                                        <th scope="col">Oluşturma Tarihi</th>
                                        <th scope="col">Güncelleme Tarihi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {patientList?.length > 0 &&
                                        patientList.map((patient, index) => (<tr key={index}>
                                            <th scope="row">
                                            #{patient.id}
                                            </th>
                                            <td>{patient.firstName} {patient.lastName}</td>
                                            <td>
                                                
                                                    {moment(patient.birthDate).format(`DD.MM.YYYY`)}
                                               
                                            </td>
                                            <td>
                                                <div className="avatar-group">
                                                {patient.dentist.firstName} {patient.dentist.lastName}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">60%</span>
                                                    <div>
                                                        <Progress max="100" value="60" barClassName="bg-danger" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle className="btn-icon-only text-light" href="#pablo" role="button" size="sm" color=""
                                                        onClick={
                                                            (e) => e.preventDefault()
                                                        }>
                                                        <i className="fas fa-ellipsis-v" />
                                                    </DropdownToggle>
                                                    <DropdownMenu className="dropdown-menu-arrow" right>
                                                        <DropdownItem href="#pablo"
                                                            onClick={
                                                                (e) => e.preventDefault()
                                                            }>
                                                            Favorilere Ekle
                                                        </DropdownItem>
                                                        <DropdownItem href="#pablo"
                                                            onClick={
                                                                (e) => e.preventDefault()
                                                            }>
                                                            Arşivle
                                                        </DropdownItem>
                                                        <DropdownItem href="#pablo"
                                                            onClick={
                                                                (e) => e.preventDefault()
                                                            }>
                                                            Paylaş
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>))
                                    }


                                </tbody>
                            </Table>
                            <CardFooter className="py-4">
                                <nav aria-label="...">
                                    <Pagination className="pagination justify-content-end mb-0" listClassName="justify-content-end mb-0">
                                        <PaginationItem className="disabled">
                                            <PaginationLink href="#pablo"
                                                onClick={
                                                    (e) => e.preventDefault()
                                                }
                                                tabIndex="-1">
                                                <i className="fas fa-angle-left" />
                                                <span className="sr-only">Previous</span>
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem className="active">
                                            <PaginationLink href="#pablo"
                                                onClick={
                                                    (e) => e.preventDefault()
                                                }>
                                                1
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#pablo"
                                                onClick={
                                                    (e) => e.preventDefault()
                                                }>
                                                2
                                                <span className="sr-only">(current)</span>
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#pablo"
                                                onClick={
                                                    (e) => e.preventDefault()
                                                }>
                                                3
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#pablo"
                                                onClick={
                                                    (e) => e.preventDefault()
                                                }>
                                                <i className="fas fa-angle-right" />
                                                <span className="sr-only">Next</span>
                                            </PaginationLink>
                                        </PaginationItem>
                                    </Pagination>
                                </nav>
                            </CardFooter>
                        </Card>
                    </div>
                </Row>

            </Container>


            <Modal toggle={
                () => setModalOpen(!modalOpen)
            }
                isOpen={modalOpen}>
                <div className=" modal-header">
                    <h5 className=" modal-title" id="exampleModalLabel">
                        Yeni Hasta Bilgileri
                    </h5>
                    <button aria-label="Close" className=" close" type="button"
                        onClick={
                            () => setModalOpen(!modalOpen)
                        }>
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <ModalBody>
                    <Form>
                        <Row>
                            <Col lg="6">
                                <FormGroup>
                                    <label className="form-control-label" htmlFor="input-username">
                                        Hasta Adı
                                    </label>
                                    <Input className="form-control-alternative"  id="input-username" placeholder="Username" type="text" />
                                </FormGroup>
                            </Col>
                            <Col lg="6">
                                <FormGroup>
                                    <label className="form-control-label" htmlFor="input-email">
                                        Soyadı
                                    </label>
                                    <Input className="form-control-alternative" id="input-email" placeholder="jesse@example.com" type="email" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6">
                                <FormGroup>
                                    <label className="form-control-label" htmlFor="input-username">
                                        Doğum Tarihi
                                    </label>
                                    <Input className="form-control-alternative" id="input-username" placeholder="Username" type="text" />
                                </FormGroup>
                            </Col>
                            <Col lg="6">
                                <FormGroup>
                                    <label className="form-control-label" htmlFor="input-email">
                                        Hekim Adı
                                    </label>
                                    <Input className="form-control-alternative" id="input-email" placeholder="jesse@example.com" type="email" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6">
                                <FormGroup>
                                    <label className="form-control-label" htmlFor="input-username">
                                        Hasta Numarası (Opsiyonel)
                                    </label>
                                    <Input className="form-control-alternative" id="input-username" placeholder="Username" type="text" />
                                </FormGroup>
                            </Col>
                            <Col lg="6">
                                <FormGroup>
                                    <label className="form-control-label" htmlFor="input-email">
                                        Cinsiyet
                                    </label>
                                    <Input className="form-control-alternative" id="input-email" placeholder="jesse@example.com" type="email" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" type="button"
                        onClick={
                            () => setModalOpen(!modalOpen)
                        }>
                        İptal
                    </Button>
                    <Button color="primary" type="button" onClick={
                            () => setModalOpen(!modalOpen)
                        }>
                        Ekle
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default Index;
