import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { inputUser, okClick, resetUser } from "../modules/userSlice";
/*
    state를 조회하기 위한 useSelector를 사용할 수 있다.
    action을 발생시키기 위한 useDispatch를 사용할 수 있다.  

     useSelector
connect함수를 이용하지 않고 리덕스의 state를 조회할 수 있다.
import { useSelector } from 'react-redux'
const user = useSelector(state => state.user);

useDispatch
생성한 action을 useDispatch를 통해 발생시킬 수 있다
만들어둔 액션생성 함수를 import한다.
import { change_user } from '../modules/user'
import { useDispatch } from 'react-redux'

const User = () => {
  ...
  const dispatch = useDispatch();
  dispatch(change_user(user));
  ...
}
// 위에서 dispatch한 change_user는 아래와 같이 정의된 액션 생성 함수이다.
export const change_user = createAction(CHANGE_USER, user => user);
*/

const Layout = styled.div`
  margin-top: 10px;
  padding: 20px;
`;
const User = (props) => {
  const username = useSelector((state) => state.user);
  const isClick = useSelector((state) => state.isClick);
  const dispatch = useDispatch();
  // import 한 action을 useDispatch으로 발생시킨다.
  const handleOnUser = (e) => {
    dispatch(inputUser(e.target.value));
    // 여기서 userSlice.js 에 있는 inputUser 이라는 함수를 실행시킨다. 파라미터는 e.target.value (e.target은 input 태그를 가리키고, e.target.value는 input 태그 안에 있는 value 값 = username) 이다.
  };
  const handleOnBtClick = (e) => {
    dispatch(okClick());
  };
  const handleOnReset = (e) => {
    // https://programming119.tistory.com/100
    // e.preventDefault() : submit 같은 것 수행할 때 창이 리로드 되지 않도록 한다
    e.preventDefault();
    dispatch(resetUser());
  };
  return (
    <Layout>
      <h2> Redux Toolkit </h2>

      <input type="text" value={username} onChange={handleOnUser} />

      <button onClick={handleOnBtClick} value="onClick">
        OK
      </button>

      <button onClick={handleOnReset} value="reset">
        Reset
      </button>
      <br />
      {isClick && <label> {username} </label>}
    </Layout>
  );
};
export default User;
