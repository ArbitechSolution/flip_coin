import React,{useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import "./Page.css"
// import "./Page1.css"
import { loadWeb3 } from "../Api"
import space from "../assets/img/Space.mp4"
import gif from "../assets/img/Ws1x.gif"

function Page1() {
  const [btnTxt, setBtTxt] = useState("click to connect");
  const [account, setAccount] = useState();

  const connectWallet=async()=>{
    let [acc, net_id] = await loadWeb3();
    console.log(acc);
    if (acc == "No Wallet") {
      setBtTxt("No Wallet");
    } else if (acc == "Wrong Network") {
      setBtTxt("Wrong Network");
    } else {
      toast.success('Connected');
      setAccount(acc);
      let myAcc = acc;
      setBtTxt("connected");
      console.log("acc", acc);
    }

  }
  return (
    <>
      <video autoplay muted loop id="myVideo">
        <source src={space} type="video/mp4" />
      </video>
      <div style={{textAlign:"end"}}>
        <a className="nav-link " >
          <button id="enableMetamask" className="btn connect-btn " onClick={connectWallet}>
            { account? account?.substring(0, 4) +
              "..." +
             account?.substring(account?.length - 4):btnTxt
          }
          </button>
          
       
        </a>
      </div>
      <section id="machine">
         <section style={{width:"50%",margin:"auto"}}>
                <h3>Flip your BUSD Token</h3>
                <p>Heads or Tails. Either you win or you lose.</p>
                  <br /><br />
              		<div className="piggy-stats">
                    <img src={gif} alt="Icon with piggy in gold coin" />
                    <h2>BUSD Price POT</h2>
                    <h3><span id="token-priceham">0.00</span> BUSD</h3>
                  </div>
                  <div className="machine-input">
                    <p>Approve BUSD spend</p>
                    <input type="number" name="approve-busd" id="input-approve-ham" placeholder="Enter Amount" />
                    <button onclick="approveHAM()">APPROVE</button>
                  </div>
                  <div className="machine-input">
                    <p id="your-ham"></p>
                    <input type="number" name="use-busd" id="input-ham" placeholder="Enter Amount" />
                    <button className="btn-gray" onclick="playham(this.value, 0)">HEAD</button>
                    <button className="btn-gray" onclick="playham(this.value, 1)">TAIL</button>
                  </div>
                  <p>Minimum: <span id="infotext-min-ham"></span> BUSD<br />
                    Maximum: <span id="infotext-max-ham"></span> BUSD</p>
                    Your maximum win is x1.94
                    <div id="info-ham"></div>
                  </section>
                </section>
    </>
  )
}

export default Page1