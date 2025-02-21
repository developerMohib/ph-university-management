import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

/**
 * routes and sidebar combined 
 * here i make 
 * 
 * name => Key or label
 * path => path for react router dom
 * element => actual element
 */

interface IRoute {
    path : string,
    element :ReactNode,
}

export const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Admin',
                path: 'create-admin',
                element: <CreateAdmin />
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: <CreateFaculty />
            },
            {
                name: 'Create Student',
                path: 'create-student',
                element: <CreateStudent />
            },
        ]
    },
    {
        name: 'Course Management',
        children: [
            {
                name: 'Course Create',
                path: 'course-create',
                element: <CreateAdmin />
            },
        ]
    },

]
export const adminRoutes = adminPaths.reduce((acc : IRoute[], item) => {
    if (item.path && item.element) {
        acc.push({
            path: item.path,
            element: item.element
        })
    }
    if (item.children) {
        item.children.forEach((child)=>{
            acc.push({
                path: child.path,
                element: child.element
            })
        })
    }
    return acc
}, [])
// export const adminPaths = [
//     {
//         path: "dashboard",
//         element: <AdminDashboard />
//     },
//     {
//         path: "create-admin",
//         element: <CreateAdmin />
//     },
//     {
//         path: "create-faculty",
//         element: <CreateFaculty />
//     },
//     {
//         path: "create-student",
//         element: <CreateStudent />
//     },
// ]