import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import "../css/addproduct.css";
import ProductValue from "./productValue";
import { useHistory } from "react-router";
import productService from "../services/productService";

const ViewProduct = () => {
  const [product, setproduct] = useState<any>(null);
  const [selectedStatus, setSelectedStatus] = useState<any>(null);
  const [selectedCategory, setselectedCategory] = useState<any>(null);
  const history: any = useHistory();
  const [globalFilter, setGlobalFilter] = useState<any>("");
  const dt = useRef<any>(null);
  let productview = useRef<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const Status = ["Draft", "Published"];
  const Category = ["Volvo", "Saab", "Mercedes", "Audi"];

  useEffect(() => {
    productService
      .getAllProducts()
      .then((response: any) => {
        console.log("response", response);

        const data: Array<any> = response.data;
        productview.current = data;
        console.log("productview.current", productview.current);
        setLoading(true);
      })
      .catch((error: any) => {});
  }, [loading]);

  const onStatusChange = (e: any) => {
    // dt.current.filter(e.value, "status", "equals");
    setSelectedStatus(e.value);
  };

  const onCatagoryChange = (e: any) => {
    dt.current.filter(e.value, "status", "equals");
    setselectedCategory(e.value);
  };

  const productTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Name</span>
        {rowData.productName}
      </React.Fragment>
    );
  };

  const categoryTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Name</span>
        {rowData.category_id.categoryName}
      </React.Fragment>
    );
  };

  const statusTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Name</span>
        {rowData.status}
      </React.Fragment>
    );
  };

  const priceTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Name</span>
        {rowData.price}
      </React.Fragment>
    );
  };

  let view = (id:any) => {
     history.push({
      pathname: '/view',
      state: {product_id:id}  
  });
  };

  let edit = (id:any) => {
    history.push({
      pathname: '/edit',
      state: {product_id:id}  
  });

   };
  const actionBodyTemplate = (rowData: any) => {
    return (
      <React.Fragment>
        <Button
          label="View"
          onClick={() => view(rowData._id)}
          className="p-button-raised p-button-text"
        />
        <Button
          label="Edit"
          onClick={() => edit(rowData._id)}
          className="p-button-raised p-button-success p-button-text"
        />
        <Button
          label="Delete"
          className="p-button-raised p-button-danger p-button-text"
        />
      </React.Fragment>
    );
  };

  const statusItemTemplate = (option: any) => {
    return <span className={`customer-badge status-${option}`}>{option}</span>;
  };

  const categoryItemTemplate = (option: any) => {
    return <span className={`customer-badge status-${option}`}>{option}</span>;
  };

  const reset = () => {
    setSelectedStatus(null);
    setGlobalFilter("");
    dt.current.reset();
  };

  const header = (
    <div className="table-header">
      <Button
        type="button"
        label="Clear"
        className="p-button-outlined"
        icon="pi pi-filter-slash"
        onClick={reset}
      />
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Global Search"
        />
      </span>
    </div>
  );

  const statusFilter = (
    <Dropdown
      value={selectedStatus}
      options={Status}
      onChange={onStatusChange}
      itemTemplate={statusItemTemplate}
      placeholder="Select a Status"
      className="p-column-filter"
      showClear
    />
  );
  const categoryFilter = (
    <Dropdown
      value={selectedCategory}
      options={Category}
      onChange={onCatagoryChange}
      itemTemplate={categoryItemTemplate}
      placeholder="Select a Category"
      className="p-column-filter"
      showClear
    />
  );

  return (
    <>
      <div className="datatable-filter-demo">
        <div className="card">
          <DataTable
            ref={dt}
            value={productview.current}
            paginator
            rows={10}
            header={header}
            className="p-datatable-customers"
            globalFilter={globalFilter}
            emptyMessage="No Product found."
          >
            <Column
              field="productname"
              header="Product Name"
              body={productTemplate}
              filter
              filterPlaceholder="Search by Product Name"
            />
            <Column
              field="category"
              header="Category"
              body={categoryTemplate}
              filter
              filterElement={categoryFilter}
            />
            <Column
              field="status"
              header="Status"
              body={statusTemplate}
              filter
              filterElement={statusFilter}
            />
            <Column
              field="price"
              header="Price"
              body={priceTemplate}
              filter
              filterPlaceholder="Search by Price"
            />
            <Column
              field="actions"
              header="Actions"
              body={actionBodyTemplate}
            />
          </DataTable>
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
