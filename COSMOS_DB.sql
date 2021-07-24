-- DB 최종 정리

drop table tbl_user;
drop table tbl_address_info;
drop table tbl_product;
drop table tbl_product_option;
drop table tbl_order;
drop table tbl_order_detail;
drop sequence tbl_address_info_seq;
drop sequence tbl_order_details_seq;
drop sequence test1_seq;


CREATE TABLE tbl_product (
	product_seq NUMERIC NOT NULL, -- 상품번호,
	product_id NUMERIC NOT NULL, -- 상품아이디,
	product_title VARCHAR2(100) NOT NULL, -- 상품제목,
	product_price NUMERIC NOT NULL, -- 상품가격,
	product_img VARCHAR2(100) NOT NULL, -- 상품이미지,
	product_size VARCHAR2(100) NULL, -- 상품사이즈,
	product_color VARCHAR2(100) NULL, -- 상품컬러,
	product_gender VARCHAR2(100) NOT NULL, -- 상품성별,
	product_content VARCHAR2(100) NULL, -- 상품내용,
	product_material VARCHAR2(100) NULL, -- 상품재질,
	product_category VARCHAR2(50) NULL, -- 상품카테고리,
	product_date VARCHAR2(30) NULL -- 상품등록날짜
);

-- 상품
ALTER TABLE tbl_product
	ADD CONSTRAINT PK_tbl_product -- 상품 기본키
	PRIMARY KEY (
		product_seq -- 상품번호
	);
    
    
    
-- 상품옵션
CREATE TABLE tbl_product_option (
	product_seq NUMERIC NULL, -- 상품번호,
	product_id NUMERIC NULL, -- 상품아이디,
	product_stock NUMERIC NULL, -- 상품재고,
	product_saled NUMERIC NULL -- 상품판매량
);

ALTER TABLE tbl_product_option
	ADD CONSTRAINT fk_tbl_product_option foreign key(product_seq)-- 상품 기본키
	references tbl_product(product_seq); -- 상품번호;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
-- 주문


create table tbl_order (
    order_id     varchar2(50) not null,
    user_email      VARCHAR2(200) not null,
    post_code varchar2(100) not null,
    address   varchar2(100) not null,
    detail_address varchar2(100) not null,
    order_product_amount number       not null,
    total_price number not null,
    order_status varchar2(20) default '배송준비중',
    order_date   varchar2(50),   
    primary key(order_Id)
);
alter table tbl_order
    add constraint tbl_order_user_email foreign key(user_email)
    references tbl_user(user_email);
alter table tbl_order add pay_info varchar2(100);
update tbl_order set pay_info = '카카오페이';
alter table tbl_order add user_name varchar2(100);
update tbl_order set user_name = '후니택배';

-- 주문 상세



create table tbl_order_detail (
    order_detail_num number not null,
    order_id     varchar2(50) not null,
    product_seq number(20) not null,
    money number       not null,
    amount number not null,
    primary key(order_detail_num)
);

create sequence tbl_order_details_seq;

create sequence tbl_address_info_seq;

create sequence tbl_product_seq;

create sequence tbl_product_option_seq;

alter table tbl_order_detail
    add constraint tbl_order_detail_orderId foreign key(order_Id)
    references tbl_order(order_id);
    
alter table tbl_order_detail
    add constraint tbl_order_detail_product_seq foreign key(product_seq)
    references tbl_product(product_seq);
    
    
    
-- 유저


CREATE TABLE tbl_user (
    user_email VARCHAR2(100) primary key, -- 이메일,
    user_password VARCHAR2(100), -- 비밀번호,
    user_name VARCHAR2(50), -- 이름,
    user_birthday VARCHAR2(100) , -- 생년월일,
    user_phone VARCHAR2(100) , -- 핸드폰,
    user_gender VARCHAR2(20) , --성별
    user_regdate VARCHAR2(50), -- 가입일자,
    user_role NUMBER, -- 고객권한
    user_bank varchar2(20), --은행 
    user_account varchar2(100), --계좌번호
    user_repay varchar2(100) -- 소득공제용 정보
);


