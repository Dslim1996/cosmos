package com.shopping.cosmos.cart.controller;

import com.shopping.cosmos.cart.service.ChatService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.shopping.cosmos.cart.domain.ChatVO;

import javax.servlet.http.HttpSession;
import java.util.List;


//@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600, allowCredentials = "true")
@RestController
@AllArgsConstructor
@RequestMapping("/chat")
public class ChatController {
    ChatService chatService;

    @PostMapping("/submit")
    public void chatSubmit(@RequestBody ChatVO vo,HttpSession session){
        String userId = (String) session.getAttribute("user_email");
        int temp=0;
        vo.setFromEmail(userId);
        vo.setChatTime("ef");
        System.out.println(vo);
        if(vo.getFromEmail()==null || vo.getFromEmail().equals("")
                || vo.getToEmail()==null || vo.getToEmail().equals("")
                || vo.getChatContent()==null || vo.getChatContent().equals("")
        ){
            System.out.println("채팅이 비어있습니다.");
        }
        else{
            System.out.println("채팅을 제출합니다.");
            System.out.println(vo.getFromEmail());
            System.out.println(vo.getChatContent());
            System.out.println(vo.getToEmail());
            temp=chatService.submitChat(vo.getFromEmail(),vo.getToEmail(),vo.getChatContent());
        }

    }

    @GetMapping("/list{id}")
    public List<ChatVO> chatList(@PathVariable(name="id") String toEmail, HttpSession session){
        String userId=(String) session.getAttribute("user_email");
        String fromEmail = userId;
        return chatService.listChat(fromEmail,toEmail);
    }

    @GetMapping("/messageboxlist")
    public List<ChatVO> messageBoxList(HttpSession session){
        String userId=(String) session.getAttribute("user_email");

        return chatService.getBox(userId);

    }

}