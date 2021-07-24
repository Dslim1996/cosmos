import React from 'react'

function UpdateComponent({ products, onTitle, onPrice, onMaterial, selectGender,
    selectCategory, tablePlus, tableMinus, onColor, onSize, onStock, onContent }) {
    //ProductUpdate에서 사용
    return (
        <>
        <button onClick={()=>console.log(products)}></button>
            <div className="product_update_catagoryBox">
                <label className="product_update_label">상품 제목</label>
                <input className="product_update_input" onChange={onTitle} placeholder={products[0].product_title} />
            </div>

            <div className="product_update_catagoryBox">
                <label className="product_update_label">상품가격</label>
                <input className="product_update_input" onChange={onPrice} placeholder={products[0].product_price} />
            </div>

            <div className="product_update_catagoryBox">
                <label className="product_update_label">상품재질</label>
                <input className="product_update_input" onChange={onMaterial} placeholder={products[0].product_material} />
            </div>

            <div className="product_update_rowBox">
                <div className="product_update_genderCategory">
                    <p style={{ marginBottom: '10px', fontWeight: '600' }}>성별</p>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <select className='genderCategory_selectbox' onChange={selectGender} defaultValue={products[0].product_gender} >
                            <option value={products[0].product_gender}>{products[0].product_gender}</option >
                            <option value="M">MAN</option >
                            <option value="W">WOMAN</option >
                            <option value="KIDS">KID</option>
                        </select>
                    </div>
                </div>

                <div className="product_update_genderCategory">
                    <p style={{ marginBottom: '10px', fontWeight: '600' }}>종류</p>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <select className='genderCategory_selectbox' onChange={selectCategory} defaultValue={products[0].product_category} >
                            <option value={products[0].product_category}>{products[0].product_category}</option>
                            <option value="아우터">아우터</option>
                            <option value="티셔츠">티셔츠</option>
                            <option value="셔츠">셔츠</option>
                            <option value="원피스">원피스</option>
                            <option value="바지">바지</option>
                            <option value="치마">치마</option>
                            <option value="악세사리">악세사리</option>
                            <option value="모지">모자</option>
                            <option value="신발">신발</option>

                        </select>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', width: '100%', marginBottom: '10px' }}>
                <button className='optionPage' style={{ marginTop: '5px', width: '94%' }} onClick={tablePlus}>옵션추가</button>
            </div>
            <div className="product_update_catagoryBox">
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    {products.map((product, index) =>
                        <>
                            <div className="categoryWapper">
                                <div className="catagoryBox" >
                                    <p style={{ marginBottom: '10px', fontWeight: '600', textAlign: 'left' }}>색상</p>
                                    <button className='optionPageBtn' onClick={() => tableMinus(products[index].product_seq)}>삭제</button>
                                </div>
                                <select className='update_selectbox' onChange={(e) => onColor(e, index)} defaultValue={product.product_color} >
                                    <option value={product.product_color}>{product.product_color}</option >
                                    <option style={{backgroundColor:'BLACK',color:'white',marginBottom:'5px'}} value="BLACK">BLACK</option >
                                            <option style={{backgroundColor:'GRAY',color:'white',marginBottom:'5px'}} value="GRAY">GRAY</option >
                                            <option style={{backgroundColor:'Silver',color:'white',marginBottom:'5px'}} value="Silver">Silver</option >
                                            <option style={{backgroundColor:'DarkRed',color:'white',marginBottom:'5px'}} value="DarkRed">DarkRed</option >
                                            <option style={{backgroundColor:'FireBrick',color:'white',marginBottom:'5px'}} value="FireBrick">FireBrick</option >
                                            <option style={{backgroundColor:'RED',color:'white',marginBottom:'5px'}} value="RED">RED</option >
                                            <option style={{backgroundColor:'WHITE',color:'black',marginBottom:'5px'}} value="WHITE">WHITE</option >
                                            <option style={{backgroundColor:'BLUE',color:'white',marginBottom:'5px'}} value="BLUE">BLUE</option >
                                            <option style={{backgroundColor:'SkyBlue',color:'white',marginBottom:'5px'}} value="SkyBlue">SkyBlue</option >
                                            <option style={{backgroundColor:'Gold',color:'black',marginBottom:'5px'}} value="Gold">Gold</option >
                                            <option style={{backgroundColor:'YELLOW',color:'black',marginBottom:'5px'}} value="YELLOW">YELLOW</option >
                                            <option style={{backgroundColor:'Khaki',color:'black',marginBottom:'5px'}} value="Khaki">Khaki</option >
                                </select>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="product_update_catagoryBox">
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {products.map((product, index) =>
                        <div className="catagory_size_stock" >
                            <p style={{ marginBottom: '10px', fontWeight: '600', textAlign: 'left' }}>사이즈</p>
                            <select className='update_selectbox' onChange={(e) => onSize(e, index)} defaultValue={product.product_size} >
                            <option value={product.product_size}>{product.product_size}</option >
                                <option value="XS">XS</option >
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="FREE">FREE</option>
                            </select>
                        </div>
                    )}
                </div>
            </div>
            <div className="product_update_catagoryBox">
                <div style={{ display: 'flex', flexDirection: 'row'}}>
                    {products.map((product, index) =>
                        <div className="catagory_size_stock" >
                            <p style={{ marginBottom: '10px', fontWeight: '600', textAlign: 'left' }}>재고</p>
                            <input className="product_update_stock" onChange={(e) => onStock(e, index)} placeholder={product.product_stock} />
                        </div>
                    )}
                </div>
            </div>
            <p style={{ marginBottom: '10px', fontWeight: '600' }}>상품 내용</p>
            <div className="product_content_scroll">
                <textarea className="product_update_textarea" onChange={onContent} placeholder={products[0].product_content} />
            </div>
        </>
    )
}

export default UpdateComponent
