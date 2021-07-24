import {Table, TableRow, TableCell} from '@material-ui/core'
import Footer from "./FindIdFooter";
import styled from "styled-components";
import React,{ useEffect} from 'react';
import {useHistory } from "react-router-dom";
import { useState } from 'react';


function ShowEmail() {
    const history = useHistory();
    const find_user = JSON.parse(sessionStorage.getItem("find_user"));

    useEffect(()=>{
        console.log('이메일 찾음 페이지');
        return ()=>{
            sessionStorage.clear();
            console.log('sessionStorage clear()');
        };
    },[]);


    return (
        <Div style={{marginBottom:'30px'}}>
            <div className="Email-header">
                <h3>아이디 찾기 결과</h3>
                <p>다음 정보로 가입된 아이디 입니다.</p>                                    
            </div>
            <div className="Email-body">

            <Table style={{marginBottom:'20px', marginTop:'40px'}}> 
                <TableRow><TableCell align="center"><b>이름</b></TableCell>
                <TableCell align="center">{find_user[0]?.user_name}</TableCell></TableRow>
                <TableRow><TableCell align="center"><b>생년월일</b></TableCell>
                <TableCell align="center">{find_user[0]?.user_birthday}</TableCell></TableRow>
                <TableRow><TableCell colSpan='2' align="center"><b>아이디/이메일</b></TableCell></TableRow>

                {find_user.map(find_users =>
                <TableRow><TableCell  colSpan='2' align="center">{find_users.user_email}</TableCell></TableRow>
                )}
            </Table>
                

            <p style={{fontSize:'14px', color:'gray', textAlign:'left'}}>아이디 찾기에 더 궁금하신 사항이 있다면 고객센터에 문의 주세요.</p>
            </div>
            <Footer/>
        </Div>
    )
}

const Div = styled.div`
width: 350px;
margin:80px auto;
height: 400px;
min-height: 600px;
text-align: center;
`;

export default ShowEmail
