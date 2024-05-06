import React from 'react'

export default function BT9() {
  return (
    <div>
      <h1>Bai 9</h1>
        <table >
            <tr className='table table-primary'>
                <th>STT</th>
                <th>Họ và tên</th>
                <th>Ngày sinh</th>
                <th>Giới thiệu</th>
                <th>Địa chỉ</th>
                <th>Hành động</th>
            </tr>
            <tr className='table'>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>1990-01-01</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                    <td>123 Main Street, City, Country</td>
                    <td>
                        <button className=' btn  '>Edit</button>
                        <button className=' btn btn-danger  '>Delete</button>
                    </td>
                </tr>
                <tr className='table'>

                    <td>2</td>
                    <td>Jane Smith</td>
                    <td>1995-05-15</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                    <td>456 Elm Street, Town, Country</td>
                    <td>
                        <button className=' btn  '>Edit</button>
                        <button className=' btn btn-danger  '>Delete</button>
                    </td>
                </tr>
        </table>
    </div>
  )
}
