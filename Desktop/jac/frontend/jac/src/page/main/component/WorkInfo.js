import React,{useState} from 'react'
import axios from 'axios'
import {Button,Col, Row ,DatePicker, Space,message,Table} from 'antd'
export default function WorkInfo() {
const [work,setWork] = useState({})
const [date,setDate] = useState('')
const [show,setShow] = useState(false)

const [messageApi, contextHolder] = message.useMessage();
  const getWorkInfo = ()=>{
    axios.get("/api/work/info",{ 
          params: {
            date: date
        }
    }
  ).then((result) => {
    console.log(result.data.data)
    const data = JSON.parse(result.data.data);
    if(data == null){
      messageApi.open({
        type: 'warning',
        content: '数据库没有找到这天的工作信息',
      });
    }
    setWork(data)
    setShow(true)

    }).catch((err) => {
      messageApi.open({
        type: 'error',
        content: '出错了',
      });
    });
 }

 const onChange =(date, dateString)=>{
    setDate(dateString)
    console.log(dateString)
    console.log(work)
 }



 const columns = [
  {
    title: 'Id',
    dataIndex:'id',
    key:'id'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
   
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Total Hour',
    dataIndex: 'totalHour',
    key: 'totalHour',
  },
  {
    title: 'Income',
    dataIndex: 'income',
    key: 'income'
  }
  
];



  return (
    <>
     {contextHolder}
    <Row>
      <Col span={8}>
        <Space direction="vertical">
            <DatePicker onChange={onChange} />
        </Space>

      </Col>
      
      <Col span={8} offset={8}>
        <Button onClick={getWorkInfo} type="primary">click</Button>
      </Col>

  
    </Row>
    { show?  <Row style={{marginTop:'50px'}}> <Table columns={columns} dataSource={[work]} /> </Row> : ''}
    </>
  )
}
