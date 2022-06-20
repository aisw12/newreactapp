import React,{useState,useEffect} from 'react';
const HookTwo=()=>{
const[booklist,UpdateBook]=useState(["HTML","css","Javascript","Bootstrap"])
const[message,UpdateMess]=useState("");
const deleteitem=(index)=>{
    UpdateMess(booklist[index] +" Book deleted successfully");
    booklist.splice(index,1);//a-b
    UpdateBook(booklist =>[...booklist]);//a=a
}
//add new element
const[newbook,Pickbook]=useState("")
const save=()=>{
    UpdateBook(booklist =>[...booklist,newbook]);
    UpdateMess(newbook +" added successfully");
    Pickbook("");//sending empty value to new book
}
const[allcomment,updateComment]=useState([]);
const getcomment=()=>{
   fetch("https://jsonplaceholder.typicode.com/comments")
   .then(response=>response.json())
   .then(dataArray=>{
       updateComment(dataArray)
   })
    
}
useEffect(()=>{
    getcomment();
},[true])
return(
   <div>
      <div>
          <div>
        <h2>useState(),spread operator,Single dimensional array</h2>
        <h1> Total Books:{booklist.length}</h1>
        <p>
                        <input type="text" 
                            onChange={obj=>Pickbook(obj.target.value)}
                            value={newbook}
                            className=" border-teal-600 border-2 rounded"
                        />
                        <button 
                            className='bg-slate-300 m-3 px-5 rounded'
                            onClick={save}>Save Book
                        </button>
                    </p>

        <p>{message}</p>
        <table className="table table-bordered shadow">
            <thead>
                <tr className="bg-light text-danger">
                    <th>Book id</th>
                    <th>Book name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    booklist.map((bname,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{bname}</td>
                                <td>
                                    <button onClick={deleteitem.bind(this,index)}
                                    className="btn btn-danger btn-sm">
                                      Delete  
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
          </div>
          <div className="row">
              <div className="'col-lg-12">
                  <h3 className="text-center">Total comment:{allcomment.length}useState(),useEffect() hooks example</h3>

              </div>
              {
                  allcomment.map((info,index)=>{
                    return(
                          <div className="col-lg-12 mb-4"key={index}>
                              <p className="p-4 rounded bg-light">{info.body}</p>
                              </div>
                      )
                  })
              }
          </div>


          </div> 

   </div>
)
}
export default HookTwo;