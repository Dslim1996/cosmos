package com.shopping.cosmos.cart.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.shopping.cosmos.cart.domain.ChatVO;
import com.shopping.cosmos.cart.mapper.ChatMapper;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class ChatServiceImpl implements ChatService{
    private ChatMapper chatMapper;
    @Override
    public List<ChatVO> listChat(String fromEmail, String toEmail) {
        List<ChatVO> list = chatMapper.listChat(fromEmail,toEmail);
        for(int i=0;i<list.size();i++){
            if(list.get(i).getFromEmail().equals(fromEmail)) {
                list.get(i).setUserStatus("나");
            }
            else{
                list.get(i).setUserStatus("상대방");
            }
        }
        return list;
    }

    @Override
    public List<ChatVO> listChatRecent(String fromEmail, String toEmail, int chatId) {
        return chatMapper.listChatRecent(fromEmail,toEmail,chatId);
    }

    @Override
    public int submitChat(String fromEmail, String toEmail, String chatContent) {
        return chatMapper.submitChat(fromEmail,toEmail,chatContent);
    }

    @Override
    public List<ChatVO> getBox(String userEmail) {
        List<ChatVO> list = chatMapper.messageBoxList(userEmail);
        System.out.println(list.size());

        for (int i=0;i<list.size();i++){
            ChatVO x = list.get(i);
            for(int j=0;j<list.size();j++){
                ChatVO y = list.get(j);
                if(x.getFromEmail().equals(y.getToEmail())&&x.getToEmail().equals(y.getFromEmail())){
                    if(x.getChatId()<y.getChatId()){
                        list.remove(x);
                        i--;
                        break;
                    }
                    else{
                        list.remove(y);
                        j--;
                    }
                }

            }
        }
        return list;
    }
}

