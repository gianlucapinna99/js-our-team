
// Creazione oggetti con membri del team
const teamMembers = [
    {
      nome: 'Wayne Barnett',
      ruolo: 'Founder & CEO',
      foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
      nome: 'Angela Caroll',
      ruolo: 'Chief Editor',
      foto: 'angela-caroll-chief-editor.jpg'
    },
    {
      nome: 'Walter Gordon',
      ruolo: 'Office Manager',
      foto: 'walter-gordon-office-manager.jpg'
    },
    {
      nome: 'Angela Lopez',
      ruolo: 'Social Media Manager',
      foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
      nome: 'Scott Estrada',
      ruolo: 'Developer',
      foto: 'scott-estrada-developer.jpg'
    },
    {
      nome: 'Barbara Ramos',
      ruolo: 'Graphic Designer',
      foto: 'barbara-ramos-graphic-designer.jpg'
    }
  ];

  //Stampo a console i nomi 
  for (let i = 0; i < teamMembers.length; i++) {
    console.log(`Nome: ${teamMembers[i].nome}`);
    console.log(`Ruolo: ${teamMembers[i].ruolo}`);
    console.log(`Foto: ${teamMembers[i].foto}`);
  }

  // Aggiungo gli elementi alla pagina
  const teamStuff = document.getElementById('team-members');

for (let i = 0; i < teamMembers.length; i++) {
  const memberDiv = document.createElement('div');
  const nomeElement = document.createElement('p');
  const ruoloElement = document.createElement('p');
  const fotoElement = document.createElement('img');

  nomeElement.innerText = `Nome: ${teamMembers[i].nome}`;
  ruoloElement.innerText = `Ruolo: ${teamMembers[i].ruolo}`;
  fotoElement.src = `img/${teamMembers[i].foto}`;

  memberDiv.appendChild(nomeElement);
  memberDiv.appendChild(ruoloElement);
  memberDiv.appendChild(fotoElement);

  teamStuff.appendChild(memberDiv);
}