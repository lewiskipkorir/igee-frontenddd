function createPost() {
  const content = document.getElementById("postContent").value;
  if (!content) return;
  const feed = document.getElementById("feed");
  const post = document.createElement("article");
  post.classList.add("post");
  post.innerHTML = `<h3>You</h3><p>${content}</p>`;
  feed.prepend(post);
  document.getElementById("postContent").value = "";
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const chatWindow = document.getElementById("chatWindow");
  if (!input.value) return;
  const msg = document.createElement("div");
  msg.textContent = "You: " + input.value;
  chatWindow.appendChild(msg);
  input.value = "";
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
