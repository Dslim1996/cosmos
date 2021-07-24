import axios from 'axios';

const USER_API_BASE_URL =  "http://13.125.40.117:8080/cosmos";
 class APIService {

    // 로그인
    postLogin(user){
        return axios.post(USER_API_BASE_URL+'/signIn', user);
    }

    //이메일 찾기
    findEmail(user){
        return axios.post(USER_API_BASE_URL+'/findEmail',user);
    }

    //비밀번호 찾기
    findPW(user){
        return axios.post(USER_API_BASE_URL+'/findPW',user);
    } 
    
    //세션 체크
    checkSession(){
        return axios.get(USER_API_BASE_URL+'/checkSession');
    }

    //로그아웃 
    lotout(userEmail){
        return axios.get(USER_API_BASE_URL+'/signOut/'+userEmail);
    }

 
}

export default new APIService();
