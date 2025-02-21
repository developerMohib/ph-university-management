import { NavLink } from "react-router-dom"
import { ISidebar, TPathItems } from "../InterFace/interFace"

export const sidebarGenerator = (sidebarItems : TPathItems[], role: string) => {
    const sidebarLinks = sidebarItems.reduce((acc: ISidebar[], item) => {
        if (item.name && item.path) {
            acc.push({
                key: item.name,
                label: <NavLink to={`/${role}/${item.path}`} > {item.name} </NavLink>
            })
        }
        if (item.children) {
            acc.push({
                key: item.name,
                label: item.name,
                children: item.children.map(child => ({
                    key: child.name,
                    label: <NavLink to={`/${role}/${child.path}`} > {child.name} </NavLink>
                }))
            })
        }
        return acc;
    }, [])
    return sidebarLinks;
}