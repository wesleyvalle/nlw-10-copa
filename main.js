function createGame (player1, hour, player2) {
  return `
    <li>
      <img src="assets/icon-${player1}.svg" alt="Icone da bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="assets/icon-${player2}.svg" alt="Bandeira de ${player2}">
    </li>
  `
}

let delay = 0
function createCard(date, day, games) {
  delay = delay + 0.1
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2> ${date} <span> ${day} </span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "Domingo", createGame("qatar", "16:00", "ecuador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("england", "13:00", "iran") +
      createGame("senegal", "16:00", "holanda") +
      createGame("united", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "arabia") +
      createGame("dinamarca", "10:00", "tunisia") +
      createGame("mexico", "13:00", "polonia") +
      createGame("france", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("marrocos", "07:00", "croacia") +
      createGame("alemanha", "10:00", "japan") +
      createGame("espanha", "13:00", "costa") +
      createGame("belgica", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguay", "10:00", "coreia-sul") +
      createGame("portugal", "13:00", "gana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("wales", "07:00", "iran") +
      createGame("qatar", "10:00", "senegal") +
      createGame("holanda", "13:00", "ecuador") +
      createGame("england", "16:00", "united")
  ) +
  createCard(
    "26/11",
    "sabado",
    createGame("tunisia", "07:00", "australia") +
      createGame("polonia", "10:00", "arabia") +
      createGame("france", "13:00", "dinamarca") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japan", "07:00", "costa") +
      createGame("belgica", "10:00", "marrocos") +
      createGame("croacia", "13:00", "canada") +
      createGame("espanha", "16:00", "alemanha")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("coreia-sul", "10:00", "gana") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("ecuador", "07:00", "senegal") +
      createGame("holanda", "10:00", "qatar") +
      createGame("iran", "13:00", "united") +
      createGame("wales", "16:00", "england")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunisia", "07:00", "france") +
      createGame("australia", "10:00", "dinamarca") +
      createGame("polonia", "13:00", "argentina") +
      createGame("arabia", "16:00", "mexico")
  ) +
  createCard(
    "01/12",
    "terça",
    createGame("croacia", "07:00", "belgica") +
      createGame("canada", "10:00", "marrocos") +
      createGame("japan", "13:00", "espanha") +
      createGame("costa", "16:00", "alemanha")
  ) +
  createCard(
    "02/12",
    "quarta",
    createGame("coreia-sul", "07:00", "portugal") +
      createGame("gana", "10:00", "uruguay") +
      createGame("serbia", "13:00", "switzerland") +
      createGame("cameroon", "16:00", "brazil")
  )



