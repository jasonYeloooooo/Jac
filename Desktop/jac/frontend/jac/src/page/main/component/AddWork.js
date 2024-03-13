import React,{useState}from 'react'
import { Col, Row, TimePicker,Typography,Button,DatePicker} from 'antd';



export default function Add() {

  const [firstShift,setFirstShift] = useState([0,0])
  const [firstHour,setFirstHour] = useState(0)
  const [secondShift,setSecondShift] = useState([0,0])
  const [firstChoosed,setFirstChoosed] = useState(false)
  const [SecondChoosed,setSecondChoosed] = useState(false)
  const { Text } = Typography;

  // Function to calculate the week number
function getWeekNumber(date) {
  // Copy date so don't modify original
  date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
  // Get first day of year
  var yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  // Calculate full weeks to nearest Thursday
  var weekNumber = Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
  // Return the week number
  return weekNumber;
}

  const onchangeFirst = (time: Dayjs, timeString: string) => {
    let start = '2000,01,01 '+timeString[0]+':00'
    setFirstShift([timeString[0],timeString[1]])
    var time1 = new Date(start);
    var time2 = new Date('2000,01,01 '+timeString[1]+':00');
    var timeDiff = Math.abs(time2.getTime() - time1.getTime());

   var hoursDiff = Math.floor(timeDiff / (1000 * 3600));
   var minutesDiff = Math.floor(timeDiff / (1000 * 60));

   var result = hoursDiff + (minutesDiff%60)/60

    // setFirstHour(hoursDiff)
    setFirstHour(result)
    setFirstChoosed(true)
    console.log(firstShift)

  };

  const onchangeSecond = (time: Dayjs, timeString: string) => {
    let start = '2000,01,01 '+timeString[0]+':00'
    setFirstShift([timeString[0],timeString[1]])
    var time1 = new Date(start);
    var time2 = new Date('2000,01,01 '+timeString[1]+':00');
    var timeDiff = Math.abs(time2.getTime() - time1.getTime());

   var hoursDiff = Math.floor(timeDiff / (1000 * 3600));
   var minutesDiff = Math.floor(timeDiff / (1000 * 60));

   var result = hoursDiff + (minutesDiff%60)/60

    // setFirstHour(hoursDiff)
    setSecondShift(result)
    setSecondChoosed(true)
    console.log(secondShift)
  };
  
  const onChangeDate=(date, dateString)=>{
    console.log(date, dateString);
    
    let d = new Date(dateString)
    console.log(d.get) 
    // Calculate the week number
    var weekNumber = getWeekNumber(d);

// Output the week number
    console.log("Week number of the year:", weekNumber);
  }

 

  return (
    <div>
      <Row>
          <Col span={12} push={6}>
            <DatePicker onChange={onChangeDate} />
          </Col>
          <Col span={6} pull={12}>
            <Text>Date: </Text>
          </Col>
      </Row>

      <Row style={{marginTop: "20px"}}>
        <Col span={12} push={6}>
          <TimePicker.RangePicker  format="h:mm" onChange={onchangeFirst}  />    
        </Col>

       <Col span={6} pull={12}>
         <Text >First Shift: </Text>
       </Col>
       <Col span={6} push={0}>
          {firstChoosed? <Text > Total time: {firstHour}</Text>:''} 
       </Col>
    </Row>

  <Row style={{marginTop: "20px"}}>
    <Col span={12} push={6}>   
    <TimePicker.RangePicker  format="h:mm" onChange={onchangeSecond} />   
    </Col>
    <Col span={6} pull={12}>
    <Text >Second Shift: </Text>
    </Col>
    <Col span={6} push={0}>
          {SecondChoosed? <Text > Total time:{secondShift} </Text>:''} 
    </Col>
  </Row>  
  <Row style={{marginTop: "20px"}}>

      {firstChoosed&&SecondChoosed?<Text> totol hour: {secondShift + firstHour}</Text>:''}

    </Row>

    <Row style={{marginTop: "50px"}}>

      
      <Button type="primary" danger ghost>submit</Button>
      

    </Row>
    </div>
  )
}
