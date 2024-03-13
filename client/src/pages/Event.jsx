import UpComing from '../components/upComing/UpComing'

function Event() {
    const upCo = 'Events'
  return (
    <div className=" bg-[#fefefe] m-0 p-0 h-auto w-dvw flex flex-col items-center ">
        <UpComing data={upCo}/>
    </div>
  )
}

export default Event