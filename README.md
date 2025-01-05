!.RS-SSMAN!.
.rsssman.
Ne pas déranger

Sneeks — 30-07-24 01:02
package viewPackage;

import modelPackage.SearchAuthorModel;

import javax.swing.table.AbstractTableModel;
import java.time.LocalDate;
Afficher plus
AuthorModel.java
2 Ko
package viewPackage;

import controllerPackage.AuthorSearchController;
import modelPackage.SearchAuthorModel;

import javax.swing.*;
Afficher plus
AuthorPanel.java
2 Ko
package viewPackage;

import modelPackage.UserModel;

import javax.swing.*;
import java.awt.*;
Afficher plus
UserJFrame.java
3 Ko
!.RS-SSMAN!. a commencé un appel qui a duré 4 heures. — 30-07-24 17:45
!.RS-SSMAN!. — 30-07-24 19:02
select count(*) from borrow where userBorrower = 'a'
Sneeks — 30-07-24 19:04
Dans un fichier texte, enregistrer les requêtes SQL suivantes qui permettent de :
Ajouter une table supplémentaire à votre base de données (nom au choix).
Cette table doit contenir au moins :
﻿﻿Une clé primaire,
﻿﻿une clé étrangère,
Une colonne de type « chaine de caractères » nommée « statutEnregistrement » qui peut prendre uniquement une des valeurs suivantes :
﻿﻿« supprimé »
﻿﻿« Brouillon »
﻿﻿« Valide »
﻿une colonne de type « date » nommée « dateModification » correspondant à la date de la dernière modification.
﻿﻿une colonne de type « numérique ».
Ces colonnes doivent être obligatoires.
﻿﻿﻿Dans cette nouvelle table, insérer au moins 5 enregistrements différents.
﻿﻿﻿Créer une requête qui permet d'afficher l'ensemble des données de cette nouvelle table ainsi que les données de(s) la table(s) liée(s). Cette requête doit permettre d'afficher tous les enregistrements de la nouvelle table même s'ils n'ont pas de lien avec d'autres données. Ces données doivent être triées de la plus récente à la plus ancienne (« dateModification »).
﻿﻿﻿Créer la vue (nommée « view123456») qui permet d'afficher le nombre d'enregistrement par statut (« statutEnregistrement »). Les données doivent être triées en fonction du nombre d'enregistrement (du plus grand nombre au plus petit).
Peut-on insérer une donnée dans la nouvelle table via cette vue ? Justifiez.
﻿﻿﻿Autoriser l'insertion de données dans cette nouvelle table à un utilisateur (au choix).
Précisez ici le nom de l'utilisateur choisi :
﻿﻿﻿Créer la requête qui permet d'afficher les données de la vue. Cette requête devra utiliser un nom plus approprié que « view123456 » (nom au choix).
﻿﻿﻿Ecrire la requête qui permet de rajouter une nouvelle colonne obligatoire dans li table nouvellement créée, nommée « dateSuppression » pouvant contenir la date d suppression.
﻿﻿﻿Ecrire la requête qui permet de « supprimer » toutes les données de la nouvelle tab (« statutEnregistrement » = « supprimé » ; « dateSuppression » = 14/06/2024).
!.RS-SSMAN!. — 30-07-24 19:07
etu51120
Sneeks — 30-07-24 19:54
SELECT b.title, CONCAT(a.firstname,' ',a.lastname) as author, b.title, p.publishingName "+
        "from book b "+
        "inner join author a on b.authorWriting = a.reference "+
        "inner join publishinghouse p on b.publicationHouse = p.reference "+
        "where p.publicationDate between ? and ?
!.RS-SSMAN!. — 30-07-24 21:16
String selectedAuthor = (String) authorComboBox.getSelectedItem();
Sneeks — 30-07-24 21:20
package dataAccesPackage;

import exceptionPackage.DataAccesException;
import modelPackage.BorrowDisplayModel;
import modelPackage.SearchAuthorModel;
import modelPackage.SearchDateModel;
Afficher plus
AuthorDAOInterface.java
1 Ko
package dataAccesPackage;

import exceptionPackage.DataAccesException;
import modelPackage.BorrowDisplayModel;
import modelPackage.SearchAuthorModel;
import modelPackage.SearchDateModel;
Afficher plus
AuthorDataAcces.java
7 Ko
package businessPackage;

import dataAccesPackage.AuthorDAOInterface;
import dataAccesPackage.AuthorDataAcces;
import exceptionPackage.DataAccesException;
import modelPackage.BorrowDisplayModel;
Afficher plus
AuthorSearchManager.java
2 Ko
package controllerPackage;

