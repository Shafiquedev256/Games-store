 import { Qualifier }  from "./cartQualifier"  
 type Props = { 
   data:{
      title: string,
      img: string,
      description: string,
      category: string,
      cost: string,
      trailer: string,
      platform: string,
      release: string,
      publisher: string,
      count:number
}[],
   setData: any
 }
 
 export const Cart_card = ({data,setData}:Props)=>{   
   
   const deleteItem = (title:string)=>{ 
  const filteredData = data.filter(item => item.title !== title);

  localStorage.setItem('cart',JSON.stringify(filteredData)) 
  setData(filteredData)
   }
   
  return(
    <>
    <div>
    {
      data.map(item=>{
        return(
 <section key={item.title} className="p-2 bg-white shadow-sm  my-4 mx-2 rounded">
    <div className="flex flex-row ">
    <img src={item.img} className="w-36 md:w-44 rounded"/>
    <div className="ml-2">
    <div className="text-sm text-gray-400">{item.title}</div>
    <div className="font-bold">{item.cost}</div>
    </div>
    </div>
    
    <div className="flex flex-row justify-between pt-1">
    <button className="btn bg-red-600 md:text-sm text-xs p-1 md:p-2" onClick={()=>{deleteItem(item.title)}}>remove</button> 
    <Qualifier data={item} cart={data} setData={setData} del={deleteItem}/>
    </div>
    </section>
        )
      })
    }
    </div>

    </>
    )
}