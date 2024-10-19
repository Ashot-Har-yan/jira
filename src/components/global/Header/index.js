import { useContext } from 'react'
import { AuthContext } from '../../../context/authContext'
import { Flex,Button } from'antd'
import AuthProfileDropDown from '../../sheard/AuthProfileDown'
import { Link } from 'react-router-dom'
import { ROUTE_CONSTANTS } from '../../../core/utils/constants'
import "./index.css"

const Header= ()=>{
    const {isAuth} = useContext(AuthContext)
    return(
        <div className="main_header">
        <Flex justify = "space-between" align='center'>
            <p>Logo</p>

            <div>
            {
              isAuth? <AuthProfileDropDown />:<Link to = {ROUTE_CONSTANTS.LOGIN}><Button>Sign in</Button> </Link>
                }             
              </div>
        </Flex>
        </div>
    )
}
export default Header;