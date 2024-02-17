
import React, { useContext, useEffect, useRef } from 'react';
import { Menubar } from 'primereact/menubar';
import { Avatar } from 'primereact/avatar';
import { Dialog } from 'primereact/dialog';
import logo from "../assets/logo.png"
import AuthContext from "../context/Auth/AuthContext";
import AuthFormModal from "./AuthFormModal";
      
const MenuApp = () => {

    const {
        show,
        department,
        module,
        cookieValidate,
        getDepartment,
        getModule,
        handleShow,
        handleClose,        
        statuslog,
        closeSession
    } = useContext(AuthContext)

    var items = []
    var subitems = []
    
    useEffect( () => {
        cookieValidate()
        if (statuslog) {
            getDepartment()
            getModule() 
        }
        
    },[statuslog])

    items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            url: '/'
        }
    ];

    if (statuslog) {
        department.forEach( (dep) => {
            var idDep = ''
            module.forEach( (mod) => { 
                if (dep._id === mod.department) {
                    subitems.push({
                        label: mod.name,
                        icon: mod.icon,
                        url: mod.url,
                    })
                    idDep = mod.department
                } 
            })
            items.push({
                label: dep.name,
                icon: dep.icon,
                items: dep._id === idDep ? subitems : ''
            })
        }); 
    }

    const start = <img alt="logo" src={ logo }  height="60" className="mr-1"></img>;

   
    const end = (
        
        <div className="flex align-items-center gap-2">
            {
                statuslog ?
                <Avatar image='https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png' onClick={closeSession} size="large" shape="circle" />  
                :
                <Avatar onClick={handleShow} label={<i className="pi pi-user" style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}></i>} size="large" shape="circle" />             
            }
        </div>
    );

    return (
        <>
            <div className='container-fluid mt-2 fixed-top'>
                <div className="card">
                    <Menubar model={items} start={start} end={end} />
                </div>
                <Dialog visible={show} style={{ minWidth: '50vw' }} onHide={handleClose}>
                    <AuthFormModal />
                </Dialog>
            </div>
        </>
    )
}

export default MenuApp


        
