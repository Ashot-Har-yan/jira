import { Spin } from "antd";
import './index.css';

const LoadingWrapper =({loading,children})=>{
    return(
        <>
        {
            loading?<div className="main_loading_container"><Spin size="large" /></div>:children
        }
        </>
    )
};
export default LoadingWrapper;