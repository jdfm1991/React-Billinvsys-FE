import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/User/UserContext";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';

import "primereact/resources/themes/lara-light-cyan/theme.css";

const UserListLoad = () => {  

    const {users, getUsersList,getUser,deleteUser,handleShow,secondView} = useContext(UserContext)

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
        getUsersList()
        setLoading(false);
    },[])

    

    const showData = async(id) => {
        await getUser(id)
        secondView()
        setDialogVisible(false)
    }

    const _handleShow = async(id) => {
        await handleShow(id)
        setDialogVisible(false)
    }

    const handleDelete = async(id) => {
        await deleteUser(id)
        setDialogVisible(false)
    }

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
        <div className="">
            <DataTable 
            //Datos de Carga de la tabla
            value={users} 
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
                <Column field="email" header="email"></Column>
            </DataTable>
        </div> 
        <Dialog header="Opciones a Realizar" visible={dialogVisible} style={{ minWidth:'60vw' }} maximizable
        modal contentStyle={{ height: '25vw', width:'60vw' }} onHide={() => setDialogVisible(false)} >
            <div className="container">
                <div className="container-fluid">
                    <div className="justify-content-center align-items-center g-2 text-center">
                        <div style={{padding: 'calc(20% - 30px) 20px calc(15% - 10px) calc(15% - 15px)'}}>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-success btnmodal" onClick={ () => _handleShow(selectedUser._id)} ><i className="bi bi-pencil-square">Editar</i></button>
                                <button type="button" className="btn btn-info btnload" onClick={ () => showData(selectedUser._id) } ><i className="bi bi-download">cargar</i></button>
                                <button type="button" className="btn btn-danger" onClick={ () => handleDelete(selectedUser._id)} ><i className="bi bi-trash">Eliminar</i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>          
        </>
    )
}

export default UserListLoad