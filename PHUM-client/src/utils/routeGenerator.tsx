import { IRoute, TPathItems } from "../InterFace/interFace"

export const routeGenerator = (pathItems: TPathItems[]) => {
    const router = pathItems.reduce((acc: IRoute[], item) => {
        if (item.path && item.element) {
            acc.push({
                path: item.path,
                element: item.element
            })
        }
        if (item.children) {
            item.children.forEach((child) => {
                acc.push({
                    path: child.path!,
                    element: child.element
                })
            })
        }
        return acc;
    }, [])
    return router
}