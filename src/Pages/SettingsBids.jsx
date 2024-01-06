import React from 'react'
// import "../Styles/sett-bids.css"
import "../style.css"
import rect from "../assets/afren-images2/Rectangle 34624273.png"


export default function SettingsBids() {
  return (
    <div id="main">
        <div id="pg-title">
            <h3>My Bids</h3>
        </div>
        <div id="whole-bids-cov">
            <div id="bids-pgs">
                <a href="javascript:void(0)" className="bid-pg">Active Bids</a>
                <a href="javascript:void(0)" className="bid-pg">Won Auction</a>
                <a href="javascript:void(0)" className="bid-pg">Bids History</a>
                <a href="javascript:void(0)" className="bid-pg active">All</a>
            </div>
            <div className="table-body">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                </table>
                <div className="demacation">
                    <div className="dm-line"></div>
                    <p>Today</p>
                </div>
                <div id="today-bids">
                    <p>No bids during this time</p>
                    <p className="srch-jbs"><a href="">Search jobs</a> for you and place a bid</p>
                </div>
                <div className="demacation">
                    <div className="dm-line"></div>
                    <p style={{whiteSpace: "nowrap"}}>
                        Last Week
                    </p>
                </div>
                <div className="tab-bod">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="client-prf">
                                        <div className="client-pic">
                                            <img src={rect} alt=""/></div>
                                        <div>
                                            <p>Alexander willians</p>
                                            <span>Updated 10m ago</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="type">Withdraw</td>
                                <td><p className="status in-revision">In Revision</p></td>
                                <td><h3>$1,222</h3></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="client-prf">
                                        <div className="client-pic">
                                            <img src={rect} alt=""/>
                                        </div>
                                        <div>
                                            <p>Alexander willians</p>
                                            <span>Updated 10m ago</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="type">Withdraw</td>
                                <td><p className="status pending">Pending</p></td>
                                <td><h3>$1,222</h3></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="client-prf">
                                        <div className="client-pic">
                                            <img src={rect} alt=""/></div>
                                        <div>
                                            <p>Alexander willians</p>
                                            <span>Updated 10m ago</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="type">Withdraw</td>
                                <td><p className="status paid">Paid</p></td>
                                <td><h3>$1,222</h3></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="client-prf">
                                        <div className="client-pic">
                                            <img src={rect} alt=""/>
                                        </div>
                                        <div>
                                            <p>Alexander willians</p>
                                            <span>Updated 10m ago</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="type">Withdraw</td>
                                <td><p className="status in-revision">In Revision</p></td>
                                <td><h3>$1,222</h3></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="client-prf">
                                        <div className="client-pic">
                                            <img src={rect} alt=""/>
                                        </div>
                                        <div>
                                            <p>Alexander willians</p>
                                            <span>Updated 10m ago</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="type">Withdraw</td>
                                <td><p className="status paid">Paid</p></td>
                                <td><h3>$1,222</h3></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="pgination">
                <p>Showing 1 - 5 of 24</p>
                <div id="pg-arrows">
                    <a href="javascript:void(0)">&lt;</a>
                    <a href="javascript:void(0)">&gt;</a>
                </div>
            </div>
        </div>
    </div>
  )
}
