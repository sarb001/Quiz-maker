
import React, { useState } from "react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Input } from "./ui/input"
import { SingleMcqProps } from "../lib/Types"

export const QuizCreation = () => {

    // const [NewTitle, setNewTitle] = useState('');
    const [newid, setnewid] = useState(1);
    const [NewMcq, setnewMcq] = useState<SingleMcqProps[]>([
        { id: 0, question: "", ansoptions: [{ id: 0, value: "" , placeholder : "" }] }
    ]);

    const Questionhandler = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newques = e.target.value;
        console.log('ques value -', newques);
        console.log('index', index);
        setnewMcq(prev => prev.map(i => i?.id === index ? { ...i, question: newques } : i));
    }

    const inputoptionhandler = (e: React.ChangeEvent<HTMLInputElement>, optindex: number,quesindex:number) => {
        console.log('quesindex | optindex- ', quesindex,optindex); 
        const newval = e.target.value;
        console.log('new val=', newval);

        setnewMcq(prev => prev.map(i => i?.id === quesindex ? { ...i, ansoptions: i?.ansoptions.map(i => i?.id === optindex ? 
            {...i , value : newval } 
            : i ) } 
        : i))
    }

    //  add options more radio
    const MoreHandleOptions = (qindex: number) => {

        const newinput = {
            id: newid,
            value: ""
        }

        setnewid(prev => prev + 1);
        setnewMcq((prev) =>
            prev.map((q) =>
                q?.id === qindex ? { ...q, ansoptions: [...q.ansoptions, newinput] } : q
            )
        )
    }

    const NextQuestionHandler = () => {
        setnewid(prev => prev + 1);
        setnewMcq(prev => [...prev, {
            id: newid,
            question: "",
            ansoptions: [{id : 0 , value : "" }]
        }])
    }

    const checkallhandler = () => {
        console.log('check all ', NewMcq);
    }

    return (
        <div className="flex justify-center">

            <Card className="w-[500px] p-4">

                {NewMcq && NewMcq?.map(q => {
                    return (
                        <div key={q?.id}>
                            <div>
                                <Input type="text"
                                    onChange={(e) => Questionhandler(e, q?.id)} value={q?.question || ""}
                                    placeholder="Enter Question..." />
                            </div>

                            <div>
                                <div>

                                    {q?.ansoptions?.map((i, index) => {
                                        return (
                                            <div key={index} >

                                                <div className="flex items-center justify-center">
                                                    <div className="pr-5"> {index + 1})  </div>

                                                    <div className="py-2">
                                                        <Input type="text"
                                                            value={i?.value || "" }
                                                             placeholder={` Enter ${i?.id + 1} Option `}
                                                            onChange={(e) => inputoptionhandler(e,i?.id,q?.id)}
                                                        />
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                        )
                                    })}

                                </div>

                                <div className="py-4">
                                     <Button onClick={() => MoreHandleOptions(q?.id)}> Add Options  </Button>
                                </div>

                            </div>
                        </div>
                    )
                })}

                <div className="flex justify-center">
                    <Button className="bg-red-600 px-8" variant="outline" onClick={NextQuestionHandler}> 
                        Add Question+ </Button>
                </div>

                <div className="flex justify-end">
                    <Button className="bg-blue-600" onClick={checkallhandler}> Preview </Button>
                </div>

            </Card>

        </div>
    )
}


{/* <Card className="w-[500px] p-4">

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

                    <div className="flex justify-center">
                        <Button className="bg-red-600" variant = "outline" onClick={NextQuestionHandler}> Next Question </Button>
                    </div>
                </div>

           </Card> */}

{/*
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

                    <div className="flex justify-center">
                        <Button className="bg-red-600" variant = "outline" onClick={NextQuestionHandler}> Next Question </Button>
                    </div>
                </div>
            */}

