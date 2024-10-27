import { Outlet } from "react-router-dom";
import {  Layout, Menu,theme,Breadcrumb } from "antd";
import { ROUTE_CONSTANTS } from "../../../core/utils/constants";
import './index.css'

const { Sider,Content } = Layout;
const menuItems = [
    {
        label:'Personal Information',
        key:ROUTE_CONSTANTS.PROFILE
    }
]

const CabinetLayout = ()=>{
   const {
    token: { colorBgContainer, borderRadiusLG },
   } = theme.useToken();

    return(
        <div className="cabinet_layout_main_container">
        <Sider collapsible width={200} style={{backgroundColor:colorBgContainer}}>
            <Menu
            mode='inline'
            items = {menuItems}
            />
             </Sider>

        <Layout style = {{padding:"0 24px 24px"}}>
                <Breadcrumb
                items = {[{title:'Cabinet' },{title:'Profile'}]}
                style={{margin:'16px 0'}}
                />
                <Content
                style={{
                    padding:24,
                    margin:2,
                    minHeight:300,
                    width:'100%',
                    backgroundColor:colorBgContainer,
                    borderRadius:borderRadiusLG
                }}
                >
                    <Outlet />
               </Content>
            </Layout>
        </div>
    )
}

export default CabinetLayout;