import businessPackage.AuthorSearchManager;
import exceptionPackage.DataAccesException;
import modelPackage.BorrowDisplayModel;
import modelPackage.SearchAuthorModel;
Afficher plus
AuthorSearchController.java
2 Ko
package viewPackage;

import controllerPackage.AuthorSearchController;
import exceptionPackage.DataAccesException;
import exceptionPackage.FillAllException;
import modelPackage.MyTableModel;
Afficher plus
SearchDatePanel.java
6 Ko
package viewPackage;

import controllerPackage.AuthorSearchController;
import exceptionPackage.DataAccesException;
import exceptionPackage.FillAllException;
import modelPackage.BorrowDisplayModel;
Afficher plus
SearchUserInfoPanel.java
5 Ko
Sneeks — 07-08-24 20:12
Type de fichier joint : archive
IE-IG-B2-NPOO2-Programmation OO (SUPPRESSION 2024-2025)_2024087_2011.zip
4.11 MB
!.RS-SSMAN!. a commencé un appel qui a duré 8 heures. — 02-09-24 21:32
!.RS-SSMAN!. — 02-09-24 21:45
Image
Image
Image
Image
Image
Image
Image
Image
Image
Image
Image
Image
Image
Image
Image
Image
!.RS-SSMAN!. — 03-09-24 01:14
https://www.autoscout24.be/fr/offres/bmw-m8-4-4-as-v8-competition-essence-bleu-6d6eab7c-7014-47ea-be10-8e4410b87b61?sort=standard&desc=0&lastSeenGuidPresent=true&cldtidx=1&position=1&search_id=mmifiigwar&source_otp=t10&ap_tier=t10&source=listpage_search-results&order_bucket=2](https://www.autoscout24.be/fr/offres/bmw-m8-4-4-as-v8-competition-essence-bleu-6d6eab7c-7014-47ea-be10-8e4410b87b61?sort=standard&desc=0&lastSeenGuidPresent=true&cldtidx=1&position=1&search_id=mmifiigwar&source_otp=t10&ap_tier=t10&source=listpage_search-results&order_bucket=2)
AutoScout24
BMW de € 194 499,-
Trouvez votre BMW € 194 499,- – sur AutoScout24, le plus grand marché automobile en ligne d'Europe.
Image
Sneeks — 03-09-24 01:17
https://www.autoscout24.be/fr/offres/bentley-continental-gt-v8-just-serviced-21-vat-essence-noir-b24b438c-8970-46d4-bbe1-c4e75012d549?sort=standard&desc=0&lastSeenGuidPresent=true&cldtidx=2&position=2&search_id=zvckdexo64&source_otp=t20&ap_tier=t20&source=listpage_search-results&order_bucket=3
AutoScout24
Bentley de € 97 900,-
Trouvez votre Bentley € 97 900,- – sur AutoScout24, le plus grand marché automobile en ligne d'Europe.
Image
!.RS-SSMAN!. — 03-09-24 01:52
la mediane est au milieu, repartition symétrique pour les observations centrale
Sneeks — 03-09-24 01:55
X N(u, ecart type) 
!.RS-SSMAN!. — 03-09-24 02:48
Image
Sneeks — 03-09-24 02:51
Image
Sneeks — 08-10-24 12:47
Transféré
https://henallux-schedule-customizer.vercel.app/
Henallux - agenda
Un site pour les étudiants de la Haute École de Namur-Liège-Luxembourg pour générer leur horaire customisé.
!.RS-SSMAN!. — 18-10-24 13:04
Type de fichier joint : acrobat
Projet_Smart_City.pdf
4.97 MB
Sneeks — 22-10-24 14:41
Type de fichier joint : unknown
Diagramme sans nom (1).drawio
15.21 KB
!.RS-SSMAN!. — 23-10-24 12:03
https://www.startertutorials.com/uml/uml-diagrams-railway-reservation-system.html#google_vignette
UML Tutorial for Beginners
Railway reservation system UML diagrams
Contains UML diagrams for railway reservation system like class diagram, use case diagram, component diagram, deployment diagram, and more.
Image
Image
Image
Image
Sneeks — 12-11-24 11:09
https://www.kaggle.com/datasets/sanius/ckanext-mysql2mongodb
bachelor-thesis-testdata
Image
!.RS-SSMAN!. — 28-11-24 12:54
https://careers.axa.com/global/en/job/AXGRGLOBAL2400085SYESTALEOFREXTERNALENGLOBAL?src=JB-10302
AXA Group
Stage en IT (Février à Avril/Mai 2025) in TRONE - TROON, BRUXELLES,...
Apply for Stage en IT (Février à Avril/Mai 2025) job with AXA Group in TRONE - TROON, BRUXELLES, BELGIUM. Information Technology at AXA Group
Image
!.RS-SSMAN!. — 16-12-24 17:50
Sub EnvoyerEmailsParLots()
    Dim OutlookApp As Object
    Dim EmailItem As Object
    Dim ws As Worksheet
    Dim i As Integer, compteur As Integer
    Dim emailAdresse As String
