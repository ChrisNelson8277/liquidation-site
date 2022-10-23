import React from "react";
import AddProduct from "../components/AddProduct";
import AdminNav from "../components/AdminComponents/AdminNav";
import ManageProduct from "../components/AdminComponents/ManageProduct";
import { useState } from "react";
import AllItemsContext from "../contexts/AllItemsContext";
function AdminPanel() {
  const [currentPage, setCurrentPage] = useState();
  return (
    <AllItemsContext>
      <div className="admin-panel-container">
        <AdminNav page={setCurrentPage} />
        {currentPage === "addproduct" && <AddProduct />}
        {currentPage !== "addproduct" && <ManageProduct />}
      </div>
    </AllItemsContext>
  );
}

export default AdminPanel;
