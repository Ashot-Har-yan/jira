import { Typography } from "antd";
import './index.css';

const { Title } = Typography;
const AuthWrapper = ({title,banner,children})=>{
    return(
        <div className="auth_wrapper">
            <div className="banner_container" style = {{backgroundImage:`url(${banner})`}} />
            <div className="form_container">
                <Title level ={3}>
                    {title}
                </Title>
                
                {children}
            </div>
        </div>
    )
}
export default AuthWrapper;