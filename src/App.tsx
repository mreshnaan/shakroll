import Header from "./components/headers/Header"
import { ExampleRead } from "./components/mint/exampleReadComponent"
import { ExampleWriteComponent } from "./components/mint/exampleWriteComponent"


function App() {
 

  return (
   <div className='w-full min-h-screen'>
      <Header/>
      <div className="w-full h-full flex flex-col items-center justify-center gap-5">
        <ExampleRead/>
        <ExampleWriteComponent/>
      </div>
   </div>
  )
}

export default App
