export default function Search() {
  return (
    <>
      <div className="mt-4 flex items-center justify-center">
        <label className="mr-2">Search:</label>
        <input
          type="text"
          className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          placeholder="Enter text..."
        />
      </div>
    </>
  );
}
