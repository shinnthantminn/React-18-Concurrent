import ApiUser from './Components/ApiUser'

const App = () => {
  return (
    <div className="w-[90%] mx-auto min-h-[100vh] bg-slate-300">
      <div className="w-[50%] mx-auto">
        <h1 className="text-4xl mb-5">User</h1>
        <ApiUser />
      </div>
    </div>
  )
}

export default App
