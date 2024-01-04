
const App = () => {
  return (
    <div className=" grid place-items-center">
      <div className="card mx-auto my-[75px] h-[600px] w-[800px] bg-[#3069A7] rounded-[50px]">
        <div className="search mx-auto my-4 rounded-2xl decoration bg-white flex justify-between w-[400px] px-5">
          <input type="text" placeholder="Search" className="text-xl border-b p-1 borde-gray-200 w-full uppercase"/>
          <button className=" cursor-pointer"><img src="/public/clear.png" alt="..." className=" w-5"/></button>
        </div>
        <div className="grid ">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default App