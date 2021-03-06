import React, { useEffect, useState } from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import ApiService from '../../ApiService';
import UserAccount from './InsertUserAccount';
import UpdateUserAccount from './UpdateUserAccount';
import InsertUserAccountPAY from './InsertUserAccountPAYComponent';
import UpdateUserRepay from './UpdateUserRepay';
import ModalPhone from './ModalUpdatePhoneComponent';
import ModalEmail from './ModalUpdateEmailComponent';
import ModalPassword from './ModalUpdatePasswordComponent';
import ModalAccount from './ModalUpdateAccountComponent';
import ModalSNS from './ModalUpdateSNSComponent';
import ModalDeleteUser from './ModalDeleteUserComponent';
import { withRouter } from 'react-router-dom';
import ApiServiceLogin from '../../Login/ApiServiceLogin';

function MemberInfoComponent(props) {

    const [change_email, setchange_email] = useState(null);
    const [change_phone, setchange_phone] = useState(null);
    const [change_password, setchange_password] = useState(null);
    const [user_email, setuser_email] = useState(props.user.user_email);
    const [user_account, setuser_account] = useState('');
    const [updateUserAccount, setUpdateUserAccount] = useState(false);
    const [user_name, setuser_name] = useState(props.user.user_name);

    const [open, setOpen] = useState(false);
    const [openChangePhone, setOpenChangePhone] = useState(false);
    const [openChangePassword, setOpenChangePassword] = useState(false);
    const [openUserAccountInsert, setOpenUserAccountInsert] = useState(false);
    const [openUserSNSConnect, setOpenUserSNSConnect] = useState(false);
    const [openUserDelete, setOpenUserDelete] = useState(false);
    const [openReCheckUserDelete, setOpenReCheckUserDelete] = useState(false);
    const [openInsertUserAccountPAY, setOpenInsertUserAccountPAY] = useState(false);
    const [openUpdateUserRepay, setOpenUpdateUserRepay] = useState(false);

    const [man, setman] = useState(false);
    const [woman, setwoman] = useState(false);

    const Change_user = {
        user_email : user_email,
        change_email : change_email,
        change_phone : change_phone,
        change_password : change_password,
    }

    useEffect(() => {
        ApiService.userAccount(user_email)
            .then( res => {
                setuser_account(res.data);
                // console.log("man :"+man);
                // console.log("woman : "+woman);
                checkGender()
            })
            .catch(err => {
                console.log('user_account print error!', err);
            })
    },[open, openChangePhone, openChangePassword, openUserAccountInsert, openUserSNSConnect, openUserDelete, openReCheckUserDelete, openInsertUserAccountPAY, openUpdateUserRepay]);


   

    // ???????????? ??????
    function updateButton(){
        // console.log(Change_user);
        ApiService.updateUserInfo(Change_user);
        // alert('???????????? ??????');
        props.setState(10);
        handleClose();
    };

    // ?????????, ????????? ??????, ???????????? ????????? ?????? set??? ???????????? ??????, ?????? set??? ?????? ????????? ?????? ????????? null????????? ????????????.
    // ?????? ??????????????? ???????????? ?????? ????????? ????????? ????????? ?????? ???????????? ???????????? ???????????? null??? ????????????
    function onChange(e){
        if(e.target.name === "change_email"){
            setchange_phone(null);
            setchange_password(null);
            setchange_email(e.target.value);
        }else if(e.target.name === "change_phone"){
            setchange_email(null);
            setchange_password(null);
            setchange_phone(e.target.value);
        }else if(e.target.name === "change_password"){
            setchange_email(null);
            setchange_phone(null);
            setchange_password(e.target.value);
        }
    }


    // ??????
    const useStyles = makeStyles((theme) => ({
        modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        paper: {
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          borderRadius:'10px'
        },
      }));


    const classes = useStyles();


    const handleOpen = (e) => {
        if(e.target.name === "change_email"){
            setOpen(true);
        }else if(e.target.name === "change_phone"){
            setOpenChangePhone(true);
        }else if(e.target.name === "change_password"){
            setOpenChangePassword(true);
        }else if(e.target.name === "user_delete"){
            setOpenUserDelete(true);
        }else if(e.target.name === "recheck_user_delete"){
            setOpenReCheckUserDelete(true);
        }else if(e.target.name === "user_account_insert"){
            setOpenUserAccountInsert(true);
        }else if(e.target.name === "user_sns_connect"){
            setOpenUserSNSConnect(true);
        }   
        props.setState(2);
    };
    
    const handleClose = (e) => {
        
        // ????????? ?????? ?????? ?????????
        setOpen(false);

        // ????????? ?????? ?????? ?????? ?????????
        setOpenChangePhone(false);
        
        // ???????????? ?????? ?????? ?????????
        setOpenChangePassword(false);
        
        // ?????? ?????? ?????? ?????????
        setOpenUserAccountInsert(false);

        // ?????? ?????? ?????? ????????? 1
        setUserAccount01(false);

        // ?????? ?????? ?????? ?????????
        setOpenUserDelete(false);

        // ?????? ?????? ?????? ?????? ?????? ?????????
        setOpenReCheckUserDelete(false);
        
        // SNS?????? ?????? ?????? ?????????
        setOpenUserSNSConnect(false);

        // ??????????????? ?????? ?????? ?????? ?????????
        setUpdateUserAccount(false);

        setOpenInsertUserAccountPAY(false);

        setOpenUpdateUserRepay(false);

        props.setState(10);
    };


    // ???????????? ????????? ??? ?????? ??????
    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            updateButton();
            handleClose();
        }
    }

    function checkGender(){
        if(props.user.user_gender === "M"){
            setman(true);
        }else{
            setwoman(true);
        }
    }

    const [userAccount01, setUserAccount01] = useState(false);

    // ?????? ?????? ?????? ?????? ????????? ??? onoff??????
    function openAccountButton(){
        if(user_account.user_bank !== '' && user_account.user_bank !== null){
            alert('?????? ????????? ????????? ????????????.');
        }else{
            setUserAccount01(true);
        }
    }

    // ?????? ?????? ?????? ??????
    function deleteUser(){
        alert('???????????? ????????? ??????????????????.');
        ApiService.deleteUserInfo(Change_user)
        .then(res => {
            ApiServiceLogin.lotout(sessionStorage.getItem("user")) 
            handleClose();
            sessionStorage.removeItem("user");    
            props.history.push('/');
            window.location.reload(); // ????????? ???????????? ?????????????????????
        })
       

    }

    function update_user_account(){
        setUpdateUserAccount(true);
    }

    function update_user_repay(){
        setOpenUpdateUserRepay(true);
    }

    function insertUserRepay(){
        if(user_account.user_repay !== '' && user_account.user_repay !== null){
            alert('?????? ????????? ????????? ????????????.');
        }else{
        setOpenInsertUserAccountPAY(true);
       }
    }



    return (
        <>
           <Grid item xs={6} sm={8}>
                    <div style={{fontSize:'13px', textAlign:'left'}}>??????????????????</div>
                    <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'20px 0px 20px 0px', paddingBottom:'0px'}}/>

                    <div style={centerDiv}>
                        <div style={centerDivBetween}>
                            <div style={centerLabel}>????????? ??????</div>
                            {/* <div><button name="change_email" onClick={handleOpen} style={{border:'0px', fontSize:'12px', borderRadius:'0px', color:'gray', backgroundColor:'white'}}>????????????</button></div> */}
                        </div>

                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={user_email}></input></div>
                    </div>

                    <div style={centerDiv}>
                        <div style={centerLabel}>??????</div>
                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={user_name}></input></div>
                    </div>

                    <div style={centerDiv}>
                        <div style={centerLabel}>????????????</div>
                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={props.user.user_birthday}></input></div>
                    </div>

                    <div style={centerDiv}>
                        <div style={centerDivBetween}>
                            <div style={centerLabel}>???????????????</div>
                            <div><button name="change_phone" onClick={handleOpen} style={{border:'0px', fontSize:'12px', borderRadius:'0px', color:'gray', backgroundColor:'white'}}>????????????</button></div>
                        </div>
                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={props.user.user_phone}></input></div>
                    </div>

                    <div style={centerDiv}>
                        <div style={centerDivBetween}>
                            <div style={centerLabel}>????????????</div>
                            <div><button name="change_password" onClick={handleOpen} style={{border:'0px', fontSize:'12px', borderRadius:'0px', color:'gray', backgroundColor:'white'}}>????????????</button></div>
                        </div>
                    </div>

                    <div style={{fontSize:'13px', textAlign:'left', marginTop:'50px'}}>????????????(??????)</div>
                    <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'20px 0px 20px 0px', paddingBottom:'0px'}}/>

                    {/* {checkGender()} */}
                    <div style={centerDiv}>
                        <div style={centerLabel}>??????</div>
                        <div style={{fontSize:'14px', marginTop:'10px', justifyContent:'left', display:'flex'}}>
                            <input type='radio' name='gender' value='M' checked={man} disabled /> ??? 
                            <input type='radio' name='gender' value='W' checked={woman} disabled /> ???
                        </div>
                    </div>

                    <div style={spaceBetween}><span>????????????/???????????????</span> <span><button name="user_account_insert" onClick={handleOpen} style={{border:'0px', fontSize:'12px', borderRadius:'0px', color:'gray', backgroundColor:'white'}}>?????????</button></span></div>
                    <hr style={bottomHr}/>
{/* 
                    <div style???={spaceBetween}><span>???????????? ????????????</span> <span><button name="user_sns_connect" onClick={handleOpen} style={{border:'0px', fontSize:'12px', borderRadius:'0px', color:'gray', backgroundColor:'white'}}>?????????</button></span></div>
                    <hr style={bottomHr}/> */}

                    <div style={spaceBetween}><span>????????????</span> <span><button name="user_delete" onClick={handleOpen} style={{border:'0px', fontSize:'12px', borderRadius:'0px', color:'gray', backgroundColor:'white'}}>??????</button></span></div>
                    <hr style={bottomHr}/>

                    <div style={{marginBottom:'80px'}}></div>
                    

                </Grid>

                        <ModalEmail open={open} handleClose={handleClose} onChange={onChange} onKeyPress={onKeyPress} updateButton={updateButton} />

                        <ModalPhone openChangePhone={openChangePhone} handleClose={handleClose} onChange={onChange} onKeyPress={onKeyPress} updateButton={updateButton} />

                        <ModalPassword openChangePassword={openChangePassword} handleClose={handleClose} onChange={onChange} onKeyPress={onKeyPress} updateButton={updateButton} />
                    
                        <ModalAccount user_name={user_name} openUserAccountInsert={openUserAccountInsert} user_email={user_email} user_account={user_account} centerDivBetween={centerDivBetween} openAccountButton={openAccountButton} updateUserAccount={updateUserAccount} UpdateUserAccount={UpdateUserAccount} openUpdateUserRepay={openUpdateUserRepay} UpdateUserRepay={UpdateUserRepay} openInsertUserAccountPAY={openInsertUserAccountPAY} InsertUserAccountPAY={InsertUserAccountPAY} userAccount01={userAccount01} UserAccount={UserAccount} handleClose={handleClose} onChange={onChange} onKeyPress={onKeyPress} updateButton={updateButton} update_user_account={update_user_account} insertUserRepay={insertUserRepay} update_user_repay={update_user_repay} />

                        <ModalSNS openUserSNSConnect={openUserSNSConnect} handleClose={handleClose} />

                        <ModalDeleteUser openUserDelete={openUserDelete} handleClose={handleClose} handleOpen={handleOpen} openReCheckUserDelete={openReCheckUserDelete} deleteUser={deleteUser} />
                 
        </>
    )    
}

const centerDivBetween = {
    display:'flex', justifyContent:'space-between'
}

const centerDiv = {
    marginTop:'25px'
}

const centerLabel = {
    fontSize:'13px', textAlign:'left', color:'#999999'
}

const centerInput = {
    border:'0px', backgroundColor:'white', textAlign:'left', fontSize:'12px'
}

const centerInfo = {
    fontSize:'11px', textAlign:'left', color:'#999999', maxWidth:'270px'
}

const spaceBetween = {
    fontSize:'13px', marginTop:'40px', display:'flex', justifyContent:'space-between'
}

const bottomHr = {
    height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'8px 0px 30px 0px', paddingBottom:'0px'
}

export default withRouter(MemberInfoComponent)
