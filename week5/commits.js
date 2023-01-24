function get_commit_info() {
  return {
    name: "Commit 1",
    info: "Placeholder details about commit"
  };
}

function generate_html() {
  commit_obj = get_commit_info();
  newHTML =
    `
    <h3>${commit_obj.name}</h3>
    <p>${commit_obj.info}</p>
    `;
  return newHTML;
}

document.getElementById("commits").innerHTML = generate_html();
