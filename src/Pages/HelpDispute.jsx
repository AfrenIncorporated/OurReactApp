import React from 'react'
import Header from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import "../Styles/helpDispute.css"


export default function HelpDispute() {
  return (
    <>
        <Header />
        <div id="popup-back">
            <div id="disp-form">
            <div id="disp-ttle">
                <p>New Dispute</p>
                <p id="canc-disp">x</p>
            </div>
            <form action="">
                <div class="flexed-inp-cov">
                    <div class="flexed-inp">
                        <label for="">Contract</label><br />
                        <select name="" id="" class="disp-slct">
                            <option value="" selected>Please select</option>
                        </select>
                    </div>
                    <div class="flexed-inp">
                        <label for="">Freelance</label><br />
                        <input type="text" name="" id="" />
                    </div>
                </div>
                <div class="flexed-inp">
                    <label for="">Total hours</label><br />
                    <div class="inp-hrs">
                        <input type="text" name="" id="" />
                        <div>Hrs</div>
                    </div>
                </div>
                <div class="flexed-inp-cov">
                    <div class="flexed-inp">
                        <label for="">Disputed hours</label><br />
                        <div class="inp-hrs">
                            <input type="text" name="" id="" />
                            <div>Hrs</div>
                        </div>
                    </div>
                    <div class="flexed-inp">
                        <label for="">Amount</label><br />
                        <div class="inp-hrs">
                            <input type="text" name="" id="" />
                            <div>$</div>
                        </div>
                    </div>
                </div>
                <div class="full-inp">
                    <label for="">Reason for dispute</label><br /> 
                    <select name="" id="" class="disp-slct">
                        <option value="" selected>Please select</option>
                    </select>
                </div>
                <div class="full-inp">
                    <label for="">Comment</label><br />
                    <textarea name="" id="" cols="30" rows="4" placeholder="Enter message..."></textarea>
                </div>
                <input type="submit" name="" id="form-create" value="Create dispute" />
            </form>
            </div>
        </div>
        <div class="menu-cover">
            <Sidebar />
        </div>
        <div id="main">
            <p id="back-link"><a href="javascript:void(0)">&lt;</a> Back</p>
            <div id="main-top">
                <div id="top-head">
                    <h3>My Disputes</h3>
                    <button onclick="createDisp()" id="new-disp">+ <span>start a new dispute</span></button>
                </div>
                <p>We offer services of  disputes We offer services of  disputesWe offer services of  disputesWe offer services of  disputes</p>
                <p>Learn more about disputes process <a href="">here.</a></p>
            </div>
            <div class="table-whole">
                <h3>Opened Disputes</h3>
                <div class="table-body">
                    <table>
                        <thead>
                            <tr>
                                <th>Contract</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Disagreement Contract</td>
                            <td class="type">20 Aug,2023</td>
                            <td>$200.00</td>
                            <td><p class="status pending">Pending</p></td>
                            <td><button class="close-disp">Close dispute</button></td>
                        </tr>
                        <tr>
                            <td>Disagreement Contract</td>
                            <td class="type">20 Aug,2023</td>
                            <td>$200.00</td>
                            <td><p class="status pending">Pending</p></td>
                            <td><button class="close-disp">Close dispute</button></td>
                        </tr>
                        <tr>
                            <td>Disagreement Contract</td>
                            <td class="type">20 Aug,2023</td>
                            <td>$200.00</td>
                            <td><p class="status pending">Pending</p></td>
                            <td><button class="close-disp">Close dispute</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="table-whole">
            <h3>Closed Disputes</h3>
            <div class="table-body">
                <table>
                    <thead>
                        <tr>
                            <th>Contract</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Disagreement Contract</td>
                            <td class="type">20 Aug,2023</td>
                            <td>$200.00</td>
                            <td><p class="status received">Pending</p></td>
                        </tr>
                        <tr>
                            <td>Disagreement Contract</td>
                            <td class="type">20 Aug,2023</td>
                            <td>$200.00</td>
                            <td><p class="status received">Pending</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        </div>
    </>
  )
}
