
import { Layout, Menu } from 'antd';
import { sidebarGenerator } from '../../utils/sidebarGenerator';
import { adminPaths } from '../../routes/admin.routes';
import { facultyPaths } from '../../routes/faculty.routes';
import { studentPaths } from '../../routes/student.route';

const { Sider } = Layout;
type TUserRole = {
    ADMIN: string, FACULTY: string, STUDENT: string
}
const Sidebar = () => {
    const userRole: TUserRole = {
        ADMIN: 'admin', FACULTY: 'faculty', STUDENT: 'student'
    }
    const role = 'admin'
    let sidebarPathItems;

    switch (role) {
        case userRole.ADMIN:
            sidebarPathItems = sidebarGenerator(adminPaths, 'admin')
            break;
        case userRole.FACULTY:
            sidebarPathItems = sidebarGenerator(facultyPaths, 'faculty')
            break;
        case userRole.STUDENT:
            sidebarPathItems = sidebarGenerator(studentPaths, 'student')
            break;
        default:
            break;
    }
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '4rem', fontWeight: 'bold' }} >PH University</div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarPathItems} />
        </Sider>
    );
};

export default Sidebar;