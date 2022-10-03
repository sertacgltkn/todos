import React, { useState, useEffect } from "react";
import classes from "./style.module.css";       //classes ile module.css importu gerçekleştirildi.

const url = "https://jsonplaceholder.typicode.com/todos";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {                         //API'lere istek atmak için önerilen yöntem useEffect hookudur.
    fetch(url)                              // fetch url ile çağrı yaptık.            
      .then((response) => response.json())  //gelen response'u json'a çevirdik.
      .then((todos) => {                    // jsonu todos state'ina atadık.
        setTodos(todos);                    // state'deki değişiklikleri setTodos state'ine atadık.
      }).catch(err => {                     // herhangi bir hatada catch'e düşecek olan error methodu yazıldı.                
        console.log(err)
      })
  }, []);

  return (
    <div className={classes.container}> {/* hazırladığımız style class'ını containera işliyoruz. */}
    <table>
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
                    <button>
                        sil    
                    </button>
                    <button>
                    düzenle
                    </button>
                </td>
            </tr>                                                
                                                     
        ))}                                                     
            
        </tbody>
        </table>                                        
                                                               
    </div>
  );
};

export default TodoList;