Afficher plus
script vba.txt
4 Ko
Sneeks — 16-12-24 17:51
Merci chef
!.RS-SSMAN!. — 16-12-24 17:53
Type de fichier joint : spreadsheet
241001 - Listing lieux de stage AU-IG-IR-TI.xlsx
153.98 KB
dans la Feuil1
enleve la ligne pour avoir la premiere ligne vide et qu'a partir de la deuxieme ligne y a deja le mail
apres tu  fais alt + 11 et tu vas sur le feuil1 et tu colles le script
mais avant demande a chat de modifier le mail et tout
apres tu enregistres
et tu fais alt + 8
puis tu envoies
ça va envoyer aux 50 premiers puis tu supprimes de la 2eme ligne jusqu'à la 51 et tu recommences
Sneeks — 16-12-24 17:56
Vsy chef je teste ca merci
Sneeks — 16-12-24 19:53
Att le truc excel t sur c feuil1?
C quoi la diff avec sheet1 et DA?
Ah c juste t’as mis les email a part?
!.RS-SSMAN!. — 16-12-24 20:14
en groupe dans feuil1 j'ai repris les mails dans DA avec la bonne structure pour le script
!.RS-SSMAN!. — 16-12-24 20:15
je sais sheet1 c'est melange y a aucun ordre et DA c'est la où j'ai repris les mails pour les mettre dans feuil1
fait un test avec ton mail avant d'envoyer a tout le monde
!.RS-SSMAN!. — 16-12-24 20:16
oe
Sneeks — 19-12-24 15:47
Mise en avant de l'analyse : Le stage doit inclure une composante analytique, et pas uniquement du codage. Quelques exemples donnés pour illustrer cela :

 Analyse d'une base de données,
 Étude des besoins des clients,    
 Comparaison entre deux types différents d'API.
Ces exemples sont donnés uniquement à titre indicatif et ne doivent pas nécessairement correspondre à votre projet spécifique.

Accord préalable de stage : Je vous joins le document à remplir. Il contient un grand nombre d'informations importantes, notamment :
Les technologies qui seront utilisées pendant le stage,
Toutes les informations nécessaires pour valider l'accord.
!.RS-SSMAN!. — 25-12-24 15:07
Type de fichier joint : spreadsheet
241001 - Listing lieux de stage AU-IG-IR-TI.xlsx
149.66 KB
Sneeks — Aujourd’hui à 19:50
# EASY PARKING API 🚀

## 📥 Télécharger le projet

