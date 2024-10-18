import { Avatar,Dropdown,Typography,Flex,theme } from "antd";
import './index.css'


const { useToken} = theme;
const { Text } = Typography;

const AuthProfileDropDown =()=>{
    const {token} = useToken();

    const items = [
        {
            label:'Profile',
            key:'0',
        },
        {
            label:'Cabinet',
            key:'1',
        },
        {
            label:'Log out',
            key:'2',
        }
    ]
    return(
  
            <Dropdown
             menu ={{ items }} 
            trigger={['click']} 
            dropdownRender={(menu)=>{
                return(
                    <div 
                    style={{
                        borderRadius:token.borderRadiusLG,
                        backgroundColor:token.colorBgElevated,
                        boxShadow:token.boxShadowSecondary,
                    }}
                    >
                       <Flex vertical align="center" style = {{padding:token.sizeMS}}>
                        <Avatar src = 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'/>
                        <Text>John Smith</Text>
                        <Text type="secondary" underline>johnsmith@mail.com</Text>
                        </Flex>
                        {menu}
                        </div>
                        
                   
                )
            }}
            >
            <Avatar size = "large" className="user_profile_avatar">
                    J  S
            </Avatar>
            </Dropdown>
        
    )
}
export default AuthProfileDropDown;