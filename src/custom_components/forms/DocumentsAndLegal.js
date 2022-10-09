import React from "react";

const DocumentsAndLegal = () => {
  return (
    <div className="information-form flex flex-col">
      <div className=" flex justify-center border-b pb-4 mb-2">
        <h1> Documents and Legal </h1>
      </div>
      <div>
        <table id="edit-info-table">
          <tr>
            <td className="w-[50%]">
              <div>
                <p>ESIC ePehchan Card </p>
                <input type="text" placeholder="301298XXXX" disabled />
              </div>
            </td>
            <td>
              <div>
                <p>PF Number </p>
                <input type="date" placeholder="301298XXXX" disabled />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>Offer Letter</p>
                <input type="text" placeholder="Submitted" disabled />
              </div>
            </td>
            <td>
              <div>
                <p>Offer Letter Submitted Date</p>
                <input type="date" placeholder="11- Sept - 2022" disabled />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>Form-11</p>
                <input type="text" placeholder="Submitted" disabled />
              </div>
            </td>
            <td>
              <div>
                <p>Form-11 Submitted Date</p>
                <input type="date" placeholder="00- January - 0000" disabled />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>Form-2</p>
                <input type="text" placeholder="Unsubmitted" disabled />
              </div>
            </td>
            <td>
              <div>
                <p>Form-2 Submitted Date</p>
                <input type="date" placeholder="00- January - 0000" disabled />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <p>Adharcard</p>
                <div className="flex items-center gap-3">
                  <div>
                    <input type="file" placeholder="Unsubmitted" />
                  </div>
                  <div>
                    {" "}
                    <input
                      type="button"
                      value="Upload"
                      className="bg-[#1765DC] text-[#ffff] cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div>
                <p>Adharcard Submitted Date</p>
                <input type="text" placeholder="00- January - 0000" disabled />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <p>Adharcard</p>
                <div className="flex items-center gap-3">
                  <div>
                    <input type="file" placeholder="Unsubmitted" />
                  </div>
                  <div>
                    {" "}
                    <input
                      type="button"
                      value="Upload"
                      className="bg-[#1765DC] text-[#ffff] cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div>
                <p>Pancard Submitted Date</p>
                <input type="text" placeholder="00- January - 0000" disabled />
              </div>
            </td>
          </tr>

          <tr>
            <td colspan="2">
              <button>Save </button>{" "}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default DocumentsAndLegal;
