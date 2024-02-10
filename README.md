Making a tool for real time whiteboarding to deepen my understanding of using Convex as my database service.

2/3 Starting my project
- Added authentication using Clerk since they're the service I'm most familiar with, but I should check other services so I can see if other services are similar in use and installation
- Created Organization Sidebar UI and connected it to Clerk using their react components
- Added very rough dashboard layout using just bg colors and labels as placeholders for now

2/5
- Added search functionality with debounce, however useDebounce is deprecated, still working and will use it as useDebounceValue continually triggers useEffect and overwrites any other query it's given even though value is not changing and does not skipNull and skipEmptyString. NOTE: COME BACK TO THIS TO FIX IT
- Added barebones create board api, only has title, and author for now. No connection to the front-end; Can only see it in convex dashboard for now.

2/7
- Added Skeleton loading state to dashboard
- Connected UI to convex database
- Dropdown menu added to boards with rename, delete, and copy link functions
- Using zustand to store modal values and states
- ModalProvider added to avoid hydration errors; NOTE: kinda janky using useEffect but it works
- Adding favorites to convex schema

2/9