👉 [Téléchargez le projet ici](https://github.com/RobinPaulus12/Easy-Parking-API/archive/refs/heads/main.zip)
Afficher plus
README.md
2 Ko
dis moi si les liens marchent pour toi
﻿
Sneeks
_sneeks
 
# EASY PARKING API 🚀

## 📥 Télécharger le projet

👉 [Téléchargez le projet ici](https://github.com/RobinPaulus12/Easy-Parking-API/archive/refs/heads/main.zip)


## 📂 Télécharger le script SQL

👉 [Téléchargez le script SQL ici](https://raw.githubusercontent.com/RobinPaulus12/Easy-Parking-API/main/scripts/SQL/backEndProject.sql)


## 🛠️ Installation

1️⃣ Téléchargez le fichier ZIP ci-dessus.

2️⃣ Dans le dossier "routes", dans le fichier "parking.js" (ligne 112), à la méthode "router.get('/all', checkJWT, manager, getAllParkings);", il faut enlever "manager".

3️⃣ Exécutez les commandes suivantes pour installer les dépendances et configurer le projet :

```bash
npm install
npm pkg set type=module
npm i express
npm i -D nodemon
npm pkg set scripts.dev="nodemon server.js"
npm i pg
npm i express-promise-router
npm i dotenv
npm i argon2
npm i jsonwebtoken
npm i --save-dev swagger-jsdoc
npm pkg set scripts.genDoc="node ./swagger/swagger_jsdoc.js"
npm run genDoc
```

💡 Sur Docker
Pour exécuter PostgreSQL avec Docker, utilisez la commande suivante :

```bash
docker run --name postgres -e POSTGRES_PASSWORD=password -e POSTGRES_USER=root -e POSTGRES_DB=backendproject -p 5432:5432 --rm -d postgres

```

📈 Ensuite
Une fois le conteneur PostgreSQL en cours d'exécution :

```bash
npm run backEndProject
npm run dev
```


Pour l'application mobile : 

.
├── apiCalls/                # Contient les appels aux APIs
│   ├── addCar.js            # Fonction pour ajouter un nouveau véhicule
│   ├── getAllCarsByUser.js  # Fonction pour récupérer les véhicules de l'utilisateur
│   ├── getAllParkings.js    # Fonction pour récupérer tous les parkings
│   ├── login.js             # Fonction pour gérer la connexion utilisateur
│   ├── register.js          # Fonction pour gérer l'enregistrement utilisateur
│   └── modifyPassword.js    # Fonction pour modifier le mot de passe utilisateur
├── assets/                  # Fichiers statiques (images, icônes, etc.)
├── components/              # Composants React réutilisables
│   ├── Button.js            # Composant pour les boutons de l'application
│   ├── ChampField.js        # Champ de saisie personnalisée
│   ├── ComboboxCar.js       # Composant pour afficher une liste déroulante de véhicules
│   ├── LogoAndTitle.js      # Composant pour afficher le logo et le titre
│   ├── ProfileLocationCard.js # Carte d'affichage des informations utilisateur
│   └── PresentationBar.js   # Barre d'affichage avec titre
├── redux/                   # Gestion centralisée de l'état avec Redux
│   ├── features/
│   │   ├── carSlice.js      # Slice Redux pour la gestion des voitures
│   │   └── userSlice.js     # Slice Redux pour la gestion des utilisateurs
│   └── store.js             # Configuration du store Redux
├── screens/                 # Écrans principaux de l'application
│   ├── CarScreen.js         # Écran pour gérer les voitures de l'utilisateur
│   ├── HomeScreen.js        # Écran d'accueil avec la carte et les parkings
│   ├── SettingScreen.js     # Écran pour les paramètres utilisateur
│   ├── RegisterScreen.js    # Écran d'inscription
│   └── ConnectScreen.js     # Écran de connexion
├── context/                 # Contexte global (optionnel si Redux est utilisé)
│   └── UserContext.js       # Contexte utilisateur pour la gestion des données globales
├── App.js                   # Point d'entrée principal de l'application
├── package.json             # Fichier de configuration des dépendances
└── README.md                # Documentation du projet


react et react-native

    Utilisé pour créer les composants, gérer l'état local, et construire l'interface utilisateur de l'application.

react-navigation et @react-navigation/native

    Fournit une navigation fluide entre les différents écrans de l'application (par exemple, HomeScreen, CarScreen).
    Utilisé pour créer une navigation de type stack (pile).

redux et @reduxjs/toolkit

    Fournit une gestion centralisée de l'état de l'application.
    Utilisé pour créer des slices pour les utilisateurs (userSlice) et les voitures (carSlice).
    Facilite le partage des données comme l'authentification et les listes de véhicules entre les composants.

react-redux

    Permet aux composants React de se connecter au store Redux.
    Utilisé pour lire et mettre à jour l'état global à partir des composants (exemple : dispatch, useSelector).

axios

    Utilisé pour effectuer les appels API vers le backend (exemple : ajout de voiture, récupération des parkings).
    Fournit une gestion robuste des requêtes HTTP.

@react-native-async-storage/async-storage

    Utilisé pour stocker localement les tokens JWT et d'autres données persistantes.

expo-location

    Utilisé pour accéder à la localisation de l'utilisateur, afficher sa position sur la carte et calculer la distance vers les parkings.

expo et ses bibliothèques associées

    expo-secure-store : Utilisé pour le stockage sécurisé des tokens et des informations sensibles.
    expo-font : Permet l'intégration de polices personnalisées.
    react-native-maps : Utilisé pour afficher la carte interactive avec les emplacements des parkings.

dayjs

    Utilisé pour manipuler et formater les dates dans l'application (par exemple, la date de naissance dans l'écran d'inscription).


react-native-vector-icons

    Utilisé pour afficher des icônes dans les boutons, les listes et les autres composants visuels.

react-native-gesture-handler et react-native-reanimated

    Fournissent des gestuelles et des animations fluides dans l'application.
README.md
2 Ko
