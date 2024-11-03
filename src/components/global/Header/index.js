import { useContext } from 'react'
import { AuthContext } from '../../../context/authContext'
import { Flex,Button } from'antd'
import AuthProfileDropDown from '../../sheard/AuthProfileDown'
import { Link } from 'react-router-dom'
import { ROUTE_CONSTANTS } from '../../../core/utils/constants'
import { useSelector } from 'react-redux';
import "./index.css"

const Header= ()=>{
  const {count} = useSelector((store)=>store.userProfile)
    const {isAuth,userProfileInfo} = useContext(AuthContext)
    return(
        <div className="main_header">
        <Flex justify = "space-between" align='center'>
            <p>{count}</p>

            <div>
            {
              isAuth? <AuthProfileDropDown userProfileInfo = {userProfileInfo} />:<Link to = {ROUTE_CONSTANTS.LOGIN}><Button>Sign in</Button> </Link>
                }             
              </div>
        </Flex>
        </div>
    )
}
export default Header;