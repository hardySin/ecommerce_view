import "../css/productComment.css";
import { useState } from "react";

import { Sidebar } from "primereact/sidebar";
import { TabView, TabPanel } from "primereact/tabview";
import AddProduct from "./addproduct";
import ViewProduct from "./viewProduct";
import ProductValue from "./productValue";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import AddCategory from "./addcategory";

const AdminPanel = (): any => {
  return (
    <>
      <div style={{ padding: "2%" }}>
        <TabView>
          <TabPanel header="View Products">
            <ViewProduct></ViewProduct>
          </TabPanel>

          <TabPanel header="Add Product">
            <AddProduct></AddProduct>
          </TabPanel>
          <TabPanel header="Product Categories">
          <AddCategory></AddCategory>
           </TabPanel>
         </TabView>
      </div>
    </>
  );
};

export default AdminPanel;
