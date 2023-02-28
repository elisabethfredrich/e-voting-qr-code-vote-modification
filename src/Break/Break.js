import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Box
}from "@chakra-ui/react";


export default function Break(){

    const navigate = useNavigate();

    return(
        <div className=" page-container container-dark-bg">
        <Box justifyContent={"center"} display={"flex"} flexDirection="column" className="inner-box-start">
    
                <div className="content-break">
            <h1 className="h1-instructions">You have completed the first part of General Election 2023</h1>
        <h2 className="lightblue-text"> Please follow the guidlines on your instruction paper to verify your vote now.</h2>
        <Button
            marginTop={"2rem"}
            width="8rem"
            className="light-btn"
            onClick={() => navigate("/bulletinboard")}
            >
            Verify vote
            </Button> 
        </div>
        </Box>
        </div>
    )
} 