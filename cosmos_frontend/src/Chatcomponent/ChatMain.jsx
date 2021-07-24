import React, { useEffect,useState,useRef,useCallback,useSelector } from 'react'
import { Link,RouteComponentProps } from 'react-router-dom';
import { Table, TableBody, FormControl, TableHead, TableRow, Button, Typography } from '@material-ui/core';
import ApiService from "../ApiServiceChu";
const ChatMain=({match})=>{
    // const {search} = props.location;
    // const toEmail=search.split("=")[1];
    const toEmail = match.params.toEmail
    const [chatContent,setChatContent] = useState("");
    const [chats,setChats] = useState([]);
    const [x,setX] = useState(0);
    const scrollRef = useRef();


    const scrollToBottom = ()=>{
        const { scrollHeight, clientHeight } = scrollRef.current;
        scrollRef.current.scrollTop = scrollHeight - clientHeight;
    }

    useEffect(() => {
        const interval = setInterval(() => {
           reloadChatList();
        }, 3000);
        // This is important, you must clear your interval when component unmounts
        return () => clearInterval(interval);
     }, [])  // [] is for to execute `useEffect` only once as `componentWillMount`



    const chatInput = useRef();

    useEffect(()=>{
    reloadChatList();
    },[]);
    useEffect(()=>{
    scrollToBottom();
    },[x])

    

    const handleChatContent=(e)=>{
        setChatContent(e.target.value);
        
    }
    const reloadChatList = () =>{
        console.log(toEmail)
        ApiService.showChatList(toEmail)
            .then(res => {
                setChats(res.data);
            })
            .catch(err => {
                console.log('reloadChatList() Error!',err);
            })
        }

    const submitChat=(e)=>{
        let chatSubmit={
            toEmail,
            chatContent
        }
        console.log(toEmail);
        ApiService.submitChat(chatSubmit)
        .then(
            chatInput.current.value="",
            setX(x+1)
        )
        
    }


    return(
        <div style={{marginTop:"30px"}}>
            <h3 style={{marginTop:"30px",marginBottom:"20px",marginLeft:"20px"}}>채팅</h3>
            <div ref={scrollRef} className="cartlistget" style={{overflowY:"auto",width:"600px",height:"800px"}}>
                        {chats.map((chat,index) =>
                            <div key={chat.chatId}>
                                <div className="media">
                                    <a className="pull-left" href="#">
                                        <img className="media-object-img" src="images/icon.png" alt=""/>
                                    </a>
                                    <div className="media-body" style={{marginLeft:"10px"}}>
                                        <h4 className="media-heading">
                                            {chat.userStatus}
                                            <span className="small-pull-right" style={{float:"right"}}>
                                                {chat.chatTime}
                                            </span>
                                        </h4>
                                        <p style={{marginTop:"30px"}}>{chat.chatContent}</p>
                                    </div>
                                </div>
                                <hr></hr>
                            </div>
                        )}
            </div>
            <div style={{marginBottom:"20px",marginLeft:"20px"}}>
                
                    <input name="" type="text" placeholder="내용 입력" onChange={handleChatContent} ref={chatInput}/>
                    <Button onClick={submitChat}>전송</Button>
               
            </div>

        </div>
    );
}
export default ChatMain;