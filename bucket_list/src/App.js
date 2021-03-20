import React from "react";
import Nemo from "./nemo"

// 클래스형 컴포넌트는 이렇게 생겼습니다
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 3,
    };
  }
  addNemo = () => {
    this.setState({count: this.state.count +1});
  }
  removeNemo = () => {
    if(this.state.count > 0){
      this.setState({count: this.state.count -1});
    }else{
      window.alert('네모가 없어요')
    }
    
  }

  render(){
    const nemo_count = Array.from({length: this.state.count}, (v, i) => (i));
    return (
      <div className="App">
        <Nemo />
      </div>
    );
  }
}

export default App;