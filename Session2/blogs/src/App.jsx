import Home from "./pages/Home/Home"
import NavBar from "./components/navBar/NavBar"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import DetailedBlog from "./components/detailedComponent/DetailedBlog"
import Counter from "./components/counter/Counter"
import { createContext , useState } from "react"

export const ThemeContext = createContext(null);


const router= createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "blogs/:id",
    element: <DetailedBlog/>
  },
  {
    path : "/counter",
    element: <Counter/>
  }
])

function App() {

  const [theme , setTheme] = useState('light')
  
    return (
        <ThemeContext.Provider  value={{theme , setTheme}}>
          <NavBar/>
          <RouterProvider router={router}/>     
        </ThemeContext.Provider>

    )
} 

export default App
