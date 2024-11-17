import { Form,Input,Select,Space } from "antd"
import { ISSUE_OPTIONS, ISSUE_PRIORITY_OPTIONS } from "../../../../core/utils/issues"
import Editor from "../../Editor";

const ModalForm = ({form,onFinish})=>{

    return(
        <Form layout="vertical" form = {form} onFinish={onFinish}>
            <Form.Item
            name = 'issueName'
            label = 'Issue Name'
            rules={[
                {
                  required: true,
                  message: 'Please input Issue name!'
                }
              ]}
            >
                <Input type = 'text' placeholder="Issue Name" />
            </Form.Item>
            <Form.Item 
                name= 'type'
                label = 'Issue Type'
                rules={[
                    {
                      required: true,
                      message: 'Please select Issue Type!'
                    }
                  ]}
            >
                <Select placeholder = 'Issue Type'>
                    {
                        Object.values(ISSUE_OPTIONS).map(({value,icon,label})=>{
                           return(
                            <Select.Option value={value} key = {value}>
                                <Space>
                                    {icon}
                                    <span>{label}</span>
                                </Space>
                            </Select.Option>
                           )
                        })
                    }
                </Select>
            </Form.Item>

            <Form.Item 
                name= 'description'
                label = 'Description'
                rules={[
                    {
                      required: true,
                      message: 'Please input Issue Description!'
                    }
                  ]}
            >
               <Editor />
                </Form.Item>

                <Form.Item 
                name= 'priority'
                label = 'Priority'
                rules={[
                    {
                      required: true,
                      message: 'Please select Priority!'
                    }
                  ]}
            >
                <Select placeholder = 'Issue Priority'>
                    {
                        Object.values(ISSUE_PRIORITY_OPTIONS).map(({value,icon,label})=>{
                           return(
                            <Select.Option value={value} key = {value}>
                                <Space>
                                    {icon}
                                    <span>{label}</span>
                                </Space>
                            </Select.Option>
                           )
                        })
                    }
                </Select>
            </Form.Item>
        </Form>
    )
};
 
export default ModalForm