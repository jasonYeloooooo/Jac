import dayjs from 'dayjs'
import React, { useState ,useCallback} from 'react'
import { Button,List,CheckList,DatePickerView,Toast} from 'antd-mobile'
import axios from 'axios'



export default function Work(){
  const [val, setVal] = useState()
  const [firstShiftStart,setFirstStart] = useState()
  const [firstShiftEnd,setFirstEnd] = useState()
  const [secondShiftStart,setSecondStart] = useState()
  const [secondShiftEnd,setSecondEnd] = useState()
  const [start,setStart] = useState(true)
  const [end,setEnd] = useState(false)
  const [shiftStart,setShiftStart] = useState()
  const [shiftEnd,setShiftEnd] = useState()
  const [first,setFirst] = useState(true)
  const [second,setSecond] = useState(false)
  const now = new Date()


  
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


  const labelRenderer = useCallback((type: string, data: number) => {
    switch (type) {
      case 'year':
        return data + '年'
      case 'month':
        return data + '月'
      case 'day':
        return data + '日'
      case 'hour':
        return data + '时'
      case 'minute':
        return data + '分'
      case 'second':
        return data + '秒'
      default:
        return data
    }
  }, [])


  
  return (
    
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
    
    <List header='工作时间'>
      <CheckList  defaultValue={['First']} onChange={val => {
              if(val[0]==="First"){
                setFirst(true)
                setSecond(false)

                setShiftStart(firstShiftStart)
                setShiftEnd(firstShiftEnd)
                console.log("First")
              }
              if(val[0]==="Second"){
                setFirst(false)
                setSecond(true)
                setShiftStart(secondShiftStart)
                setShiftEnd(secondShiftEnd)
                console.log("second")
              }
              if(val[0]==="Break") {
                
                console.log("not good")
              }
            }}>
            <CheckList.Item value='First'>First Shift</CheckList.Item>
            <CheckList.Item value='Second'>Second Shift</CheckList.Item>
            <CheckList.Item  value='Break'>break</CheckList.Item>

      </CheckList>
    </List>

   
      <List header='休息时间'>
        <CheckList  defaultValue={['start']} activeIcon={<div /> }onChange={val => {
              if(val[0]==="start"){
                setStart(true)
                setEnd(false)
                console.log("start")
              }
              if(val[0]==="end") {
                setStart(false)
                setEnd(true)
                console.log("end")
              }
            }}>
            <CheckList.Item value='start'><div>开始 <span style={{float: "right"}}>{shiftStart}</span></div></CheckList.Item>
            <CheckList.Item value='end'><div>结束 <span style={{float: "right"}}>{shiftEnd}</span></div></CheckList.Item>
       </CheckList>
     
      </List> 



   
      <DatePickerView
          visible={true}
          defaultValue={now}
          precision='minute'
          onConfirm={val => {
            Toast.show(val.toString())
          }}
          renderLabel={labelRenderer}
          onChange={val=>{ 
            const date = new Date(val)
            const d = dayjs(date)
            setVal(d.format('YYYY-MM-DD'))
            console.log(d.format('YYYY-MM-DD'))
            console.log(d.format('HH:mm:ss'))

            if(first){
              if(start){setFirstStart(d.format('HH:mm:ss'));setShiftStart(d.format('MM月DD日 HH:mm:ss'))}
              else if(end){ setFirstEnd(d.format('HH:mm:ss'));setShiftEnd(d.format('MM月DD日 HH:mm:ss'))}
            }
            else if(second){
              if(start){setSecondStart(d.format('HH:mm:ss'));setShiftStart(d.format('MM月DD日 HH:mm:ss'))}
              else if(end){ setSecondEnd(d.format('HH:mm:ss'));setShiftEnd(d.format('MM月DD日 HH:mm:ss')) }
            }
           
          
          
          }}
        />
       


       <Button size='middle' color='primary' onClick={submitWork}>
            Middle
          </Button>










    </div>
  )
}
