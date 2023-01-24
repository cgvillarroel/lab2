function get_commit_info() {
  return [
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
  ];
}

function generate_html() {
  commits = get_commit_info();
  newHTML = ""
  for (commit of commits) {
    newHTML +=
      `
      <h3>${commit.name}</h3>
      <p>${commit.info}</p>
      `;
  }
  return newHTML;
}

document.getElementById("commits").innerHTML = generate_html();
