import dayjs from 'dayjs'
import React, { useState } from 'react'
import { CalendarPicker, Card ,Picker,Button} from 'antd-mobile'
import axios from 'axios'



export default function Work(){
  const day = dayjs()
  const [val, setVal] = useState(day.format("YYYY-MM-DD"))
  const [firstShiftStart,setFirstStart] = useState()
  const [firstShiftEnd,setFirstEnd] = useState()
  const [secondShiftStart,setSecondStart] = useState()
  const [secondShiftEnd,setSecondEnd] = useState()

  const [visible, setVisible] = useState(false)
  const selected =(Date)=>{
      const d = dayjs(Date)
      setVal(d.format('YYYY-MM-DD'))
      console.log(d.format('YYYY-MM-DD'))
  }

  const singleDate = new Date()

  const postData = {
        name: "jason",
        date: val,
        firstShiftStart,
        firstShiftEnd,
        secondShiftStart,
        secondShiftEnd
  };
  const  submitWork =async()=>{
    await axios.post("/api/work/add", postData,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
      )
    .then((result) => {
      console.log(result)
    }).catch((err) => {
       console.log("error")
      });
}

  //const chooseFirstShiftStart =(value)=>{console.log(firstStart)}
  
  const dateClick = ()=>{
    setVisible(true)
  }

  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
    
     
    <Card title="选择日期" onClick={dateClick}>{val}</Card>
        <CalendarPicker
          visible={visible}
          selectionMode='single'
          defaultValue={singleDate}
          onClose={() => setVisible(false)}
          onMaskClick={() => setVisible(false)}
          onConfirm={selected}
        />


    <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",flexWrap:"wrap",marginTop:"20px"}}>    
      <Picker
       columns={basicColumns}

        onConfirm={v => {
          let res = v[0]+':'+v[1]+':00'
          setFirstStart(res)
        }}
    >
      {(_, actions) => <Button onClick={actions.open}>choose the the first shift start</Button>}
    </Picker>
    {firstShiftStart}
        {" to "}
    {firstShiftEnd}
    <Picker
       columns={basicColumns}
        onConfirm={v => {
          let res = v[0]+':'+v[1]+':00'
          setFirstEnd(res)
        }}
    >
      {(_, actions) => <Button onClick={actions.open}>choose the the first shift end</Button>}
    </Picker>
   

    </div>

    <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",flexWrap:"wrap",marginTop:"10px"}}> 
         <Picker
       columns={basicColumns}

        onConfirm={v => {
          let res = v[0]+':'+v[1]+':00'
          setSecondStart(res)
        }}
    >
      {(_, actions) => <Button onClick={actions.open}>choose the the second shift start</Button>}
    </Picker>
   
    {secondShiftStart}
        {" to "}
    {secondShiftEnd}

    <Picker
       columns={basicColumns}

        onConfirm={v => {
          let res = v[0]+':'+v[1]+':00'
          setSecondEnd(res)
        }}
    >
      {(_, actions) => <Button onClick={actions.open}>choose the the second shift end</Button>}
    </Picker>
  
  </div>

  <Button block color='primary' size='large' style={{position: "relative",marginTop:"100px"}} onClick={submitWork}>
          submit
   </Button>

    </div>
  )
}

export const basicColumns = [
  [
    { label: '10', value: '10' },
    { label: '11', value: '11' },
    { label: '12', value: '12' },
    { label: '13', value: '13' },
    { label: '14', value: '14' },
    { label: '15', value: '15' },
    { label: '16', value: '16' },
    { label: '17', value: '17' },
    { label: '18', value: '18' },
    { label: '19', value: '19' },
    { label: '20', value: '20' },
    { label: '21', value: '21' },
    { label: '22', value: '22' },
    { label: '23', value: '23' },
  ],
  [
    { label: '00', value: '00' },
    { label: '10', value: '10' },
    { label: '15', value: '15' },
    { label: '20', value: '20' },
    { label: '25', value: '25' },
    { label: '30', value: '30' },
    { label: '35', value: '35' },
    { label: '40', value: '40' },
    { label: '45', value: '45' },
    { label: '50', value: '50' },
    { label: '55', value: '55' },





  ],
]