# Film Explorer with Offline Access (Demo)

  

A full-stack web application built with **Next.js 14** and **Tailwind CSS** that lets users explore characters from the [Rick and Morty API](https://rickandmortyapi.com/), even when offline.

  

---

  

##  Features

  

-  **Home Page**: Displays a list of characters fetched from the Rick and Morty API.

-  **Details Page**: Shows image, name, status, species, location, and episodes of the selected character.

-  **Offline Support**: Both the Home Page and visited Details Pages are cached and accessible without internet.

-  **Online/Offline Indicator**: Visual banner informs users when they go offline.

-  **State Management with Zustand**: Optimized global state with caching and `zustand/persist` for seamless user experience.

  

---

  

## Tech Stack

  

-  **Next.js 14 (App Router)**

-  **Tailwind CSS**

-  **Zustand (with `persist` middleware)**

-  **Axios**

-  **Rick and Morty API** (public API)

  

---

  

##  Setup Instructions

  

1.  **Clone the Repository**

```bash

git clone https://github.com/james-mensa/film-explorer-data-persistent-demo.git

cd film-explorer

npm install

```

  
  
  

##  Project Structure

  

```plaintext

├── apis/

│ ├── apiClient.ts // Axios instance

│ └── makeApiCall.ts // Wrapper for API calls

├── store/

│ └── useCharacterStore.ts // Zustand global store

├── types/

│ └── apis.ts // TypeScript interfaces

├── app/

│ ├── page.tsx // Home page

├── service-worker/

│ ├── sw.ts  // sw for pwa

│ └── character/[id]/page.tsx // Character details page

```