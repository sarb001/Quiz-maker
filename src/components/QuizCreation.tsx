import React, { useState }  from "react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Input } from "./ui/input"
import { QuizOptions } from "../lib/Types"

export const QuizCreation = () => {

    const[NewQuestion,setNewQuestion] = useState('');
    const[NewTitle,setNewTitle] = useState('');
    const[newid,setnewid] = useState(1);

    const[AllValues,setAllValues] = useState<Record<string,string>>({});
    const[newoption,setnewoption] = useState<QuizOptions []>([{
        id : 0 , value : ""
    }])

    const Questionhandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log('ques value -',e.target.value);
        setNewQuestion(e.target.value)                                              
    }

    const inputoptionhandler = (e:React.ChangeEvent<HTMLInputElement>,index:number) => {
        console.log('index- ',index);
        const newval  = e.target.value;
        console.log('new val=',newval);
        setnewoption(prev => prev.map(i => i?.id === index ? { ...i , value : newval } : i ));

        setAllValues(prev => ({
            ...prev,
            [index] : newval
        }))
    }

    const MoreHandleOptions = () => {
        const newinput = {
            id : newid,
            value  : ""
        } 
         setnewid(prev => prev + 1);
         setnewoption(prev => [...prev,newinput])  
    }

    const NextQuestionHandler = () => {
        console.log('handler -',AllValues)
    }

    return (
        <div className="flex justify-center">
           <Card className="w-[500px] p-4">

                <div  className = "px-14 grid justify-center gap-6">
                    <Input type = "text" className="w-[400px]" 
                    value = {NewTitle} onChange={(e) => setNewTitle(e.target.value)}

                    placeholder = "Type Quiz Title here" />
                    <Input type = "text" 
                    onChange={(e) => Questionhandler(e)}  value = {NewQuestion}
                    placeholder="Enter Question..." /> 

                    <div>
                        {newoption?.map((i) => {
                            return (
                                <div key = {i?.id} >

                                    <div className="flex items-center justify-center">
                                        <div className="pr-5"> {i.id + 1})  </div>

                                        <div className="py-2">
                                            <Input type = "text"  
                                            value  = {i?.value || ""}
                                            onChange = {(e) => inputoptionhandler(e,i?.id)}
                                            />
                                        </div>
                                    </div>
                                 </div>
                            )
                        })}
                    </div>

                    <div>
                                        <Button onClick={MoreHandleOptions}> Add Options  </Button>
                    </div>

                    <div>
                        <Button onClick={NextQuestionHandler}> Next Question </Button>
                    </div>
                </div>
           </Card>
        </div>
    )
}