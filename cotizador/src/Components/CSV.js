import React from "react";

export default function CSV() {
  return (
    <div>
      <div className="update">
        <label>Update CSV</label>
        <select
          defaultValue={select}
          onChange={(e) => setSelect(e.target.value)}
        >
          <option value="PreOrders">Pre Build Orders</option>
          {/* <option value='AddZipcode'>Add Zipcode</option> */}
          <option value="AddProducts">Add Products</option>
          <option value="AddPromoCode">Add PromoCode</option>
        </select>
        <input id="csv" type="file" onChange={HandleOnChange} accept="csv" />
      </div>
      <div className="btn">
        <button onClick={HandleOnclick}>Save Changes</button>
      </div>
    </div>
  );
}
