import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

// Routes imports
import Root from "./pages/Root.tsx";
import Messages from "./pages/Messages/Messages.tsx";
import Groups from "./pages/Groups/Groups.tsx";
import Archives from "./pages/Archives/Archives.tsx";

// TODO: Add imports for the new pages
import Calls from "./pages/Calls/Calls.tsx"; 
import Times from "./pages/Times/Times.tsx";
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {path: "messages",
         element: <Messages />,
          children: [ {
            path: "archives",
            element: <Archives />
          }
        ] 
      },
      // Groups
      {
        path: "groups",
        element: <Groups />,
      },

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;