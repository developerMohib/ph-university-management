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

export const adminPaths2 = [
    {
        name: 'Dashboard',
        path: '/admin/dashboard',
        element: <AdminDashboard />
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Admin',
                path: '/admin/create-admin',
                element: <CreateAdmin />
            },
            {
                name: 'Create Faculty',
                path: '/admim/create-faculty',
                element: <CreateFaculty />
            },
            {
                name: 'Create Student',
                path: '/admin/create-student',
                element: <CreateStudent />
            },
        ]
    },
    {
        name: 'Course Management',
        children: [
            {
                name: 'Create Admin',
                path: '/admin/create-admin',
                element: <CreateAdmin />
            },
        ]
    },

]

export const adminPaths = [
    {
        path: "dashboard",
        element: <AdminDashboard />
    },
    {
        path: "create-admin",
        element: <CreateAdmin />
    },
    {
        path: "create-faculty",
        element: <CreateFaculty />
    },
    {
        path: "create-student",
        element: <CreateStudent />
    },
]