document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const res = await fetch("users.json");
  const data = await res.json();

  const user = data.users.find(u => u.username === username);

  if(!user){
    alert("User not found");
    return;
  }

  if(user.password !== password){
    alert("Wrong password");
    return;
  }

  if(!user.approved){
    alert("Account not approved yet");
    return;
  }

  localStorage.setItem("user", username);
  window.location.href = "inde.x.html";
});
