function parse_commits(events) {
  commits = [];
  for (event_obj of events) {
    if (event_obj.type != "PushEvent") {
      continue;
    }

    event_repo = {
      name: event_obj.repo.name,
      url: event_obj.repo.url
        .replace("api.github.com/repos", "github.com")
    }

    for (commit of event_obj.payload.commits) {
      commits.push({
        repo: event_repo,
        message: commit.message,
        url: commit.url
          .replace(`api.github.com/repos/${event_repo.name}/commits`,
            `github.com/${event_repo.name}/commit`)
      });
    }
  }
  return commits;
}

async function get_recent_events(username) {
  const url = `https://api.github.com/users/${username}/events/public`;
  response = await fetch(url);
  commits = await response.json();
  return commits;
}

async function generate_html() {
  const username = "ChuseCubr"
  events = await get_recent_events(username);
  commits = parse_commits(events);
  newHTML = "";
  for (commit of commits) {
    newHTML += `
      <a href="${commit.url}" target="_blank"><b>${commit.message}</b></a>
      <ul>
        <li>
          <a href="${commit.repo.url}" target="_blank">${commit.repo.name}</a>
        </li>
      </ul>`;
  }
  return newHTML;
}

async function update_html() {
  document.getElementById("commits").innerHTML = await generate_html();
}

update_html();
