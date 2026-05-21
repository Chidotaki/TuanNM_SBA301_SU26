import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import { Alert } from 'react-bootstrap'

function RegistrationForm() {
  const [formData, setFormData] = useState({ // State để lưu dữ liệu form
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({}) // State để lưu lỗi validation
  const [showSuccess, setShowSuccess] = useState(false) // State quản lý việc hiển thị Alert thành công
  const [isSubmitted, setIsSubmitted] = useState(false) // State theo dõi việc người dùng đã ấn Submit hay chưa

    // Tách hàm kiểm tra lỗi (validate) ra để tái sử dụng
    const checkValidation = (data) => {
        const newErrors = {}
        if (!data.fullName) newErrors.fullName = 'Full name is required'
        if (!data.email) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            newErrors.email = 'Email is invalid'
        }
        if (!data.password) {
            newErrors.password = 'Password is required'
        } else if (data.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters'
        }
        if (data.password !== data.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match'
        }
        return newErrors
    }

    const handleChange = (e) => { // Cập nhật state khi người dùng nhập dữ liệu
        const newFormData = {
            ...formData,
            [e.target.name]: e.target.value
        }
        setFormData(newFormData)

        // Nếu người dùng đã từng ấn Register (tức là form đang hiện lỗi)
        // thì kiểm tra lỗi real-time để tắt lỗi ngay lập tức khi nhập đúng
        if (isSubmitted) {
            setErrors(checkValidation(newFormData))
        }
    }

    const handleSubmit = (e) => { // Xử lý submit form
        e.preventDefault() // Ngăn chặn reload trang
        setIsSubmitted(true) // Đánh dấu là đã submit
        
        const currentErrors = checkValidation(formData)
        setErrors(currentErrors)

        if (Object.keys(currentErrors).length === 0) { // Nếu dữ liệu hợp lệ, hiển thị thông báo thành công
            setShowSuccess(true)
            setFormData({ // Reset form sau khi submit thành công
                fullName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
            setIsSubmitted(false) // Reset trạng thái submit
        }
    }

    //handle Cancel button để reset form về trạng thái ban đầu
    const handleCancel = () => {
        setFormData({
            fullName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
        setErrors({})
        setShowSuccess(false) // Ẩn thông báo nếu người dùng nhấn Cancel
        setIsSubmitted(false) // Reset trạng thái submit
    }

    return (
        <>
        {/*Hiển thị Container, Row, Colum 5 hàng, 3 cột */}
<Container>
  <Row>
    <Col><h2>Registration Form</h2></Col>
  </Row>
  <Row>
    <Col>
      {/* Form đăng ký */}
      {showSuccess && (
        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible style={{ maxWidth: '400px', margin: '0 auto 15px auto' }}>
          Registration successful!
        </Alert>
      )}

        <Form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
            <Form.Group className="mb-3" controlId="formFullName">
<Form.Label>Full Name</Form.Label>
                <Form.Control
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    isInvalid={!!errors.fullName}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.fullName}
                </Form.Control.Feedback>
            </Form.Group>
            {/* Similar form groups for email, password, and confirmPassword */}
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.email}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.password}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    isInvalid={!!errors.confirmPassword}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword}    
                </Form.Control.Feedback>
            </Form.Group>
            {/* Form group cho button Submit and Cancel, dùng Button React-Bootstrap */}
            <Form.Group className="mb-3">
                <Button variant="primary" type="submit" style={{ width: '100%' }}>
                    Register
                </Button>
                <Button variant="secondary" type="button" style={{ width: '100%', marginTop: '10px' }} onClick={handleCancel}>
                    Cancel
                </Button>
                
            </Form.Group>
        </Form>
    </Col>
  </Row>
</Container>
        </>
    )
}
export default RegistrationForm
