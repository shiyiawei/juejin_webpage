import React from 'react';
import ReactDOM from 'react-dom';

//创建iframe
const childFrameObj = document.getElementById("page");
const iframe = document.createElement("iframe");
iframe.src = "iframe.html";
iframe.id = "iframe";
childFrameObj.appendChild(iframe);
// 传值例子
// if (iframe.attachEvent){
//     iframe.attachEvent("onload", ()=>{
//       iframe.contentWindow.postMessage('传值给子应用', '*');
//     });
// } else {
//     iframe.onload = ()=>{
//       iframe.contentWindow.postMessage('传值给子应用', '*');
//     };
// }

//新建组件 ButtonButton，创建New Button
class ButtonButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    iframe.contentWindow.postMessage('添加按钮', '*');
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        添加新的按钮 
      </button>
    );
  }
}
//新建组件 ButtonText，创建New Textarea
class ButtonText extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    iframe.contentWindow.postMessage('添加文本框', '*');
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        添加新的文本框 
      </button>
    );
  }
}

//合并所有新建类组件，用于渲染
class Combined extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <ButtonButton> </ButtonButton> 
      <ButtonText> </ButtonText> 
      </div>
    );
  }
}

//渲染合并后的组件
ReactDOM.render(
  <Combined />,
  document.getElementById('menu')
);




