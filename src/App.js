//import logo from "./logo.svg";
import "./App.css";
import {useEffect} from "react";
function App() {
///localStorage.setItem("url","https://remarkable-sunshine-02e5a3.netlify.app/")

useEffect(()=>{

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js',{ scope: '/public/' })
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  }
  
},[])


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th class="no-border text-start heading" colspan="5">
              Order Items
            </th>
          </tr>
          <tr class="bg-blue">
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width="10%">16</td>
            <td>Mi Note 7</td>
            <td width="10%">$14000</td>
            <td width="10%">1</td>
            <td width="15%" class="fw-bold">
              $14000
            </td>
          </tr>
          <tr>
            <td width="10%">17</td>
            <td>Vivo V19</td>
            <td width="10%">$699</td>
            <td width="10%">1</td>
            <td width="15%" class="fw-bold">
              $699
            </td>
          </tr>
          <tr>
            <td colspan="4" class="total-heading">
              Total Amount - <small>Inc. all vat/tax</small> :
            </td>
            <td colspan="1" class="total-heading">
              $14699
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <p class="text-center">Thank your for shopping with Funda of Web IT</p>
    
    </div>
  );
}

export default App;
