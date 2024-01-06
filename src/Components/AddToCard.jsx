import React, {useState} from 'react'

export default function AddToCard({text, setAddToCardObj, AddToCardObj}) {
    const [addToCard, setAddToCard] = useState(false)
    const [inputText, setInputText] = useState("")
    const style ={
        display : "flex",
        flexDirection : "row",
        gap: "0.5rem",
        marginBottom: "0.25rem"
    }
    const style2 = {
        padding: "5px 10px",
        color: "#fff",
        backgroundColor: "#015B7E",
        borderRadius : "5px",
        border: "none"
    }

    function changeHandler(e){
        setInputText(e.target.value)
    }

    function handleClick(){
        setAddToCardObj((prev)=>{
            if(text === "Join"){
                return {
                    ...AddToCardObj,
                    Join: inputText
                }
            }
            else if(text === "Members"){
                return {
                    ...AddToCardObj,
                    Members: inputText
                }
            }
            else if(text === "Labels"){
                return {
                    ...AddToCardObj,
                    Labels: inputText
                }
            }
            else if(text === "Checklist"){
                return {
                    ...AddToCardObj,
                    Checklist: inputText
                }
            }
            else{
                return {
                    ...AddToCardObj,
                    Cover: inputText
                }
            }
        })
        setAddToCard(false)
    }

  return (
        <>
        {
            !addToCard
            ? 
                <button className="model-flxrgt-butt" onClick={()=> setAddToCard(prev => !prev)}>
                    + 
                    <span>{text}</span>
                </button>
            : <div className='add-to-card-input' style={style}>
                <input 
                    type='text'  
                    value={inputText}
                    onChange={changeHandler}
                    />
                <button onClick={handleClick} style={style2}>Add</button>
            </div>
        }
        </>
  )
}
