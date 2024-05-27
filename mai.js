fetch("https://jsonplaceholder.typicode.com/users") 
.then(vada => vada.json())
.then(API => {
    API.forEach(item => {
        let wrapper = document.createElement("div");
        let newId = document.createElement("h1");
        let newText = document.createElement("h2");
        let userText = document.createElement("h3");
        let newEmail = document.createElement("h3");
        wrapper.className = "box"
        wrapper.append(newId, newText,userText,newEmail)
        newId.textContent = item.id;
        userText.textContent = item.username;
        newText.textContent = item.name;
        newEmail.textContent = item.email;
        document.body.append(wrapper)
        
    });
})
.catch(xato => console.log("xato"))