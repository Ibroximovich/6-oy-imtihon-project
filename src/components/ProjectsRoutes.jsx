import React, { useState } from 'react'
import {Text,Button, Input} from "./index"
import { DeleteIcon, DoneIcon, EditIcon, FixIcon } from '../assets/icon'

const ProjectsRoutes = ({claslist,title}) => {


    const [isOfline,setIsOfline] = useState(true)
    const [Products,setUser] = useState(JSON.parse(localStorage.getItem("Products")) || [])
    const [isModal, setIsModal] = useState(false);
    const [chooseImg, setChooseImg] = useState("");
    const [editId, setEditId] = useState(null);

    function handleSubmit(e){
            setIsModal(false)
            e.preventDefault()
            let newUser ={
                id:Products[Products.length - 1]?.id ? Products[Products.length - 1].id + 1 : 1,
                name:e.target.name.value,
                img:chooseImg,
                compliment:e.target.compliment.value,
                select:e.target.select.value,
                budjet:e.target.budjet.value

            }
            console.log(Products);
            
            Products.push(newUser)
            setUser(Products)      
            localStorage.setItem("Products", JSON.stringify(Products))
    }
    // delete part start 
    function DeleteBtn(ind){
        Products.splice(ind,1)
        setUser([...Products])
        localStorage.setItem("Products",JSON.stringify(Products))
    }
    // delete part end


function UpdateBtn(id) {
    const editItem = Products.find(item => item.id === id);
    if (editItem) {
        setEditId(id);
        setChooseImg(editItem.img);
        setIsModal(true);
        
        setTimeout(() => {
            document.querySelector("input[name='name']").value = editItem.name;
            document.querySelector("input[name='budjet']").value = editItem.budjet;
            document.querySelector("select[name='select']").value = editItem.select;
            document.querySelector("input[name='compliment']").value = editItem.compliment;
        }, 0);
    }
}


function handleSubmit(e) {
    e.preventDefault();
    setIsModal(false);

    let updatedUser = {
        id: editId ? editId : Products[Products.length - 1]?.id + 1 || 1,
        name: e.target.name.value,
        img: chooseImg,
        compliment:e.target.compliment.value,
        select: e.target.select.value,
        budjet: e.target.budjet.value
    };
    
    if (editId) {
        
        const updatedList = Products.map(item =>
            item.id === editId ? updatedUser : item
        );
        setUser(updatedList);
        localStorage.setItem("Products", JSON.stringify(updatedList));
        setEditId(null);
    } else {
        
        setUser([...Products, updatedUser]);
        localStorage.setItem("Products", JSON.stringify([...Products, updatedUser]));
    }
}

    return (
        <div className={`ml-[40px] mr-[47px] tables w-[92%] pt-[28px] pb-[22px] px-[22px] rounded-[20px] ${claslist}`}>
            <div id="wrapper" className={ isModal ? 'modal-wrapper scale-100 flex items-center justify-center fixed left-0 right-0 top-0 bottom-0 bg-[#00000097] backdrop-blur-[5px]' : "hidden"}>
                <div className="modal-inner rounded-md p-[30px] relative bg-white w-[500px]">
                <button onClick={() =>  setIsModal(false)} className='absolute right-2 top-1'>X</button>
                    <form  onSubmit={handleSubmit} autoComplete='off' className='flex flex-col gap-[20px]'>
                        <label>
                            <div  className='w-[100px] h-[100px] flex items-center justify-center border-[1px] border-black rounded-[20px] mx-auto'>
                                <img className='w-full h-[98%] rounded-[20px]' src={chooseImg ||<FixIcon/>} alt="logo" width={90} height={90} />
                                <Input onChange ={(e) => setChooseImg(URL.createObjectURL(e.target.files[0]))} classList={"hidden !w-[100px] !h-[100px]"} placeholder={"New img"} type={"file"} name={"img"}/>  
                            </div>
                        </label>
                        <Input placeholder={"Proeckt name"} type={"text"} name={"name"} classList={"!border-[2px] !border-black !text-black"}/>
                        <Input placeholder={"Budjet"} type={"number"} name={"budjet"} classList={"!border-[2px] !border-black !text-black"}/>
                        <select name='select'  className='w-full border-[2px] p-[15px] rounded-[20px] '>
                            <option value="Working">Working</option>
                            <option value="Canceled">Canceled</option>
                            <option value="Done">Done</option>
                        </select>
                        <Input placeholder={"Compliment"} type={"number"} name={"compliment"} classList={"!border-[2px] !border-black !text-black"}/>
                        <Button  classList={"!py-[15px] !text-[18px]"}>Add</Button>
                    </form>
                </div>
            </div>
            <div className={  " flex justify-between items-center"}>
                <div>
                <Text classlist={"!text-white !font-bold "}>{title.table}</Text>
                <div className={title.done ? "flex items-center" : "hidden"}>
                    <DoneIcon/>
                    <Text classlist={"!text[#A0AEC0] !text-[14px]"}>{title.done}</Text>
                </div>
                </div>
                <Button onClick={() =>  setIsModal(!isModal)} classList={  "!w-[100px]  font-bold"}>Add</Button>
            </div>
            <div className=' pr-[22px]'>
            <table className={`w-[100%] border-separate border-spacing-y-3 `}>
                <thead>
                <tr>
                    <th className="text-left px-[10px]">
                    <Text classlist="!text-[10px] !text-[#A0AEC0]">{title.autor}</Text>
                    </th>
                    <th className="text-left px-[20px]" >
                    <Text classlist="!text-[10px] !text-[#A0AEC0]">{title.function}</Text>
                    </th>
                    <th className="text-left px-[20px]">
                    <Text classlist="!text-[10px] !text-[#A0AEC0]">{title.status}</Text>
                    </th>
                    <th className="text-left px-[20px]">
                    <Text classlist="!text-[10px] !text-[#A0AEC0]">{title.employed}</Text>
                    </th>
                </tr>
                </thead>
                {
                    Products.map((item,ind) =>(
                <tbody key={item.id}>        
                    <tr>
                        <td className="border-t border-b border-[#56577A] py-[12px] px-[10px]">
                        <div className="flex items-center gap-3 px-[10px]">
                            <img src={item.img} alt="logo" width={50} height={50} />
                            <div>
                            <Text classlist="!text-[14px] !text-white">{item.name}</Text>
                            </div>
                        </div>
                        </td>
                        <td className="border-t border-b border-[#56577A] py-[12px] px-[20px]">
                        
                            <Text classlist="!text-[14px] !text-white">{ `$${item.budjet} `}</Text>     
                        </td>
                    <td className="border-t border-b border-[#56577A] py-[12px] px-[20px]">
                         <Text> {item.select}</Text>
                        </td>
                        <td className="border-t border-b border-[#56577A] py-[12px] px-[20px]">
                        <Text classlist={"!text-[14px] !text-white !font-bold"}>{item.compliment}%</Text>
                          <div className='w-[125px] border-[3px] border-[#2D2E5F] rounded-[5px]'>
                                <div  style={{  width: `${item.compliment}%`,backgroundColor: '#0075FF',height: '3px'}}></div>
                            </div>  
                        </td>
                        <td className="border-t border-b border-[#56577A] py-[12px] pl-[50px] px-[20px]">
                            <button  onClick={() => UpdateBtn(item.id)} className='text-[#A0AEC0] pr-[20px] '><EditIcon/></button>
                            <button onClick={() => DeleteBtn(ind)}  className='text-[#A0AEC0] '><DeleteIcon/></button>
                        </td>
                    </tr>
                </tbody>
                    ))
                }
               
            </table>
            </div> 
        </div>
    
  )
}

export default ProjectsRoutes
