import React from "react";
import logo from "./logo.svg";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import styled from "styled-components";

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {
      list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    };

    this.text = React.createRef();
  }
  handleChange = () =>{
    let list = this.state.list;
    const new_item = this.text.current.value;
    this.setState({list: [...list, new_item]});
  }


  componentDidMount() {
    console.log(this.text);
  }
  

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    const list_count = Array.from({length:this.state.list}, (v, i) => i)

    return (
      <div className="App">
        <Container>
          <Title >내 버킷리스트</Title>
          <Line/>
          {/* 컴포넌트를 넣어줍니다. */}
          {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
          <BucketList list={this.state.list} />
          <Line />
        </Container>
        <Input>
          <input type="text" placeholder="버킷리스트를 작성해주세요" ref={this.text} />
          <button onClick={this.handleChange}>추가하기</button>
        </Input>
      </div>
    );
  }
}
const Input = styled.div`
max-width: 350px;
min-height: 10vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;
