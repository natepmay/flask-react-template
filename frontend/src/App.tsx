const API_URL = "http://127.0.0.1:5000/api/v1";

export default function App() {
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const resp = await fetch(`${API_URL}/hello`);
    const data = await resp.json();
    console.log(data);
  }
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="p-2 bg-blue-700 text-white cursor-pointer rounded-lg m-4"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
