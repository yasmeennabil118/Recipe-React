import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import Notfound from './Components/Notfound'
import MealDetails from './Components/MealDetails'

function App() {

  let routes = createBrowserRouter([{
    path: '/', element: <Layout></Layout>, children: [
      { index: true, element: <Home></Home> },
      { path: '/mealdetails/:idMeal', element: <MealDetails></MealDetails> },
      { path: '*', element: <Notfound></Notfound> }
    ]
  }])

  return (
    <RouterProvider router={routes}>App</RouterProvider>
  )
}

export default App
