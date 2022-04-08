import "../css/addproduct.css";
import { useHistory } from "react-router";
import React, { useState, useEffect, useRef } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import productService from '../services/productService';

const ViewProduct = () => {
  const [customers, setCustomers] = useState(null);
  const [selectedCustomers, setSelectedCustomers] = useState(null);
  const [filters, setFilters] = useState<any>({
    'global': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    'productName': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    'Category': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    'Status': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
    'Price': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
    'balance': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
    'activity': { value: null, matchMode: FilterMatchMode.BETWEEN },
    'verified': { value: null, matchMode: FilterMatchMode.EQUALS }
  });
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const history: any = useHistory();
  const [loading, setLoading] = useState(true);
  let productview = useRef<Array<any>>([]);
  const dt = useRef<any>(null);
  // const dt = useRef<any>(null);
  // this category need to add api 
  const Status = ["Draft", "Published"];
  const Category = ["Volvo", "Saab", "Mercedes", "Audi"];

  const representatives = [
    { name: "Amy Elsner", image: 'amyelsner.png' },
    { name: "Anna Fali", image: 'annafali.png' },
    { name: "Asiya Javayant", image: 'asiyajavayant.png' },
    { name: "Bernardo Dominic", image: 'bernardodominic.png' },
    { name: "Elwin Sharvill", image: 'elwinsharvill.png' },
    { name: "Ioni Bowcher", image: 'ionibowcher.png' },
    { name: "Ivan Magalhaes", image: 'ivanmagalhaes.png' },
    { name: "Onyama Limba", image: 'onyamalimba.png' },
    { name: "Stephen Shaw", image: 'stephenshaw.png' },
    { name: "XuXue Feng", image: 'xuxuefeng.png' }
  ];

  const statuses = [
    'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
  ];

  useEffect(() => {
    productService
      .getAllProducts()
      .then((response: any) => {
        console.log("response", response);

        const data: Array<any> = response.data;
        productview.current = data;
        console.log("productview.current", productview.current);
        setLoading(true);
        if (productview.current.length > 0) {
          setLoading(false);
        }
      })
      .catch((error: any) => { });
  }, []);

  const onGlobalFilterChange = (e: any) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  }

  const renderHeader = () => {
    return (
      <div className="flex justify-content-between align-items-center">
        <h5 className="m-0">Products</h5>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
        </span>
      </div>
    )
  }

  const productFilter = (options: any) => {
    return (
      <MultiSelect
        value={options.value}
        options={productview.current}
        itemTemplate={productItemTemplate}
        onChange={(e) => options.filterCallback(e.value)}
        optionLabel="name" placeholder="Any" className="p-column-filter" />
    )
  }

  const productItemTemplate = (option: any) => {
    return (
      <div className="p-multiselect-representative-option">
        <span className="image-text">{option.productName}</span>
      </div>
    );
  }




  const categoryFilter = (options: any) => {
    return (
      <React.Fragment>
        <div className="mb-3 font-bold">Category Filter</div>
        <MultiSelect value={options.value} options={productview.current}
          itemTemplate={categoryItemTemplate} onChange={(e) => options.filterCallback(e.value)}
          optionLabel="name" placeholder="Any" className="p-column-filter" />
      </React.Fragment>
    )
  }

  const categoryItemTemplate = (option: any) => {
    return (
      <div className="p-multiselect-representative-option">
        <span className="image-text">{option.category_id.categoryName}</span>
      </div>
    );
  }


  const pricefilter = (options: any) => {
    return (
      <MultiSelect
        value={options.value}
        options={productview.current}
        itemTemplate={priceItemTemplate}
        onChange={(e) => options.filterCallback(e.value)}
        optionLabel="name" placeholder="Any" className="p-column-filter" />
    )
  }

  const priceItemTemplate = (option: any) => {
    return (
      <React.Fragment>
        <span className="p-column-title">{option.price}</span>
        {option.price}
      </React.Fragment>
    );
  }

  const statusFilter = (options: any) => {
    return (
      <MultiSelect
        value={options.value}
        options={productview.current}
        itemTemplate={statusItemTemplate}
        onChange={(e) => options.filterCallback(e.value)}
        optionLabel="name" placeholder="Any" className="p-column-filter" />
    )
  }
  const statusItemTemplate = (option: any) => {
    return (
      <React.Fragment>
        <span className="p-column-title">{option.status}</span>
        {option.status}
      </React.Fragment>
    );
  }


  const onStatusChange = (e: any) => {
    // dt.current.filter(e.value, "status", "equals");
    //      setSelectedStatus(e.value);
  };

  const onCatagoryChange = (e: any) => {
    dt.current.filter(e.value, "status", "equals");
    //    setselectedCategory(e.value);
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

  let product = (id: any) => {
    history.push({
      pathname: '/addproduct'
    });
  };


  let view = (id: any) => {
    history.push({
      pathname: '/view',
      state: { product_id: id }
    });
  };

  let edit = (id: any) => {
    history.push({
      pathname: '/edit',
      state: { product_id: id }
    });
  };

  let deleteProduct = (id: any) => {
    history.push({
      pathname: '/edit',
      state: { product_id: id }
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
          onClick={() => deleteProduct(rowData._id)}
          className="p-button-raised p-button-danger p-button-text"
        />
      </React.Fragment>
    );
  };


  const header = renderHeader();

  return (
    <div className="card">
      <div className="datatable-doc-demo">
        <button className="next" onClick={() => product}>
          Add Products
        </button>
      </div>
      <DataTable value={productview.current} paginator ref={dt} className="p-datatable-customers" header={header}
        rows={10}
        rowsPerPageOptions={[10, 25, 50]}
        dataKey="id" rowHover selection={selectedCustomers} onSelectionChange={e => setSelectedCustomers(e.value)}
        filters={filters} filterDisplay="menu" loading={loading}
        globalFilterFields={['ProductName', 'Category', 'Status', 'Price']} emptyMessage="No customers found."
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">

        <Column
          field="productname"
          header="Product Name"
          body={productTemplate}
          filter
          filterElement={productFilter}
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
          filterElement={pricefilter}
        />
        <Column
          field="actions"
          header="Actions"
          body={actionBodyTemplate}
        />
      </DataTable>
    </div>
  );
};

export default ViewProduct;