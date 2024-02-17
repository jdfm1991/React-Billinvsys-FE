import React, { useEffect, useState } from "react";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';

const ListDep = () => {  

    const departamento = []

    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [loading, setLoading] = useState(true);
    const [selectedUser, setSelectedUser] = useState([]);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [rowClick, setRowClick] = useState(true);

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        email: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    });

    useEffect( () => {

    },[])

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText className="p-inputtext-sm" value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const header = renderHeader();

    const onRowSelect = (event) => {
        setDialogVisible(true)
    };

    return(
        <> 
            <DataTable 
            //Datos de Carga de la tabla
            value={departamento} 
            //Estilo de la tabla
            size="small"
            //Paginacion de la tabla
            paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} 
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" 
            currentPageReportTemplate="{first} to {last} de {totalRecords}" 
            //filtro de la tabla
            header={header}
            filters={filters} 
            globalFilterFields={['name', 'email']}
            filterDisplay="row" loading={loading} 
            emptyMessage="No customers found."
            //Selector de columna en la tabla
            selectionMode={rowClick ? null : 'radiobutton'} 
            selection={selectedUser}
            onSelectionChange={(e) => setSelectedUser(e.value)} 
            dataKey="_id"
            onRowSelect={onRowSelect}
            >
                <Column selectionMode="single" headerStyle={{ width: '3rem' }}></Column>
                <Column field="name" header="Nombre"></Column>
                <Column field="email" header="Accion"></Column>
            </DataTable>
        </>
    )
}

export default ListDep