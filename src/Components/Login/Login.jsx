import {Link, useNavigate} from "react-router-dom";
import Cookies from 'js-cookie';
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex,  Col } from "antd";
import LoginSignupBtn from "../Buttons/LoginSignupBtn";
import "./Login.css";
import axios from "axios";
const Login = () => {
 
const navigate = useNavigate()
  const onFinish = async (values) => {
    try {
      const response = await axios.post('https://student-poratl-server.vercel.app/loginStudent', { roll: values.roll });
  
      if (response.data.status === 200) {
      console.log("data",response.data.data[0]._id)
        Cookies.set('authToken', response.data.token, { expires: 365 });
        Cookies.set('userId', response.data.data[0]._id, { expires: 365 });
        navigate("/dashboard");
      } else {
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const inputStyle = {
    width: "450px",
    height: "50px",
  };
  const logoStyle = {
    width: "150px",
    height: "100px ",
  };
  return (
    <>
      <div className="login-container">
        <Col>
          <img
            src="../../src/assets/smit_logo.png"
            alt=""
            srcSet=""
            style={logoStyle}
          />
        </Col>
        <Col align="middle" justify="center">
          <h2 style={{ fontWeight: "bold" }}>Certificate Portal </h2>
          <LoginSignupBtn />
          <Form
            name="login"
            initialValues={{
              remember: true,
            }}
            style={{
              maxWidth: 450,
              width: "100%",
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="roll"
              rules={[
                {
                  required: true,
                  message: "Please input your roll!",
                },
              ]}
            >
              <div>
                <p style={{ fontWeight: "500", fontSize: "14px" }}>
                  Provide roll no!
                </p>

                <Input
                  prefix={<UserOutlined />}
                  style={inputStyle}
                  placeholder="CNIC"
                  type="text"
                  id="cnic"
                />
              </div>
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                style={inputStyle}
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Flex justify="space-between" align="middle">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a href="">Forgot password</a>
              </Flex>
            </Form.Item>

            <Form.Item>
              <Button
                block
                type="primary"
                htmlType="submit"
                style={{ ...inputStyle, fontSize: "20px", fontWeight: "500" }}
              >
                Log in
              </Button>
              or <Link style={{marginTop: "10px"}} to="/signup">Register now!</Link>
            </Form.Item>
          </Form>
        </Col>
      </div>
    </>
  );
};
export default Login;
