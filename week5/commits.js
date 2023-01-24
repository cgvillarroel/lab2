function get_commit_info() {
  data = [
    {
      name: "Commit 1",
      info: "Placeholder details about commit 1"
    },
    {
      name: "Commit 2",
      info: "Placeholder details about commit 2"
    },
    {
      name: "Commit 3",
      info: "Placeholder details about commit 3"
    }
  ]

  // simulate waiting for server response
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

async function generate_html() {
  commits = await get_commit_info();
  newHTML = "";
  for (commit of commits) {
    newHTML +=
      `
      <h3>${commit.name}</h3>
      <p>${commit.info}</p>
      `;
  }
  return newHTML;
}

async function update_html() {
  document.getElementById("commits").innerHTML = await generate_html();
}

update_html();
