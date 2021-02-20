import React, { Component } from "react";
const guessNumber = Math.round(Math.random() * 100);
console.log("đây là " + guessNumber);

class BaiTap1 extends Component {
  state = {
    messageBox: "",
    historyNum: [],
  };

  getId = (id) => document.getElementById(id);
  historyShow = () => {
    const HTMLketqua = this.state.historyNum.map((item, index) => {
      return (
        <div key={index}>
          <span>
            Lần {index + 1} = {item}
          </span>
        </div>
      );
    });
    return HTMLketqua;
  };
  findNum = (num) => {
    return () => {
      let SoNhap = parseFloat(this.getId("input").value);
      this.state.historyNum.push(SoNhap);
      console.log(this.state.historyNum);

      if (SoNhap > num) {
        this.setState({
          messageBox: "Số cần tìm LỚN hơn số hiện tại",
        });
      } else if (SoNhap < num) {
        this.setState({
          messageBox: "Số cần tìm NHỎ hơn số hiện tại",
        });
      } else {
        this.setState({
          messageBox: "bạn đã nhập đúng số  là " + SoNhap,
          historyNum: [
            <div className="card col-3">
              <p>Lịch sử </p>
              {this.historyShow()}
            </div>,
          ],
        });
      }
    };
  };
  render() {
    return (
      <div>
        <div>
          <div className="input-group col-4 mt-5">
            <input
              type="text"
              id="input"
              className="form-control"
              placeholder="Nhập Số"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.findNum(guessNumber)}
              >
                Đoán
              </button>
            </div>
          </div>
          <div className="ml-4 mt-5">
            {this.state.messageBox}
            {this.state.historyNum}
          </div>
        </div>
      </div>
    );
  }
}

export default BaiTap1;
