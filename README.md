# React-Software-Architecture

## [State Management](https://github.com/ahmetkca/React-Software-Architecture/tree/state-management)
> How an application **handles the data needs** of its components, with regards to **loading, storing, persisting, and sharing this data**.

#### State management tools and techniques depends on:
- The size and complexity of your application
- How many components need to share thahht data
- The unique strengths and weaknesses of each

#### Technologies
- "Small" state (deals with very small and atomic pieces of data)
  - useState Hook 
  - Context
- "Medium" state (needs to be shared between smaller subset of components regularly)
  - Recoil
- "Large" state (required by large number of components, large application)
  - Redux
  - Mobx