commit;





CREATE TABLE tbl_address_info (
    address_seq number(20) primary key,
    user_email VARCHAR2(100) not null, -- 이메일
    constraints user_email foreign key(user_email) references tbl_user(user_email),
    post_code varchar2(100) NULL, -- 우편번호,
    address VARCHAR2(200) NULL, -- 주소,
    detail_address VARCHAR2(200) NULL, -- 상세주소
    address_name varchar2(100) not null,
    address_phone varchar2(100) not null,
    address_phone2 varchar2(100)
);
alter table tbl_address_info add user_name varchar2(100);


commit;

select * from tbl_user;
select * from tbl_address_info;
delete tbl_address_info;


drop sequence tbl_address_seq;

create sequence tbl_address_info_seq;


-- 상품 데이터

insert into tbl_product values(tbl_product_seq.nextval, 1, '아동상품1', 20000, '이미지4.jpg', 'XL','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 1, '아동상품1', 20000, '이미지4.jpg', 'L','WHITH','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 2, '아동상품2', 23000, '이미지4.jpg', 'XL','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 2, '아동상품2', 23000, '이미지4.jpg', 'L','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 3, '아동상품3', 25000, '이미지4.jpg', 'L','RED','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 3, '아동상품3', 25000, '이미지4.jpg', 'M','DARKRED','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 3, '아동상품3', 25000, '이미지4.jpg', 'S','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 3, '아동상품3', 25000, '이미지4.jpg', 'S','GREEN','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 3, '아동상품3', 25000, '이미지4.jpg', 'XS','YELLOW','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 4, '아동상품4', 19000, '이미지4.jpg', 'XL','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);

insert into tbl_product values(tbl_product_seq.nextval, 5, '여성상품1', 20000, '이미지1.jpg', 'XL','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 5, '여성상품1', 20000, '이미지1.jpg', 'L','WHITH','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 6, '여성상품2', 23000, '이미지1.jpg', 'XL','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 6, '여성상품2', 23000, '이미지1.jpg', 'L','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 6, '여성상품2', 23000, '이미지1.jpg', 'L','RED','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 7, '여성상품3', 25000, '이미지1.jpg', 'M','DARKRED','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 7, '여성상품3', 25000, '이미지1.jpg', 'S','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 8, '여성상품4', 25000, '이미지1.jpg', 'S','GREEN','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 8, '여성상품4', 25000, '이미지1.jpg', 'XS','YELLOW','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 9, '여성상품5', 19000, '이미지1.jpg', 'XL','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);

insert into tbl_product values(tbl_product_seq.nextval, 10, '남성상품1', 20000, '이미지2.jpg', 'XL','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 10, '남성상품1', 20000, '이미지2.jpg', 'L','WHITH','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 11, '남성상품2', 23000, '이미지2.jpg', 'XL','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 11, '남성상품2', 23000, '이미지2.jpg', 'L','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 12, '남성상품3', 25000, '이미지2.jpg', 'L','RED','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 12, '남성상품3', 25000, '이미지2.jpg', 'M','DARKRED','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 13, '남성상품4', 26000, '이미지2.jpg', 'S','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 13, '남성상품4', 26000, '이미지2.jpg', 'S','GREEN','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 13, '남성상품4', 26000, '이미지2.jpg', 'XS','YELLOW','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 13, '남성상품4', 26000, '이미지2.jpg', 'XL','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);

