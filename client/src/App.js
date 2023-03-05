import React ,{useState} from 'react'


 let add = 0;

function App() {
    let array = ["https://vocal.media/education/what-is-full-stack-developer",
               "https://vocal.media/education/how-to-become-a-front-end-developer-3qi45n0gkr",
               "https://vocal.media/horror/the-mystery-of-the-haunted-house-a-spooky-adventure-for-brave-kids",
               "https://vocal.media/horror/the-mystery-of-the-haunted-house-a-spooky-adventure-for-brave-kids-chapter-2",
               "https://vocal.media/horror/the-mystery-of-the-haunted-house-a-spooky-adventure-for-brave-kids-chapter-3",
               "https://vocal.media/horror/the-mystery-of-the-haunted-house-a-spooky-adventure-for-brave-kids-chapter-4",
               "https://vocal.media/horror/the-mystery-of-the-haunted-house-a-spooky-adventure-for-brave-kids-chapter-5",
              "https://vocal.media/horror/the-mystery-of-the-haunted-house-a-spooky-adventure-for-brave-kids-chapter-6",
              "https://vocal.media/horror/the-mystery-of-the-haunted-house-a-spooky-adventure-for-brave-kids-chapter-7-the-treasure-hunt"
              ];
  const [count,setCount]= useState(0);
  const [url,setUrl] = useState(array[0]);
  const [hours,setHours]= useState("");
  const [min,setMin]= useState("");
  const [sec,setSec]= useState("");
  const [ampm,setampm]= useState("");
  const [on,setOn] = useState(false);
  const [button,setButton] = useState(false);

              // console.log("array",array);
             
const viewdata =(data)=>{
  
              
             if(add <= 8){
             setUrl(array[add]);  
             add++;          
               }
               else{
                 add = 0 ;
               }
              }
const handleclick = ()=>{
  setButton(true);
  setOn(true);
  if(count === 0){

                    setTimeout(viewdata,30000);
}
                    setInterval(viewdata,30000);
  }

  

setInterval(()=>{


var hh = new Date().getHours();
var mm = new Date().getMinutes();
var ss = new Date().getSeconds();
var am =(hh>=12)?"PM":"AM";
setampm(am);

//convert 24 UST to 12 UST
if(hh>=12){
  hh=hh-12;
}

   hh = (hh<10)?'0'+hh : hh;
   mm = (mm<10)?'0'+mm : mm;
   ss = (ss<10)?'0'+ss : ss;
   setHours(hh);
   setMin(mm);
   setSec(ss);
})

;

  return (
    <div className="App">

      <button className='button' onClick={()=>{handleclick()}} disabled={button} style={{color:"white",border:"2px solid transparent"
                                                   ,backgroundColor:"red",fontWeight:"bolder",fontSize:'25px'
                                                    ,borderRadius:'7px',padding:'5px',marginLeft:"30%",marginTop:'30px',cursor:"pointer"}}>
         click me see a magic
      </button><br/><br/>
      &nbsp; &nbsp; &nbsp; &nbsp;{on ? <span style={{marginLeft:"30%",fontSize:'30px',fontWeight:"bolder",}}>{hours}:{min}:{sec}</span>:""}
      <br/>
       <iframe style={{height:"90vh",width:"100%"}} src={url} title="description"></iframe>
    </div>
  );
}

export default App;
