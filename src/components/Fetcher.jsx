import fetchHook from "./fetchHook";

export default function Fetcher() {
  const { data, loading, error, refetch } = fetchHook(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <>
      <div className="text-center">
        <h1>Post Fetcher</h1>
        <p className="pt-8">Enter a URL to fetch and deploy posts</p>

        <div className="flex items-center justify-center gap-2 pt-2">
          <input
            type="text"
            name=""
            id=""
            value={"https://jsonplaceholder.typicode.com/posts"}
            className="w-[500px]"
          />

          <button onClick={refetch} className="bg-black text-white w-[70px]">
            Fetch
          </button>

          <button onClick={refetch} className="bg-white text-black w-[70px]">
            Refetch
          </button>
        </div>

        <h1>Posts</h1>
        {data && (
          <>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </>
        )}
      </div>
    </>
  );
}
