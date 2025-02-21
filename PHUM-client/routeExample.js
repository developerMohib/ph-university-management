const myArray = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: 'AdminDashboard'
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Admin',
                path: 'create-admin',
                element: 'CreateAdmin'
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: 'CreateFaculty'
            },
            {
                name: 'Create Student',
                path: 'create-student',
                element: 'CreateStudent'
            }
        ]
    },
]

const exampleAdminRoutes = myArray.reduce((acc, item) => {
    if (item.path && item.element) {
        acc.push({
            path: item.path,
            element: item.element
        })
    }
    if (item.children) {
        item.children.forEach((child) => {
            acc.push({
                path: child.path,
                element: child.element
            })
        })
    }
    return acc
}, [])

const exampleAdminSidebarRoutes = myArray.reduce((acc, item) => {
    if (item.name && item.path) {
        acc.push({
            key: item.name,
            label: 'navlink'
        })
    }
    if (item.children) {
        acc.push({
            key: item.name,
            label: 'navlink',
            children: item.children.map(child => ({
                key: child.name,
                label: 'navlink'
            }))
        })
    }
    return acc;
}, [])

// To Run this array in js file inidividual => go to path and write node routeExample.js
console.log('is this', JSON.stringify(exampleAdminSidebarRoutes));