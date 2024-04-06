# cineMille
Piccola web app per la gestione della programmazione di film del cinema Mille.<br>
NB i file XLSX che simulano il database sono già compilati ma abbastanza scarni. 

# Requisiti minimi
- Maven v3.8.6
- Java, jdk-19
- NodeJS v20.12.0
- Npm 10.5.0

# Caratteristiche 
- Spring boot v3.2.4
- Angular 17.3

# Build del progetto
La build del progetto prevede una build per il back end ed una per il front end.
### Back end
Prima di avviare il back end è necessario modificare l'application.yml presente in 

```bash
    cd  cineMille\code\src\main\resources
```
Bisogna cambiare le seguenti proprietà che contenogno i path assoluti dei file che simulano il database, inserendo il proprio path assoluto.

```yml
filmFilePath: 'C:\Users\giuse\Desktop\projects\cineMille\cineMille\db\film.xlsx'
saleFilePath: 'C:\Users\giuse\Desktop\projects\cineMille\cineMille\db\sale.xlsx'
proiezioniFilePath: 'C:\Users\giuse\Desktop\projects\cineMille\cineMille\db\proiezioni.xlsx'
```
Successivamente, buildare il progetto con il comando maven posizionandosi nella cartella 
```bash
    cd cineMille\code
```
ed eseguire il comando
```bash
    mvn clean install -DskipTests
```
### Front end

La build maven del progetto NON builda anche il front end. Occorre buildare il front end separatamente.
<br>
Il codice del front end si trova in 

```bash
    cd cineMille\public
```

Una volta posizionatosi in questa cartella basta eseguire la build come segue:

```bash
    npm run build
```

# Esecuzione del progetto
Dopo aver effettuato le build necessarie descritte nei capitoli precedenti è possibile runnare il progetto. Come per la build, back end e front end rimangono in esecuzioni in processi differenti quindi bisogna eseguirli separatamente.

### Back end
Per eseguire il back end occorre o un IDE come Eclipse o IntelliJ oppure tramite terminale

```bash
    cd cineMille\code\target
    java -jar cineMille-0.0.1-SNAPSHOT.jar
```

Per conferma che il backend è startato, basta collegarsi tramite browser a localhost:8080 . Ci si troverà una pagina bianca con scritto 'Hello world'.

### Front end
Per runnare il front end occorre eseguire da terminale il comando 
```bash
    npm start
```

Collegandosi a localhost:4200 è possibile vedere il codice Angular in esecuzione.