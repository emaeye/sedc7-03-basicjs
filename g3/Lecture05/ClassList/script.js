function renderClass() {
  let title = document.getElementById("title");
  title.style.fontWeight = "bold";
  title.textContent = subject;

  let content = document.getElementById("content");
  let list = document.createElement("ul");
  content.appendChild(list);

  for (const student of students) {
    list.innerHTML +=`<li id="${student}" class="student">
        <a href="javascript:alert('Zdravo ${student}')">
          ${student}
        </a>
      </li>`;
  }

  // for (const student of students) {
  //   let listItem = document.createElement("li");
  //   let link = document.createElement("a");

  //   link.textContent = student;
  //   link.href = `javascript:alert('Zdravo ${student}')`;

  //   listItem.appendChild(link);
  //   list.id = student;
  //   list.className = "student";
  //   list.appendChild(listItem);
  // }
  
}

renderClass();