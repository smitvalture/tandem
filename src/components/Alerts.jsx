import { Alert, Space } from 'antd';
const Alerts = (props) => (
  // <Space
  //   direction="vertical"
  //   style={{
  //     width: '100%',
  //   }}
  // >
    <Alert
      className='w-[287px] h-fit'
      message={props.msg}
      description={props.des}
      type={props.type}
      showIcon
      closable

    />

  // </Space>
);
export default Alerts;