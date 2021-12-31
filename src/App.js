import './App.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { PageHeader } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      password: 'Please input your Password!',
    },
  };
  /* eslint-enable no-template-curly-in-string */

  return (
    <div className="form">
      <div id="loginform">
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <div id="headerTitle">
            <PageHeader subTitle="LOGIN"/>
          </div>
          <Form.Item name={['Email']} rules={[{ required: true, type: 'email' }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"/>
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default App;
