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
    }

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const buttonGroup = (data) => {
        return (
            {/*<div className="flex align-items-center gap-2">
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-success btnmodal" onClick={ () => handleShow()} ><i className="bi bi-pencil-square">Editar</i></button>
                    <button type="button" className="btn btn-info btnload" onClick={ () => showData() } ><i className="bi bi-download">cargar</i></button>
                    <button type="button" className="btn btn-danger btnmodal" onClick={ () => deleteUser()} ><i className="bi bi-trash">Eliminar</i></button>
                </div>
        </div>*/}
        );
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const header = renderHeader();

    

    const onRowSelect = (event) => {
        //setDialogVisible(true)
        showData(event.data._id)
        console.log(event.data._id)
    };

    const onRowUnselect = (event) => {
        console.log('un'+event.data.name)
    };

    return(
        <> 
        <div className="card">
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
        <Dialog header="Flex Scroll" visible={dialogVisible} style={{ width: '40vw' }} maximizable
        modal contentStyle={{ height: '300px' }} onHide={() => setDialogVisible(false)} >
    
        </Dialog> 
        {/*<table id="listuser" className="table table-striped table-hover table-sm" style={{width:'100%'}}>
            <thead className="table-group-divider">
                <tr>
                    <th className="text-center">Nombre</th>
                    <th className="text-center">Correo</th>
                    <th className="text-center">Accion</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
            {
                users.map( (Users) => (
                    <tr key={Users._id}>
                        <td className="text-center"> {Users.name} </td>
                        <td className="text-center"> {Users.email} </td>
                        <td className="text-center">
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-success btnmodal" onClick={ () => handleShow(Users._id)} ><i className="bi bi-pencil-square">Editar</i></button>
                                <button type="button" className="btn btn-info btnload" onClick={ () => showData(Users._id) } ><i className="bi bi-download">cargar</i></button>
                                <button type="button" className="btn btn-danger btnmodal" onClick={ () => deleteUser(Users._id)} ><i className="bi bi-trash">Eliminar</i></button>
                            </div>
                        </td>
                    </tr>
                    ))
            }
            </tbody>
        </table>*/}            
        </>
    )
}

export default UserListLoad