import React, { useState,useEffect } from 'react'
import {Text,Button, Input} from "./index"
import { DeleteIcon, DoneIcon, EditIcon, MoreIcon } from '../assets/icon'
import { useContext } from 'react';
import { Context } from '../context/context';
import { Loaurent } from '../assets/images';


const Tables = ({claslist,title}) => {
const [User, setUser] = useState(JSON.parse(localStorage.getItem("User")) || []);
const now = new Date()
const day = String(now.getDate()).padStart(2,'0')
const month = String(now.getMonth()+1).padStart(2,'0')
const years = String(now.getFullYear()).slice(-2)
const nowDate = `${day}/${month}/${years}`
const [isModal, setIsModal] = useState(false);
const [chooseImg, setChooseImg] = useState("");
const [findUser, setFindUser] = useState(null);
const {search} = useContext(Context)

useEffect(() =>{
    if(search){
        let findSearch = User.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        setUser(findSearch)
    }
    else{
         setUser(JSON.parse(localStorage.getItem("User")) || []);
    }
},[search])
  


    function handleSubmit(e){
            setIsModal(false)
            e.preventDefault()
            let newUser ={
                id:User[User.length - 1]?.id ? User[User.length - 1].id + 1 : 1,
                name:e.target.name.value,
                email:e.target.email.value,
                img:chooseImg,
                nowDate:nowDate,
                select:e.target.select.value,
            }
            
            User.push(newUser)
            setUser(User)      
            localStorage.setItem("User", JSON.stringify(User))
    }


    // delete part start 
    function DeleteBtn(ind){
        User.splice(ind,1)
        setUser([...User])
        localStorage.setItem("User",JSON.stringify(User))
    }
    // delete part end

function UpdateBtn(id) {
    const user = User.find(u => u.id === id);
    setFindUser(user);
    setChooseImg(user.img);
    setIsModal(true);
}
function handleSubmit(e) {
    e.preventDefault();
    if (findUser) {
        const updatedUsers = User.map(u =>
            u.id === findUser.id
                ? {
                    ...u,
                    name: e.target.name.value,
                    email: e.target.email.value,
                    select: e.target.select.value,
                    img: chooseImg || u.img
                }
                : u
        );
        setUser(updatedUsers);
        localStorage.setItem("User", JSON.stringify(updatedUsers));
        setFindUser(null);
    } else {
        // Add mode
        const newUser = {
            id: User[User.length - 1]?.id ? User[User.length - 1].id + 1 : 1,
            name: e.target.name.value,
            email: e.target.email.value,
            select: e.target.select.value,
            img: chooseImg,
            nowDate: nowDate
        };
        const newList = [...User, newUser];
        setUser(newList);
        localStorage.setItem("User", JSON.stringify(newList));
    }

    setIsModal(false);
}

<form onSubmit={handleSubmit} autoComplete='off' className='flex flex-col gap-[20px]'>
    <Input
        placeholder="Name"
        type="text"
        name="name"
        defaultValue={findUser?.name || ""}
        classList="!border-[2px] !border-black !text-black"
    />
    <Input
        placeholder="Email"
        type="email"
        name="email"
        defaultValue={findUser?.email || ""}
        classList="!border-[2px] !border-black !text-black"
    />
    <select
        name="select"
        defaultValue={findUser?.select || "Manager"}
        className="w-full border-[2px] p-[15px] rounded-[20px]"
    >
        <option value="Manager">Manager</option>
        <option value="Programmer">Programmer</option>
        <option value="Executive">Executive</option>
        <option value="Designer">Designer</option>
    </select>
    <label>
        <div className='w-[100px] h-[100px] flex items-center justify-center border-[1px] border-black rounded-[20px] mx-auto'>
            <img
                className='w-full h-[98%] rounded-[20px]'
                src={chooseImg}
                alt="logo"
            />
            <Input
                onChange={e => setChooseImg(URL.createObjectURL(e.target.files[0]))}
                classList="hidden !w-[100px] !h-[100px]"
                placeholder="New img"
                type="file"
                name="img"
            />
        </div>
    </label>
    <Button classList="!py-[15px] !text-[18px]">
        {findUser ? "Update" : "Add"}
    </Button>
</form>
 
 function setOffline(id) {
  let updatedUsers = User.map(user =>
    user.id === id ? { ...user, isOffline: !user.isOffline } : user
  );
  setUser(updatedUsers);
}


  return (
     <div className={`ml-[40px] mr-[47px] tables w-[92%] pt-[28px] pb-[22px] px-[22px] rounded-[20px] ${claslist}`}>
        <div id="wrapper" className={ isModal ? 'modal-wrapper scale-100 flex items-center justify-center fixed left-0 right-0 top-0 bottom-0 bg-[#00000097] backdrop-blur-[5px]' : "hidden"}>
            <div className="modal-inner rounded-md p-[30px] relative bg-white w-[500px]">
            <button onClick={() =>  setIsModal(false)} className='absolute right-2 top-1'>X</button>
                <form  onSubmit={handleSubmit} autoComplete='off' className='flex flex-col gap-[20px]'>
                    <Input placeholder={"New name"} type={"text"} name={"name"} classList={"!border-[2px] !border-black !text-black"}/>
                    <Input placeholder={"New email"} type={"email"} name={"email"} classList={"!border-[2px] !border-black !text-black"}/>
                    <select name='select'  className='w-full border-[2px] p-[15px] rounded-[20px] '>
                        <option value="Manager">Manager</option>
                        <option value="Programmer">Programmer</option>
                        <option value="Executive">Executive</option>
                        <option value="Designer">Designer</option>
                    </select>
                    <label>
                        <div  className='w-[100px] h-[100px] flex items-center justify-center border-[1px] border-black rounded-[20px] mx-auto'>
                            <img className='w-full h-[98%] rounded-[20px]' src={chooseImg || Loaurent} alt="logo" width={90} height={90} />
                            <Input onChange ={(e) => setChooseImg(URL.createObjectURL(e.target.files[0]))} classList={"hidden !w-[100px] !h-[100px]"} title={"New img"} type={"file"} name={"img"}/>  
                        </div>
                    </label>
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
            <Button onClick={() =>  setIsModal(!isModal)} classList={ title.button ? "!w-[100px]  font-bold" : "hidden"}>Add</Button>
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
                User.map((item,ind) =>(
            <tbody key={item.id}>        
                <tr>
                    <td className="border-t border-b border-[#56577A] py-[12px] px-[10px]">
                    <div className="flex items-center gap-3 px-[10px]">
                        <img src={item.img} alt="logo" width={50} height={50} />
                        <div>
                        <Text classlist="!text-[14px] !text-white">{item.name}</Text>
                        <span className="text-[14px] text-[#A0AEC0] block">
                           {item.email}
                        </span>
                        </div>
                    </div>
                    </td>
                    <td className="border-t border-b border-[#56577A] py-[12px] px-[20px]">
                    <div className="flex flex-col">
                        <Text classlist="!text-[14px] !text-white">{item.select}</Text>
                        <span className="text-[#A0AEC0] text-[14px]">{item.select == "Manager" && "Organization" || item.select == "Programmer" && "Developer" || item.select == "Designer" && "UI/UX Design" 
                        || item.select == "Executive" && "Projects"}</span>
                    </div>
                    </td>
                   <td className="border-t border-b border-[#56577A] py-[12px] px-[20px]">
                        <Button
                            onClick={() => setOffline(item.id)}
                            classList={
                            !item.isOffline
                                ? "!w-[65px] !py-[2px] !bg-[#01B574]"
                                : "!w-[65px] !py-[2px] !bg-[#060B28BD] !border-[1px] !border-white"
                            }
                        >
                            {!item.isOffline ? "Online" : "Offline"}
                        </Button>
                    </td>

                    <td className="border-t border-b border-[#56577A] py-[12px] px-[20px]">
                    <Text>{item.nowDate}</Text>
                    </td>
                    <td className="border-t border-b border-[#56577A] py-[12px] pl-[50px] px-[20px]">
                        <button  onClick={() => UpdateBtn(item.id)} className='text-[#A0AEC0] pr-[20px] '><EditIcon/></button>
                        <button onClick={() => DeleteBtn(ind)}  className='text-[#A0AEC0] pr-[20px]'><DeleteIcon/></button>
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

export default Tables






