
import { Provider } from "react-redux";
import Ombor from "./Ombor";
import Oyn from "./Oyn";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import Boshi from "./Boshi";
import Bosqich from "./Bosqich";
import Yon from "./Yon";


function App() {

const router=createBrowserRouter([
  {
    path:'/',
    element: <Boshi/>
  },
  {
    path:'/oyn',
    element:<Oyn/>
  },
  {
    path:'/bosqich',
    element:<Bosqich/>
  },
  {
    path:'/yon',
    element: <Yon/>
  }
])

  return (
    <Provider store={Ombor}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  )
}

export default App