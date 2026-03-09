# 1. 사용할 데이터베이스 생성
CREATE DATABASE NODEJS;

# 2. 사용할 데이터베이스 선택(필수)
# !!) 워크벤치를 사용할때 마다 필수적으로 진행해야 하는 명령어
USE NODEJS;

# 3. 사용할 테이블 생성
CREATE TABLE NODEJS_MEMBER(
	ID VARCHAR(100),
    PW VARCHAR(100),
    NICK VARCHAR(100)
);

# 4. 테이블 확인해보기
SELECT * FROM NODEJS_MEMBER;

# 5. 테이블 데이터 추가하기
INSERT INTO NODEJS_MEMBER VALUES('TEST1', '123', 'TEST1');

# 6. 데이터 수정하기
UPDATE NODEJS_MEMBER SET NICK='TEST2' WHERE NICK='TEST'; 

# 7. 데이터 삭제하기
DELETE FROM NODEJS_MEMBER WHERE ID='TEST1';

# 8. 테이블 삭제하기
DROP TABLE NODEJS_MEMBER;