insert into tbl_product values(tbl_product_seq.nextval, 14, '아동악세서리1', 20000, '이미지3.jpg', 'XL','BLACK','KIDS','아동상품입니다.','면','악세사리',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 14, '아동악세서리1', 20000, '이미지3.jpg', 'L','WHITH','KIDS','아동상품입니다.','면','악세사리',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 14, '아동악세서리1', 20000, '이미지3.jpg', 'XL','BLACK','KIDS','아동상품입니다.','면','악세사리',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 15, '아동악세서리2', 23000, '이미지3.jpg', 'L','BLACK','KIDS','아동상품입니다.','면','악세사리',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 15, '아동악세서리2', 23000, '이미지3.jpg', 'L','RED','KIDS','아동상품입니다.','면','악세사리',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 15, '아동악세서리2', 23000, '이미지3.jpg', 'M','DARKRED','KIDS','아동상품입니다.','면','악세사리',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 15, '아동악세서리2', 23000, '이미지3.jpg', 'S','BLACK','KIDS','아동상품입니다.','면','악세사리',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 16, '아동악세서리3', 25000, '이미지3.jpg', 'S','GREEN','KIDS','아동상품입니다.','면','악세사리',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 16, '아동악세서리3', 25000, '이미지3.jpg', 'XS','YELLOW','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 16, '아동악세서리3', 25000, '이미지3.jpg', 'XL','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);

insert into tbl_product values(tbl_product_seq.nextval, 20, '여성악세서리1', 20000, '이미지5.jpg', 'XL','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 20, '여성악세서리1', 20000, '이미지5.jpg', 'L','WHITH','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 21, '여성악세서리2', 23000, '이미지5.jpg', 'XL','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 21, '여성악세서리2', 23000, '이미지5.jpg', 'L','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 22, '여성악세서리3', 25000, '이미지5.jpg', 'L','RED','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 22, '여성악세서리3', 25000, '이미지5.jpg', 'M','DARKRED','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 23, '여성악세서리4', 25000, '이미지5.jpg', 'S','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 23, '여성악세서리4', 25000, '이미지5.jpg', 'S','GREEN','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 23, '여성악세서리4', 25000, '이미지5.jpg', 'XS','YELLOW','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 24, '여성악세서리5', 19000, '이미지5.jpg', 'XL','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);

insert into tbl_product values(tbl_product_seq.nextval, 25, '남성악세서리1', 20000, '이미지6.jpg', 'XL','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 25, '남성악세서리1', 20000, '이미지6.jpg', 'L','WHITH','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 26, '남성악세서리2', 23000, '이미지6.jpg', 'XL','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 26, '남성악세서리2', 23000, '이미지6.jpg', 'L','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 27, '남성악세서리3', 25000, '이미지6.jpg', 'L','RED','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 27, '남성악세서리3', 25000, '이미지6.jpg', 'M','DARKRED','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 27, '남성악세서리3', 25000, '이미지6.jpg', 'S','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 27, '남성악세서리3', 25000, '이미지6.jpg', 'S','GREEN','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 27, '남성악세서리3', 25000, '이미지6.jpg', 'XS','YELLOW','KIDS','아동상품입니다.','면','바지',SYSDATE);
insert into tbl_product values(tbl_product_seq.nextval, 27, '남성악세서리3', 25000, '이미지6.jpg', 'XL','BLACK','KIDS','아동상품입니다.','면','바지',SYSDATE);

select * from tbl_product;
update tbl_product set product_gender = 'W' where product_id between 20 and 24;
update tbl_product set product_gender = 'M' where product_id between 25 and 27;
update tbl_product set product_category = '악세사리' where product_id between 14 and 27;
update tbl_product set product_gender = 'M' where product_id between 10 and 13;
update tbl_product set product_gender = 'W' where product_id between 5 and 9;

-- 상품 옵션 데이터


insert into tbl_product_option values(tbl_product_option_seq.nextval, 1, 250, 10);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 1, 260, 300);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 2, 240, 800);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 2, 100, 100);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 3, 200, 10);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 3, 30, 20);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 3, 250, 30);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 3, 270, 70);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 3, 290, 500);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 4, 100, 900);

insert into tbl_product_option values(tbl_product_option_seq.nextval, 5, 250, 10);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 5, 260, 300);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 6, 240, 800);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 6, 100, 100);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 6, 200, 10);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 7, 30, 20);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 7, 250, 30);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 8, 270, 70);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 8, 290, 500);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 9, 100, 900);

