import React, { Component } from 'react';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: `Nguyễn Văn A`,
            gender:`Nam`,
            dateOfBirth:`06/03/2024`, 
            email:`nva@gmail.com`,
            address:`Thanh Xuân, Hà Nội`,
            history: []
        };
    }
    componentDidMount() {
        this.printInfor();
    }

    printInfor = () => {
        const { name, gender,dateOfBirth,email,address } = this.state;
   
        const history = [
            `Họ và tên: ${name}`,
            `Giới tính: ${gender}`,
            `Ngày sinh: ${dateOfBirth}`,
            `Email: ${email}`,
            `Địa chỉ: ${address}`
        ];

        this.setState({ history });
    }

    render() {
        const { history } = this.state;
        return (
            <div>
            <h1> Bai 3</h1>
                <ol>
                    {history.map((Infor, index) => (
                        <li key={index}>{Infor}</li>
                    ))}
                </ol>
            </div>
        );
    }
}

export default UserInfo;
