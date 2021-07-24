import React from 'react'
function ManagerSidebar({productInsertOpen,productListOpen,userListOpen,userStatusOpen,orderStatusOpen,cancleOrderOpen}) {
    return (
        <div className="manager-sidebar">
            <div style = {{position: "-webkit-sticky", position: "sticky", top: "90px"}}>
                <ul>
                    <butten className='sidebarBtn' onClick={()=>productInsertOpen()}><li>상품등록</li></butten>
                    <butten className='sidebarBtn' onClick={()=>productListOpen()}><li>상품목록</li></butten>
                    <butten className='sidebarBtn' onClick={()=>orderStatusOpen()}><li>주문현황</li></butten>
                    <butten className='sidebarBtn' onClick={()=>cancleOrderOpen()}><li>취소요청</li></butten>
                    <butten className='sidebarBtn' onClick={()=>userListOpen()}><li>유저목록</li></butten>
                    <butten className='sidebarBtn' onClick={()=>userStatusOpen()}><li>유저현황</li></butten>
                </ul>
            </div>
        </div>
    )
}

export default ManagerSidebar
