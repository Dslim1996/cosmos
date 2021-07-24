import React from 'react';
import {Button, makeStyles, Modal, Backdrop, Fade} from '@material-ui/core';
import { useEffect,useState,useRef } from 'react'
import ApiService from "../ApiServiceChu";
import ChatMain from "../Chatcomponent/ChatMain";

function ModalUpdateEmailComponent(props) {

    // 모달
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

    return (
        <div>
            {/* 휴대전화번호 변경 모달 */}
            <Modal
                className={classes.modal}
                open={props.open}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
            >
                <Fade in={props.open}>
                    <div className={classes.paper}>
                        <ChatMain />
                    </div>
                    </Fade>
            </Modal>
        </div>
    )
}


export default ModalUpdateEmailComponent
