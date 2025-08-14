export default function Card(props) {
  return (
    <>
      <div className="w-[500px] h-[200px] bg-amber-50 rounded-f">
        <h1 className="pt-10 mb-5 font-bold text-black">{props.quote}</h1>

        <h3 className="text-gray-800">{props.author}</h3>

        <div className="flex items-center justify-center gap-10">
          <button className="bg-red-800 w-[70px] h-[30px]">prev</button>
          <button className="bg-green-800 w-[70px] h-[30px]">next</button>
        </div>
      </div>
    </>
  );
}
