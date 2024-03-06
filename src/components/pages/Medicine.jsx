import React, { useState, useEffect } from 'react'
import Button from '../automs/Button';
import { BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';





export default function Medicine() {


    const [medicineData, setmedicineData] = useState({})
    const [medicineList, setmedicineList] = useState([])

    function handle(e) {
        setmedicineData({ ...medicineData, [e.target.name]: e.target.value })
        console.log(medicineData, "medicineData");
    }

    function getmedicineList() {
        axios.get("http://localhost:7800/list")

            .then((result) => {
                console.log(result, "result");
                setmedicineList(result.data)

            })
    }
    function addmedicineData() {
        axios.post(`http://localhost:7800/create`, medicineData)
            .then((result) => {
                console.log("result", result);
                getmedicineList()
                setmedicineData({
                    name: "",
                    expiry: "",
                    quantity: "",
                    price: ''
                })

            })


    }

    function deletemedicineData(id) {
        axios.delete(`http://localhost:7800/delete/${id}`,)
            .then((result) => {
                getmedicineList()
            })
    }

    function updatemedicine(id) {
        axios.put(`http://localhost:7800/update/${id}`, medicineData)
            .then((result) => {
                console.log(result, "result");
                getmedicineList()
                setmedicineData({
                    task: "",
                    description: ""
                })

            })
    }

    function viewmedicine(id) {
        axios.get(`http://localhost:7800/view/${id}`,)
            .then((result) => {
                setmedicineData(result.data)
            })
    }

    useEffect(() => {
        getmedicineList()
    }, [])

    return (

        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-4">

                    </div>
                    <div className="col-4">
                        <input type="text" placeholder='enter name' value={medicineData.name} style={{ margin: "20px" }} onChange={handle} name='name' />
                        <br />
                        <input type="text" placeholder='enter quantity' value={medicineData.quantity} style={{ margin: "20px" }} onChange={handle} name='quantity' />
                        <br />
                        <input type="text" placeholder='enter expiry' value={medicineData.expiry} style={{ margin: "20px" }} onChange={handle} name='expiry' />
                        <br />
                        <input type="text" placeholder='enter price' value={medicineData.price} style={{ margin: "20px" }} onChange={handle} name='price' />
                        <br />
                        <Button onClick={() => {
                            if (medicineData && medicineData._id) {
                                updatemedicine(medicineData._id)
                            } else {
                                addmedicineData()
                            }
                        }
                        } content={medicineData && medicineData._id ? " update" : "add"} />
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>


            {

                medicineList.map((val, ind) => {
                    return (
                        <React.Fragment key={ind}>

                            <div className="col-3" style={{ display: "inline-block" }}>
                                <div className="container">
                                    <div className="row">
                                        <span>{ind + 1}.</span>
                                        <Card sx={{ minWidth: 275 }}>
                                            <CardContent>
                                                <Typography sx={{ fontSize: 40 }} color="text.dark" gutterBottom>
                                                    {val.name}
                                                </Typography>
                                                <Typography variant="h6" component="div">
                                                    {val.quantity}
                                                </Typography>
                                                <Typography sx={{ fontSize: 30 }} color="text.dark" gutterBottom>
                                                    {`$ ${val.price}`}
                                                </Typography>
                                                <Typography sx={{ fontSize: 20 }} color="text.dark" gutterBottom>
                                                    {val.expiry}
                                                </Typography>
                                                <Button variant="outlined" content="delete" onClick={() => deletemedicineData(val._id)} startIcon={<DeleteIcon />} />


                                                <Button onClick={() => viewmedicine(val._id)} content="update" />
                                                <Link to={`/view-medicine/${val._id}`} style={{ textDecoration: "none", textAlign: "center", color: "black", }}>View</Link>


                                            </CardContent>
                                            <CardActions>
                                            </CardActions>
                                        </Card>
                                    </div>
                                </div>
                            </div>


                        </ React.Fragment>
                    )
                })
            }
        </React.Fragment >
    )
}
