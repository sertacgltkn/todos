renderHeader();

const todosUrl = "https://jsonplaceholder.typicode.com/todos";
const root = document.querySelector("#root");
const editModal = document.querySelector("#editModal");
let todos = [];
let todo;

// default olarak ayarlayacağımız sayfanın numarası
let current_page = 1;

//sayfa her render edildiğinde kaç adet listede kaç tane madde olacağını gösterir.
let rows = 15;

const renderTodos = (page = 1) => {   //sayfa render edildiğinde ilk sayfa görünecek
  root.innerHTML = "";
  const table = document.createElement("table");
  table.setAttribute("class", "table table-hover");

  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th scope="col" id="id-sorting"><button id="id-button1" type="button" class="btn btn-success">ID &dArr;</button> <button id="id-button2" type="button" class="btn btn-success">ID &uArr;</button></th>
      <th scope="col">Başlık</th>
      <th scope="col" id="userid-sorting"><button id="userid-button1" class="btn btn-success" >User ID &dArr;</button> <button id="userid-button2"class="btn btn-success" >User ID &uArr;</button></th>
      <th scope="col">Durum</th>
      <th scope="col"></th>
    </tr>
  `;
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  const renderItem = (item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.userId}</td>
      <td>${item.completed ? "Tamamlandı" : "Yapılacak"}</td>
      <td>
        <button class="btn btn-xs btn-danger remove" data-id=${
          item.id
        }>Sil</button>
        <button class="btn btn-xs btn-warning edit" data-id=${
          item.id
        }>Düzenle</button>
      </td>
    `;
    tbody.appendChild(tr);
  };
 
  // şu anki sayfanın 1 eksiği örneği 1. sayfaysa 0
  page--;

  // 10*0 = 0;
  let start = rows * page;
  console.log({ start });
  let end = start + rows;
  // 0 + 10 = 10;
  console.log({ end });
  // 0. index ve 10.index arası gösterilecek.
  // hangi seçili sayfadaysak ona göre render ediliyor.
  let paginatedItems = todos.slice(start, end);
  paginatedItems.forEach((item) => {
    renderItem(item);
  });

  table.appendChild(tbody);
  root.append(table);

  document.querySelectorAll(".remove").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = Number(e.currentTarget.getAttribute("data-id"));
      if (confirm("kaydı silmek istediğinize emin misiniz?")) {
        todos = todos.filter((x) => x.id !== id);
        renderTodos(current_page);
      }
    });
  });

  document.querySelectorAll(".edit").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = Number(e.currentTarget.getAttribute("data-id"));
      todo = todos.find((todo) => todo.id == id);
      editModal.querySelector("#title").value = todo.title;
      editModal.querySelector("#completed").checked = todo.completed;
      editModal.style.display = "block";
      editModal.classList.add("show");
    });
  });
  //id'ye göre sıralama
  document.querySelector("#id-button2").addEventListener("click", () => {
    todos.sort((a, b) => b.id - a.id);
    renderTodos(current_page);
    console.log(todos);
  });
  document.querySelector("#id-button1").addEventListener("click", () => {
    todos.sort((a, b) => a.id - b.id);
    renderTodos(current_page);
    console.log(todos);
  });

  //userid'ye göre sıralama
  document.querySelector("#userid-button1").addEventListener("click", () => {
    todos.sort((a, b) => a.userId - b.userId);
    renderTodos(current_page);
    console.log(todos);
  });
  document.querySelector("#userid-button2").addEventListener("click", () => {
    todos.sort((a, b) => b.userId - a.userId);
    renderTodos(current_page);
    console.log(todos);
  });
};

//Sayfa Numaralandırma
document.querySelectorAll(".page-link").forEach((btn) => {
  btn.addEventListener("click", () => {
    let data_id = btn.getAttribute("data-id");
    current_page = Number(data_id);
    renderTodos(current_page);
  });
});

editModal.querySelector("#save").addEventListener("click", () => {
  todo.title = editModal.querySelector("#title").value;
  todo.completed = editModal.querySelector("#completed").checked;
  const index = todos.findIndex((t) => t.id == todo.id);
  todos[index] = todo;
  renderTodos();
  editModal.style.display = "none";
  editModal.classList.remove("show");
});

editModal.querySelectorAll(".close").forEach((button) => {
  button.addEventListener("click", () => {
    editModal.style.display = "none";
    editModal.classList.remove("show");
  });
});

fetch(todosUrl)
  .then((resp) => resp.json())
  .then((data = []) => {
    todos = data;
    renderTodos();
  })
  .catch((error) => {
    errorLogger(error);
  });

// sıralama ödevi algoritması
// table thead kısmındaki sıralama yapılacak kolonlara event listener eklenecek.
// event listener hangi kolon için tıklanıyorsa
// sort metodu kullanılarak sıralama yapılacak
// sıralanmış todos'todus içerisine atılacak
// renderTodos metodu çalıştırılacak.
