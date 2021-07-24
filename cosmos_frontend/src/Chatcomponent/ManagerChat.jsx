import React, { useEffect,useState,useRef,useCallback,useSelector } from 'react'
import { Link,RouteComponentProps } from 'react-router-dom';
import { Table, TableBody, FormControl, TableHead, TableRow, Button, Typography } from '@material-ui/core';
import ApiService from "../ApiServiceChu";

const ManagerChat=()=>{
    const [chatBoxs,setchatBoxs] = useState([]);

    const [userInfo,setUserInfo] = useState({
        user_email:"",
        user_role:1
    });

    useEffect(()=>{
        reloadUserInfo();
        reloadChatBoxList();
    },[]);

    const reloadChatBoxList = () =>{
        ApiService.showChatBox()
            .then(res => {
                setchatBoxs(res.data);
            })
            .catch(err => {
                console.log('reloadBoardList() Error!',err);
            })
        }

    const reloadUserInfo=()=>{
        ApiService.showUserInfo()
            .then(res=>{
                setUserInfo(res.data);
            })
            .catch(err => {
                console.log('reloadUserInfo() Error!',err);
            })
    }

    return(
        <div>
            <div style={sessionStorage.getItem("user_role")==1?{textAlign:"center",marginTop:"100px",marginBottom:'500px'}:{display:"none"}}>
            <div style={{marginTop:"100px",marginBottom:"50px"}}>실시간 상담 채팅 목록</div>
            <div className="boxlistget">
                        {chatBoxs.map((chatBox,index) =>
                            <div key={chatBox.chatId} style={{marginBottom:"30px"}}>
                                <Link to={userInfo.user_email==chatBox.fromEmail?chatBox.toEmail:chatBox.fromEmail} style={{textDecoration: 'none',fontSize:'20px'}}>
                                <tr>
                                    <td style={{width:"150px"}}><h5>{userInfo.user_email==chatBox.fromEmail?chatBox.toEmail:chatBox.fromEmail}</h5></td>
                                    <td style={{width:"150px"}}><h5>{chatBox.chatContent}</h5></td>
                                    <td><div className="pull-right" style={{flex:"right",width:"200px"}}>{chatBox.chatTime}</div>
                                    </td>                 
                                </tr>
                                </Link>
                                
                            </div>
                        )}
                      </div>
                    
            </div>
            <div className="nullOuath" style={sessionStorage.getItem("user_role")==1?{display:"none"}:{textAlign:"center",marginTop:"100px",marginBottom:'500px'}}>
                    <div style={{marginBottom:"20px"}}>권한이 없습니다.</div>
                    <Link to="/" style={{textDecoration: 'none',fontSize:'13px'}}>
                                    <Button >홈으로 되돌아가기</Button>
                    </Link>
                </div>

        </div>

    );
}
export default ManagerChat;