insert into tbl_product_option values(tbl_product_option_seq.nextval, 10, 250, 10);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 10, 260, 300);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 11, 240, 800);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 11, 100, 100);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 12, 200, 10);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 12, 30, 20);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 13, 250, 30);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 13, 270, 70);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 13, 290, 500);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 13, 100, 900);

insert into tbl_product_option values(tbl_product_option_seq.nextval, 14, 250, 10);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 14, 260, 300);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 14, 240, 800);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 15, 100, 100);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 15, 200, 10);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 15, 30, 20);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 15, 250, 30);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 16, 270, 70);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 16, 290, 500);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 16, 100, 900);

insert into tbl_product_option values(tbl_product_option_seq.nextval, 20, 250, 10);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 20, 260, 300);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 21, 240, 800);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 21, 100, 100);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 22, 200, 10);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 22, 30, 20);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 23, 250, 30);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 23, 270, 70);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 23, 290, 500);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 24, 100, 900);

insert into tbl_product_option values(tbl_product_option_seq.nextval, 25, 250, 10);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 25, 260, 300);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 26, 240, 800);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 26, 100, 100);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 27, 200, 10);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 27, 30, 20);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 27, 250, 30);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 27, 270, 70);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 27, 290, 500);
insert into tbl_product_option values(tbl_product_option_seq.nextval, 27, 100, 900);





-- 회원 정보 데이터
insert into tbl_user values('suovj140@gmail.com', 'rnwlgns2', '구지훈', '1993-06-15', '010-4474-9986','M', '2021-06-11', 0, null, null, null);
insert into tbl_user values('test1@gmail.com', 'test1', 'test1', '1966-04-85', '010-4357-7979','W',sysdate, 1, null, null, null);


-- 회원 배송지 데이터
insert into tbl_address_info values(tbl_address_info_seq.nextval, 'suovj140@gmail.com', '95554', '서울특별시 영등포구 당산동 121-289', '가온빌 701호', '내집',   '010-4474-9986', null);
insert into tbl_address_info values(tbl_address_info_seq.nextval, 'suovj140@gmail.com', '95554', '서울특별시 마포구 이대', '학원 301호', '본가',   '010-4444-7897', null);
insert into tbl_address_info values(tbl_address_info_seq.nextval, 'suovj140@gmail.com', '95554', '서울특별시 서초구 고터', '고터 1층', '자취방',   '010-0044-4979', null);
insert into tbl_address_info values(tbl_address_info_seq.nextval, 'suovj140@gmail.com', '95554', '서울특별시 어딘가 여기', '아파트 44층', '친구집',   '010-4949-7797', null);
insert into tbl_address_info values(tbl_address_info_seq.nextval, 'test1@gmail.com', '54354', '이세상 어딘가 1', '여긴어디니', '어딘가1',  '010-0000-0000', null);
insert into tbl_address_info values(tbl_address_info_seq.nextval, 'test1@gmail.com', '46748', '이세상은 맞냐', '어딘지몰라', '어딘가2',  '010-0000-0000', null);


