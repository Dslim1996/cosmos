import axios from 'axios';

const USER_API_BASE_URL = "http://13.125.40.117:8080/";

class ApiServiceChu {

    showCartList(){
        return axios.get(USER_API_BASE_URL + "cart/list/")
    }
    deleteCart(cartId){
        return axios.delete(USER_API_BASE_URL + "cart/" +cartId)
    }
    updateCart(cart){
        return axios.put(USER_API_BASE_URL + "cart/modify",cart)
    }
    showSumMoney(){
        return axios.get(USER_API_BASE_URL + "cart/summoney")
    }
    
    showAddressList(){
        return axios.get(USER_API_BASE_URL + "order/address/")
    }

    showUserInfo(){
        return axios.get(USER_API_BASE_URL + "order/user/")
    }
    
    addOrderInfo(order){
        return axios.post(USER_API_BASE_URL + "order/insert",order)
    }

    kakaoPay(){
        return axios.post(USER_API_BASE_URL + "order/kakaoPay")
    }


    kakaoPayTest(test){
        return axios.get(USER_API_BASE_URL + "order/kakaoPaySuccess"+test)
    }
    
    //채팅 보낸 내용 backend로전송
    submitChat(chat){
        return axios.post(USER_API_BASE_URL + "chat/submit",chat)
    }
    //채팅 내용 가져오기
    showChatList(toEmail){
        return axios.get(USER_API_BASE_URL + "chat/list"+toEmail)
    }
    //채팅 박스 가져오기
    showChatBox(){
        return axios.get(USER_API_BASE_URL + "chat/messageboxlist")
    }



}

export default new ApiServiceChu();
