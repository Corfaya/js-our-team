# TRACCIA
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
## MILESTONE 0
Creare l’array di oggetti con le informazioni fornite.
## MILESTONE 1
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
## MILESTONE 2
Stampare le stesse informazioni su DOM sottoforma di stringhe
## BONUS 1
Trasformare la stringa foto in una immagine effettiva
## BONUS 2
Organizzare i singoli membri in card/schede
---------------------------
Ecco i dati dell'array di oggetti:
Nome - Ruolo - Foto
Wayne Barnett - Founder & CEO - wayne-barnett-founder-ceo.jpg
Angela Caroll	- Chief Editor	- angela-caroll-chief-editor.jpg
Walter Gordon - Office Manager - walter-gordon-office-manager.jpg
Angela Lopez	- Social Media Manager - angela-lopez-social-media-manager.jpg
Scott Estrada	- Developer - scott-estrada-developer.jpg
Barbara Ramos - Graphic Designer - barbara-ramos-graphic-designer.jpg
E ricordiamoci che console.log() è nostro amico!

# FLOW
- MILESTONE 0: Creo un array di oggetti contenenti le chiavi "name", "role", "img" per ogni singolo membro
- MILESTONE 1: Uso del ciclo for per stampare i valori delle chiavi di ogni membro
- MILESTONE 2: Recupero dal DOM il contenitore in cui voglio aggiungere le informazioni dei membri del team
                Aggiungo una funzione per la creazione dei div contenitori delle info
                Invoco la funzione all'interno del ciclo for e la salvo in una variabile
                Inserisco sotto forma di stringa nome, ruolo e stringa della foto come contenuto del div
                Appendo i div all'elemento recuperato dal DOM
- BONUS 1: Aggiungo, nel contenuto di COLUMN, il path per visualizzare le foto in pagina