-- 주문 데이터
insert into tbl_order values('주문1', 'suovj140@gmail.com', '53497', '서울특별시 영등포구 당산동 121-289', '가온빌 701호', 2, 254000, '배송준비중', sysdate);
insert into tbl_order values('주문2', 'suovj140@gmail.com', '53497','서울특별시 영등포구 당산동 121-111', '가온빌 1101호', 3, 557000, '배송준비중', sysdate);
insert into tbl_order values('주문3', 'suovj140@gmail.com', '53497','서울특별시 영등포구 당산동 121-111', '가온빌 1101호', 3, 557000, '배송준비중', sysdate);
insert into tbl_order values('주문4', 'suovj140@gmail.com', '53497','서울특별시 영등포구 당산동 121-111', '가온빌 1101호', 3, 557000, '배송준비중', sysdate);
insert into tbl_order values('주문5', 'suovj140@gmail.com', '53497','서울특별시 영등포구 당산동 121-111', '가온빌 1101호', 3, 557000, '배송준비중', sysdate);
insert into tbl_order values('주문6', 'suovj140@gmail.com', '53497','서울특별시 영등포구 당산동 121-111', '가온빌 1101호', 3, 557000, '배송준비중', sysdate);
insert into tbl_order values('주문7', 'suovj140@gmail.com', '53497','서울특별시 영등포구 당산동 121-111', '가온빌 1101호', 3, 557000, '배송준비중', sysdate);
insert into tbl_order values('주문8', 'suovj140@gmail.com', '53497','서울특별시 영등포구 당산동 121-111', '가온빌 1101호', 3, 557000, '배송준비중', sysdate);
insert into tbl_order values('주문9', 'suovj140@gmail.com', '53497','서울특별시 영등포구 당산동 121-111', '가온빌 1101호', 3, 557000, '배송준비중', sysdate);
insert into tbl_order values('주문10', 'suovj140@gmail.com', '53497','서울특별시 영등포구 당산동 121-111', '가온빌 1101호', 3, 557000, '배송준비중', sysdate);
insert into tbl_order values('주문11', 'suovj140@gmail.com', '53497','서울특별시 영등포구 당산동 121-111', '가온빌 1101호', 3, 557000, '배송준비중', sysdate);
insert into tbl_order values('주문12', 'suovj140@gmail.com', '53497','서울특별시 영등포구 당산동 121-111', '가온빌 1101호', 3, 557000, '배송준비중', sysdate);
insert into tbl_order values('주문13', 'suovj140@gmail.com', '53497','서울특별시 영등포구 당산동 121-111', '가온빌 1101호', 3, 557000, '배송준비중', sysdate);
insert into tbl_order values('주문14', 'suovj140@gmail.com', '53497','서울특별시 영등포구 당산동 121-111', '가온빌 1101호', 3, 557000, '배송준비중', sysdate);


-- 주문 상세 데이터

insert into tbl_order_detail values(tbl_order_details_seq.nextval, '주문1', 1, 172000, 2);
insert into tbl_order_detail values(tbl_order_details_seq.nextval, '주문1', 7, 10000, 1);
insert into tbl_order_detail values(tbl_order_details_seq.nextval, '주문1', 8, 25000, 4);
insert into tbl_order_detail values(tbl_order_details_seq.nextval, '주문2', 3, 27560, 3);
insert into tbl_order_detail values(tbl_order_details_seq.nextval, '주문2', 1, 2550, 7);
insert into tbl_order_detail values(tbl_order_details_seq.nextval, '주문3', 2, 277760, 2);
insert into tbl_order_detail values(tbl_order_details_seq.nextval, '주문3', 7, 2990, 1);
insert into tbl_order_detail values(tbl_order_details_seq.nextval, '주문3', 10, 23000, 3);

select * from tbl_product;
select * from tbl_product_option;
select * from tbl_user;
select * from tbl_address_info;
select * from tbl_order;
select * from tbl_order_detail;

commit;



-- 상품 리스트 출력

select *
from
(select rownum rnum, p.*
from
(select product_id, product_title, product_content, product_price, product_gender, product_category, product_img, wm_concat(product_color) product_color, wm_concat(product_size) product_size, product_saled
from
tbl_product, (select product_id product_option_id, sum(product_saled) product_saled from tbl_product_option group by product_id) where product_id = product_option_id
group by product_id, product_title, product_content, product_price, product_gender, product_category, product_img, product_saled) p where product_gender = 'KIDS');


-- 총 상품 개수 (페이징 처리에 필요함)
select max(rownum) from (select product_id, product_title, product_content, product_price, product_gender, product_category, product_img, wm_concat(product_color) product_color, wm_concat(product_size) product_size
from tbl_product group by product_id, product_title, product_content, product_price, product_gender, product_category, product_img) p;

-- 주문 테이블 조회
select * from tbl_order where order_id = '주문1';

-- 해당 주문의 상세 테이블 조회
select p.*, od.order_id, od.money, od.amount from tbl_order_detail od, tbl_product p where od.order_id = '주문1' and od.product_seq = p.product_seq;


