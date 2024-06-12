import { createRoot } from "react-dom/client"
import { App } from "./components/App"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Suspense } from "react"
import {Shop} from "@/pages/Shop"
import {About} from "@/pages/About"

const root = document.getElementById("root")
if (!root) {
  throw new Error("root not found")
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/about",
        element: <Suspense fallback={"Loading..."}><About /></Suspense>
      },
      {
        path: "/shop",
        element: <Suspense fallback={"Loading..."}> <Shop /></Suspense>
      },
    ]
  }
])
const container = createRoot(root)
container.render(<RouterProvider router={router} />)


