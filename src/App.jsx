import {use, useState} from 'react';

function Todo() {
  const [userTitle, setTitle] = useState('')
  const [userDescription, setDecription] = useState('')
  const [userTodo, setTodo] = useState([])

  const addTodo = (event)=>{
    event.preventDefault();
    if (userTitle.trim() !== "") {

      console.log(userTitle);
      console.log(userDescription);
      
  
      userTodo.push({
        userTitle,
        userDescription
      })
  
      setTodo([...userTodo])
  
      setTitle("")
      setDecription("") 
     
    }
    else{
      alert("Can not generate Empty todo")
    }

  }


  const deleteTodo = (index)=>{
  console.log("Delete Butoon clicked", index);

  userTodo.splice(index, 1)
  setTodo([...userTodo])
  
  }
  
  const editTodo = (index)=>{
    console.log(`edit button clicked`, index)
    
    const updateEditedTodo = prompt("Update your Todo")
    userTodo[index].userTitle = updateEditedTodo
    setTodo([...userTodo])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">My Tasks</h1>
          <p className="text-slate-600">Keep track of your daily tasks and stay organized</p>
        </div>

        {/* Form */}
        <form onSubmit={addTodo} className="bg-white rounded-lg shadow-md p-6 mb-8 border border-slate-200">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Task Title</label>
              <input 
                onChange={(practice)=>setTitle(practice.target.value)} 
                value={userTitle} 
                type="text" 
                placeholder='Enter your task title' 
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
              <input 
                onChange={(practice)=>setDecription(practice.target.value)} 
                value={userDescription} 
                type="text" 
                placeholder='Enter task description' 
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 shadow-sm hover:shadow-md"
            >
              Add Task
            </button>
          </div>
        </form>

        {/* Todo List */}
        <div>
          {userTodo.length > 0 ? (
            <div className="space-y-4">
              {userTodo.map((userItem, index)=>{
                return (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:shadow-lg transition duration-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mr-3">
                            {index + 1}
                          </span>
                          <h3 className="text-lg font-semibold text-slate-800">{userItem.userTitle}</h3>
                        </div>
                        <p className="text-slate-600 ml-11">{userItem.userDescription}</p>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-4 ml-11">
                      <button 
                        className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-lg transition duration-200"
                        onClick={()=>{
                          editTodo(index)
                        }}
                      >
                        Edit
                      </button>
                      <button 
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition duration-200"
                        onClick={()=>{
                          deleteTodo(index)
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-12 border border-slate-200 text-center">
              <div className="text-slate-400 mb-3">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">No tasks yet</h3>
              <p className="text-slate-600">Create your first task to get started</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


export default Todo