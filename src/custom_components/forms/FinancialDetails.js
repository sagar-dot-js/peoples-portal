import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineMinusCircle } from "react-icons/ai";

const FinancialDetails = () => {
  return (
    <div className="information-form flex flex-col">
      <div className=" flex justify-center border-b pb-4 mb-2">
        <h1> Financial Details</h1>
      </div>
      <div>
        <table id="edit-info-table">
          <tr>
            <td colSpan="2">
              <div className="flex justify-between">
                <h2> Primary Bank Account</h2>
                <IoMdAddCircleOutline className="icon" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>Bank Name</p>

                <input type="text" placeholder="HDFC" />
              </div>
            </td>
            <td>
              <div>
                <p>Branch </p>
                <input type="text" placeholder="Rahuri" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>Account Holder Name</p>
                <input type="text" placeholder="Sagar Borude" />
              </div>
            </td>
            <td>
              <div>
                <p>Bank Account Number </p>
                <input type="text" placeholder="30987654567" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>IFSC Code</p>

                <input type="text" placeholder="HDFC0003478" />
              </div>
            </td>
            <td>
              <div>
                <p>Swift Code </p>

                <input type="text" placeholder="HDFC0003478" />
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <div className="flex justify-between">
                <h2> Secondary Bank Account</h2>
                <AiOutlineMinusCircle className="icon" />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <p>Bank Name</p>

                <input type="text" placeholder="HDFC" />
              </div>
            </td>
            <td>
              <div>
                <p>Branch </p>
                <input type="text" placeholder="Rahuri" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>Account Holder Name</p>
                <input type="text" placeholder="Sagar Borude" />
              </div>
            </td>
            <td>
              <div>
                <p>Bank Account Number </p>
                <input type="text" placeholder="30987654567" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>IFSC Code</p>

                <input type="text" placeholder="HDFC0003478" />
              </div>
            </td>
            <td>
              <div>
                <p>Swift Code </p>

                <input type="text" placeholder="HDFC0003478" />
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <div className="flex justify-between">
                <h2> Primary UPI Details</h2>
                <AiOutlineMinusCircle className="icon" />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <p>UPI ID Account Name</p>
                <input type="text" placeholder="Sagar Borude" />
              </div>
            </td>
            <td>
              <div>
                <p>Payment Service</p>
                <input type="text" placeholder="Google Pay" />
              </div>
            </td>
          </tr>

          <tr>
            <td colSpan="2">
              <div>
                <p>UPI ID</p>
                <input type="text" placeholder="sagar.html5@ybl.com" />
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <div className="flex justify-between">
                <h2> Secondary UPI Details</h2>
                <AiOutlineMinusCircle className="icon" />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <p>UPI ID Account Name</p>
                <input type="text" placeholder="Sagar Borude" />
              </div>
            </td>
            <td>
              <div>
                <p>Payment Service</p>
                <input type="text" placeholder="Phone Pay" />
              </div>
            </td>
          </tr>

          <tr>
            <td colSpan="2">
              <div>
                <p>UPI ID </p>
                <input type="text" placeholder="sagar.html6@ybl.com" />
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              {" "}
              <button>Save </button>{" "}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default FinancialDetails;
