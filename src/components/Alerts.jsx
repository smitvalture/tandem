import { Alert, Space } from 'antd';


const Alerts = (props) => (

  <Space
    direction="vertical"
  >
    <Alert
      className='w-60 tab:w-64 lap:w-72 h-fit'
      message={props.msg}
      description={props.des}
      type={props.type}
      showIcon
      closable

    />

  </Space>

);
export default Alerts;