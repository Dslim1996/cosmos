import React from "react";
import "./css/Footer.css"

function Footer(){
    return(
        <>
        <div className="footer-wapper">
            <div className="footerfirst">
                <ul>
                    <li>고객서비스</li>
                    <li>배송 정보</li>
                    <li>반품 및 환불</li>
                    <li>지속가능성</li>
                    <li>제품 관리</li>
                    <li>결제 정보</li>
                </ul>
                <ul>
                    <li>매장찾기</li>
                    <li>채용 정보</li>
                    <li>프레스 문의</li>
                    <li>고객 문의</li>
                </ul>
                <ul>
                    <li>Kakaotalk</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Pinterest</li>
                </ul>
            </div>
            
            <div className="footersecond">
                <p>이용약관</p>
                <p>개인정보처리방침</p>
                <p>임대승 컨테이너</p>
                <p>cosmos 온라인 스토어는</p>
                <p>임대승 컨테이너을 이용하고 있습니다.</p>
                <br></br>
                <p>주식회사 중앙정보원 대표이사 : 중앙정보처리학원</p>
                <p>사업자등록번호:010-1111-2222 통신판매업신고:20213023-231932</p>
            </div>
            </div>
       </>
    );

}
export default Footer;