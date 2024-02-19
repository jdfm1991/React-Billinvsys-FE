import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { Toast } from "primereact/toast";

import DepContext from "../../context/Department/DepContext";

const ListMod = () => { 
    
    const {
        modules,
        message,
        getmodules,
    } = useContext(DepContext)

    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [loading, setLoading] = useState(true);
    const toast = useRef(null)
    const toast2 = useRef(null)

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        department: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    });

    useEffect( () => {
        getmodules()
        setLoading(false);
    },[])

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const confirm = async(id) => {
        toast.current.show({
            severity: 'warn',
            summary: 'Is Sure To Carry Out This Action?',
            sticky: true,
            content: (props) => (
                <div className="row justify-content-center align-items-center g-2" style={{flex:'1'}}>
                    <div className="font-medium text-lg my-3 text-900">{props.message.summary}</div>
                    <div className="col"></div><div className="col"></div>
                    <div className="col">
                    <ButtonGroup className="justify-content-center align-items-end">
                        <Button variant="danger" size="sm" onClick={clear}>Cancelar</Button>
                        <Button variant="success" size="sm" onClick={()=>okDelete(id)}>Confirmar</Button>
                    </ButtonGroup>
                    </div>
                </div>                
            )
        })     
    }

    const clear = () => {
        toast.current.clear()
    }

    const okDelete = async(id) => {
        //await deleteDepartment(id)
        clear()
    }

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

    const buttonBodyTemplate = (mod) => {
        return(
            <>
                <Toast ref={toast} position="center"/>
                <Toast ref={toast2}/>
                <ButtonGroup className="justify-content-center align-items-center">
                    <Button variant="info" size="sm"><i className="pi pi-sync" /></Button>
                    <Button variant="danger" size="sm" onClick={()=>confirm(mod._id)}><i className="pi pi-trash" /></Button>
                </ButtonGroup>
            </>
        )
    }

    const header = renderHeader();

    return(
        <> 
            <DataTable 
           //Datos de Carga de la tabla
           value={modules} 
           //Estilo de la tabla
           size="small"
           //Paginacion de la tabla
           paginator rows={10} rowsPerPageOptions={[10, 25, 50]} 
           paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" 
           currentPageReportTemplate="{first} to {last} de {totalRecords}" 
           //filtro de la tabla
           header={header}
           filters={filters} 
           globalFilterFields={['name']}
           filterDisplay="row" loading={loading} 
           emptyMessage="No customers found."
           //Selector de columna en la tabla
           dataKey="_id"
            >
                <Column selectionMode="single" headerStyle={{ width: '3rem' }}></Column>
                <Column field="name" header="Nombre"></Column>
                <Column field="department.name" header="Departamento"></Column>
                <Column header="Accion" body={buttonBodyTemplate}></Column>
            </DataTable>
        </>
    )
}

export default ListMod