
import { Flex,Button } from'antd';
import AuthProfileDropDown from '../../sheard/AuthProfileDown';
import { Link } from 'react-router-dom';
import { ROUTE_CONSTANTS } from '../../../core/utils/constants';
import { useSelector } from 'react-redux';
import "./index.css"


const Header = ()=>{
  const { authUserInfo:{isAuth,userData}}= useSelector((store)=>store.userProfile)
  return(
      <div className="main_header">
      <Flex justify = "space-between" align='center'>  
      <p>Logo</p>
          <div>
              {
            isAuth? <AuthProfileDropDown userProfileInfo = {userData} />:<Link to = {ROUTE_CONSTANTS.LOGIN}><Button>Sign in</Button> </Link>
              }
          </div>
      </Flex>
      </div>
  )
}
export default Header;