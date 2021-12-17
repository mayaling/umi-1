import React, { useState } from "react"
import { Table, Tag, Space, Modal, Button } from 'antd';
import { connect } from "umi";
import UserModal from "./components/UserModal";
const index = ({ users,dispatch }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [record, setRecord] = useState(undefined)


  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'create_Time',
      dataIndex: 'create_time',
      key: 'create_time',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          {/* <a onClick={()=>{
            setModalVisible(true)
          }}>Edit</a>&nbsp;&nbsp;&nbsp; */}
          {/* 方案二 */}
           <Button onClick={()=>{
             handelModalEdit(record)
           }}>Edit</Button>&nbsp;&nbsp;&nbsp;
          <Button>Del</Button>
        </span>
      ),
    },
  ];

  const handelModalEdit = record=>{
    setModalVisible(true)
    setRecord(record)
  }

   const handleOk = () => {
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  
  const onFinish = (values: any) => {
    console.log(values);
    const id = record.id
    console.log(id)
    dispatch({
      type:'users/edit',
      payload:{
        values,
        id
      }
    })
  };




  return (
    <div>
      <Table className="list-table" columns={columns} dataSource={users.data} rowKey="id" />
      <UserModal visible={modalVisible} handleOk={handleOk} handleCancel={handleCancel}  onFinish={onFinish} record={record}></UserModal>
    </div>
  )
}

const mapStateToProps = ({ users }) => {
  return {
    users,
  }
}



export default connect(mapStateToProps)(index)