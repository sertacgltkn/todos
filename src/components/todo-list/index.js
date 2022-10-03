import React, { useState, useEffect } from "react";
import classes from "./style.module.css";       //classes ile module.css importu gerçekleştirildi.
import Button from "../button";

const url = "https://jsonplaceholder.typicode.com/todos";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState();
  

  useEffect(() => {                         //API'lere istek atmak için önerilen yöntem useEffect hookudur.
    fetch(url)                              // fetch url ile çağrı yaptık.            
      .then((response) => response.json())  //gelen response'u json'a çevirdik.
      .then((todos) => {                    // jsonu todos state'ina atadık.
        setTodos(todos);                    // state'deki değişiklikleri setTodos state'ine atadık.
      }).catch(err => {                     // herhangi bir hatada catch'e düşecek olan error methodu yazıldı.                
        console.log(err)
      })
  }, []);

  const renderThead = () => {
    return (
    <thead>
            <tr>
            <th>
                ID
            </th>
            <th>
                Başlık
            </th>
            <th>
                    Durumu
            </th>
            <th>
                    Aksiyon
            </th>
            </tr>
        </thead>
  )}

  const remove = (todo) => {
    if (window.confirm("Silmek üzeresiniz emin misiniz?")) {
      setTodos(prev => {
        return prev.filter(x => x.id != todo.id)
      })
    }
  }

  const edit = (todo) => {
    setSelectedTodo(todo);
    

  }

  const renderTbody = () => {
    return (
      <tbody>
        {todos.slice(0, 15).map((todo, index) => (         /* önce state olan todos'umuzdan slice methodunun sağladığı aralık parametresi ile
                                                            0 ile 15 arasında göstereceğimiz sayfaadki madde sayısını belirttik. */   
            <tr key={index}>                                   {/* map ile de ekrana yazdırma hazırlığını yaptık  */}
                <td>                                            {/* index'den sonraki mor parantez aslında return ile aynı işlevi görür */} 
                    {todo.id}
                </td>
                <td>
                {todo.title}
                </td>
                <td>
                {todo.completed ? "tamamlandı" : "yapılacak"}
                </td>
                <td>
                    <button className={`btn btn-sm btn-danger ${classes.actionButton}`}
                            onClick={() => remove(todo)}>
                        sil    
                    </button>
                    <button className="btn btn-sm btn-warning" 
                            onClick={() => edit(todo) }>
                    düzenle
                    </button>
                </td>
            </tr>                                                
                                                     
        ))}                                                     
            
        </tbody>
  )}

      const renderEditForm = () => {
        return (
          <div>
            <input type={"text"}/>
            <input type="check"/>
            <button onClick={() => setSelectedTodo(todos)} className="btn btn-sm btn-success">Kaydet</button>
            <button onClick={() => setSelectedTodo(undefined)} className="btn btn-sm btn-info">Vazgeç</button>
          </div>
        )
      }

  return (
    <div className= {`${classes.container} container`}> {/* hazırladığımız style class'ını containera işliyoruz. */}
    {selectedTodo && renderEditForm()}
    <table className="table">
      {renderThead()}
      {renderTbody()}
      
        
        </table>                                        
                                                               
    </div>
  );
};

export default TodoList;
