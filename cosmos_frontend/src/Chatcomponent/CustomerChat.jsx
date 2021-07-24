import React, { useEffect,useState,useRef,useCallback,useSelector } from 'react'
import { Link,RouteComponentProps } from 'react-router-dom';
import { Table, TableBody, FormControl, TableHead, TableRow, Button, Typography } from '@material-ui/core';
import ApiService from "../ApiServiceChu";

const CustomerChat=()=>{
    return(
        <div style={{textAlign:"center",marginTop:"100px",marginBottom:'500px'}}>
            <div style={{marginBottom:"20px"}}>실시간 채팅 시작</div>
                    <Link to="/chat/licsh123@naver.com" style={{textDecoration: 'none',fontSize:'13px'}}>
                                    <Button >상담 시작하기</Button>
                    </Link>

        </div>

    );
}
export default CustomerChat;