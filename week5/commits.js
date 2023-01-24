function get_commit_info() {
  newHTML =
  `
  <h3>Commit 1</h3>
  <p>Placeholder details about commit</p>
  `;
  return newHTML;
}

document.getElementById("commits").innerHTML = get_commit_info();
