
import {Button,Grid} from '@material-ui/core';
import ApiService from '../ApiServiceChu';
import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { Link,useHistory } from 'react-router-dom';


const OrderMain=()=>{
    const [userInfo,setUserInfo] = useState({
        user_email:"",
        user_name:"",
        user_phone:""
    });
    const imgUrl = "/imgs/";
    const [radioStatus,setRadioStatus] = useState("option1");
    const [addresses,setAddresses] = useState([]);
    const [innerRadioStatus,setInnerRadioStatus] = useState(0);
    const [carts,setCarts] = useState([]);


    let order={
        userId:"",
        userName:"",
        address:"",
        detailAddress:"",
        postCode:"",
        orderProductAmount:0,
        orderName:""
    }
    

    useEffect(()=>{
        reloadAddress();
        reloadOrderList();
        reloadUserInfo();
    },[]);

    const changeRadio = (e)=>{
        setRadioStatus(e.target.value);
    }
    const changeInnerRadio = (e)=>{
        setInnerRadioStatus(e.target.value);
        console.log('setInnerRadioStatus', innerRadioStatus);
    }

    const reloadAddress = () =>{
        ApiService.showAddressList()
            .then(res => {
                setAddresses(res.data);
                console.log('setSddresses',res.data);
            })
            .catch(err => {
                console.log('reloadAddressList() Error!',err);
            })
    }

    const reloadOrderList = () =>{
        ApiService.showCartList()
            .then(res => {
                setCarts(res.data);
                console.log('setCarts',res.data);
                order={
                    userId:carts[0]?.userId,
                    orderName:carts[0]?.productName
                }
                console.log('order',order);
            })
            .catch(err => {
                console.log('reloadBoardList() Error!',err);
            })
        }
    
    const reloadUserInfo=()=>{
        ApiService.showUserInfo()
            .then(res=>{
                setUserInfo(res.data);
                console.log('setUserInfo',res.data);
            })
            .catch(err => {
                console.log('reloadUserInfo() Error!',err);
            })
    }

    const kakaoPay = ()=>{
        ApiService.kakaoPay()
        .then(res=>{
            window.location.replace(res.data);

        })
        .catch(
            console.log("오류 발생")
        )
    }
    
    const submitOrderInfo=()=>{
        
        console.log(order)
        order={
            postCode:addresses[innerRadioStatus].postCode,
            userName:addresses[innerRadioStatus].userName,
            address:addresses[innerRadioStatus].address,
            detailAddress:addresses[innerRadioStatus].detailAddress,
            orderProductAmount:carts.length,
        }
        console.log(order)
        

        ApiService.addOrderInfo(order)
        .catch(err=>{
            console.log("addOrderInfo 에러",err);
        });
    }
    const submitSomeThing=()=>{
        submitOrderInfo();
        kakaoPay();
    }


    
    return(
        <div  style={{marginTop:'80px', justifyContent:'center',fontSize:'13px', color:'gray', minHeight:'800px'}}>
            <div style={{fontSize:'13px',textAlign:"center",marginTop:"50px",marginBottom:'20px'}}>주문서</div>
                <hr style={{border:'0px', height:'1px', backgroundColor:'lightgray'}}/>
                <div style={{display:'flex'}}>
                <Grid item xs={6} sm={7}>            
                <div className="oderList">
                    {carts.map((cart,index) =>
                    <div key={cart.cartId}>

                        <div style={{display:'flex', justifyContent:'space-between'}}>
                        
                            <div>
                                <img src={imgUrl+(cart.productImagePath).split(',')[0]}/>
                            </div>

                            <div style={{marginLeft:'15px', width:'100%'}}>
                                <p>{cart.productName}</p>
                                <p>{cart.productPrice}</p>
                                <div style={{marginTop:'20px', display:'flex'}}>
                                    <div style={{width:'80px'}}>사이즈</div><div>{cart.productSize}</div>
                                </div>

                                <div style={{marginTop:'5px',display:'flex'}}>
                                    <div style={{width:'80px'}}>색상</div><div>{cart.productColor}</div>
                                </div>

                                <div style={{marginTop:'5px', display:'flex', alignItems:'center'}}>
                                    <div style={{width:'80px'}}>수량</div>
                                    <p> 
                        
                                    {cart.amount}
                                    
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr style={{border:'0px', height:'1px', backgroundColor:'lightgray'}}/> 
                    </div>
                    )}
                </div>
            </Grid>
            </div>
            <div className="order_user">
                <p>1.주문 고객 정보</p>
                <hr style={{border:'0px', height:'1px', backgroundColor:'lightgray'}}></hr>
                <div style={{marginTop:'20px', display:'flex'}}>
                    <div style={{marginLeft:"30px",width:'60px'}}>아이디</div><div>{userInfo.user_email}</div>
                </div>
                <div style={{marginTop:'20px', display:'flex'}}>
                    <div style={{marginLeft:"30px",width:'60px'}}>성함</div><div>{userInfo.user_name}</div>
                </div>
                <div style={{marginTop:'20px', display:'flex'}}>
                    <div style={{marginLeft:"30px",width:'60px'}}>번호</div><div>{userInfo.user_phone}</div>
                </div>
            </div>
            <hr style={{border:'0px', height:'1px', backgroundColor:'lightgray'}}></hr>
            <div className="adress_info">
                <p style={{marginLeft:"20px"}}>2.배송지 정보</p>
                <hr style={{border:'0px', height:'1px', backgroundColor:'lightgray'}}></hr>
                <div className="address_radio" style={{marginLeft:"10px"}}>
                    <label style={{marginLeft:"20px",width:'60px'}}>
                    <input type="radio"
                    value="option1"
                    checked={radioStatus=="option1"}
                    onChange={changeRadio}/>
                    배송지 목록
                    </label>
                    <label style={{marginLeft:"20px",width:'60px'}}>
                    <input type="radio"
                    value="option2"
                    checked={radioStatus=="option2"}
                    onChange={changeRadio}/>
                    새로 입력
                    </label>
                </div>
                <hr style={{border:'0px', height:'1px', backgroundColor:'lightgray'}}></hr>
                <div style={radioStatus=="option1"?{}:{display:"none"}} >
                    <div className="addressListRadio" >
                        {addresses.map((address,index) =>
                            <label key={index} style={{marginLeft:"25px",width:'60px'}}>
                            <input type="radio"
                            value={index}
                            checked={innerRadioStatus==index}
                            onChange={changeInnerRadio}/>
                            {index+1}번 배송지
                            </label>
                        )}
                      </div>
                      <hr style={{border:'0px', height:'1px', backgroundColor:'lightgray'}}></hr>
                      <div>
                      {addresses.map((address,index)=>
                      <div style={innerRadioStatus==index?{marginLeft:"10px"}:{display:"none"}}>
                            <div style={{marginTop:'20px', display:'flex'}}>
                                <div style={{marginLeft:"20px",width:'70px'}}>수신자</div><div>{address.userName}</div>
                            </div>
                            <div style={{marginTop:'20px', display:'flex'}}>
                                <div style={{marginLeft:"20px",width:'70px'}}>우편번호</div><div>{address.postCode}</div>
                            </div>
                            <div style={{marginTop:'20px', display:'flex'}}>
                                <div style={{marginLeft:"20px",width:'70px'}}>주소</div><div>{address.address}</div>
                            </div>
                            <div style={{marginTop:'20px', display:'flex'}}>
                                <div style={{marginLeft:"20px",width:'70px'}}>상세주소</div><div>{address.detailAddress}</div>
                            </div>
                        </div>
                        )}
                      </div>
                </div>
                <div style={radioStatus=="option2"?{}:{display:"none"}}>
                    <p>김영한</p>
                    <p>010-3227-2759</p>
                    <p>여의도대방로 158번길 29</p>
                </div>
                <hr style={{border:'0px', height:'1px', backgroundColor:'lightgray'}}></hr>
            </div>
            <div className="payAPI" >

                <Button onClick={submitSomeThing} variant="contained" style={{backgroundColor:'#444', width:'100%', height:'40px', borderRadius:'0px', marginBottom:'10px', boxShadow:'none', fontSize:'13px', color:'white'}}>결제하기</Button>
            </div>

        </div>
    );

}

export default OrderMain;