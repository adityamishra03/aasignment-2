class WebSeries {
  constructor(title, director, stars, streaming) {
    this.title = title;
    this.director = director;
    this.stars = stars;
    this.streaming = streaming;
  }
  get serTitle() {
    return this.title;
  }
  set serTitle(title) {
    this.title = title;
  }
  get serDir() {
    return this.director;
  }
  set serDir(director) {
    this.director = director;
  }
  get serStar() {
    return this.stars;
  }
  set serStar(stars) {
    this.stars = this.stars;
  }
  get serStr() {
    return this.streaming;
  }
  set serStr(streaming) {
    this.streaming = streaming;
  }
}

let list_arr = [];

let form = document.querySelector(".container");
const taskList = document.querySelector(".collection");
loadEventListeners();

function loadEventListeners() {
  form.addEventListener("submit", onAdd);
  taskList.addEventListener("click", onDelete);
}
function onAdd(e) {
  let serTitle = document.getElementById("title").value.toUpperCase();
  let serDir = document.getElementById("director").value;
  let serStar = document.getElementById("stars").value;
  let serStr = document.getElementById("streaming").value;

  list1 = new WebSeries(serTitle, serDir, serStar, serStr);

  let list_obj = {
    title: serTitle,
    director: serDir,
    stars: serStar,
    streaming: serStr,
  };

  list_arr.push(list_obj);
  console.log(list_arr);
  if (list_arr.length >= 7) {
    alert("Only 6 lists are allowed!");
  } else {
    const newcard = document.createElement("DIV");
    newcard.className = "card";
    const newcardbody = document.createElement("DIV");
    newcardbody.className = "card-body";
    const newht = document.createElement("p");
    newht.className = "card-title";
    newht.innerText = list_arr[list_arr.length - 1].title;
    const newhd = document.createElement("p");
    newhd.className = "card-director";
    newhd.innerText = list_arr[list_arr.length - 1].director;
    const newhst = document.createElement("p");
    newhst.className = "card-stars";
    newhst.innerText = list_arr[list_arr.length - 1].stars;
    const newhstr = document.createElement("p");
    newhstr.className = "card-director";
    newhstr.innerText = list_arr[list_arr.length - 1].streaming;
    const btnRemove = document.createElement("INPUT");
    btnRemove.value = "Delete";
    btnRemove.type = "button";
    btnRemove.className = "del-btn";

    taskList.appendChild(newcard);
    newcard.appendChild(newcardbody);
    newcardbody.appendChild(newht);
    newcardbody.appendChild(newhd);
    newcardbody.appendChild(newhst);
    newcardbody.appendChild(newhstr);
    newcardbody.appendChild(btnRemove);
  }

  form.reset();
  e.preventDefault();
}
function onDelete(e) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      e.target.parentElement.parentElement.remove();
      resolve();
    }, 30000);
  });
}
