import { Avatar,Dropdown,Typography,Flex,theme } from "antd";
import { signOut } from "firebase/auth";
import { auth } from "../../../services/firebase";
import { useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../core/utils/constants";
import './index.css'


const { useToken} = theme;
const { Text } = Typography;

const getFullNameLetter = ({firstName,lastName})=>{
    if(firstName && lastName){
        return `${firstName[0]} ${lastName[0]}`
    }
    return '-'
}

const AuthProfileDropDown =({userProfileInfo})=>{

    const navigate = useNavigate();
    const {token} = useToken();

const handleSignOut = async()=>{
    try{
        await signOut(auth);
    }catch(e){
        console.log(e,'signOut error')
    }
}
    const items = [
        {
            label:'Profile',
            key:'0',
            onClick:()=>navigate(ROUTE_CONSTANTS.PROFILE)
        },
        {
            label:'Cabinet',
            key:'1',
            onClick:()=>navigate(ROUTE_CONSTANTS.CABINET)
        },
        {   
            label:'Log out',
            key:'logOut',
            onClick:handleSignOut
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
                        <Text>{userProfileInfo.firstName} {userProfileInfo.lastName} </Text>
                        <Text type="secondary" underline>{userProfileInfo.email}</Text>
                        </Flex>
                        {menu}
                        </div>
                        
                   
                )
            }}
            >
            <Avatar size = "large" className="user_profile_avatar">
                  {getFullNameLetter(userProfileInfo)}
                
            </Avatar>
            </Dropdown>
        
    )
}
export default AuthProfileDropDown;