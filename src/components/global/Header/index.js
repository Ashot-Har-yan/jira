import { Flex,Button } from'antd'
import { Link } from 'react-router-dom'
import { ROUTE_CONSTANTS } from '../../../core/utils/constants'
import "./index.css"

const Header= ()=>{
    return(
        <div className="main_header">
        <Flex justify = "space-between" align='center'>
            <p>Logo</p>

            <div>
                <Link to = {ROUTE_CONSTANTS.LOGIN}>
                <Button>
                    Sign in
                </Button>
                </Link>
            </div>
            
        </Flex>
        </div>
    )
}
export default Header;