import React from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
    {
        key: '1',
        label: 'User Management'
    },
    {
        key: '2',
        label: 'Dashboard',
        children: [
            {
                key: '11',
                label: <NavLink to='/about' >About</NavLink>,
            },
            {
                key: '12',
                label: <NavLink to='/contact' >Contact</NavLink>
            },
        ]
    },
];


const Mainlayout: React.FC = () => {
    return (
        <Layout style={{ height: "100vh" }}>
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
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default Mainlayout;