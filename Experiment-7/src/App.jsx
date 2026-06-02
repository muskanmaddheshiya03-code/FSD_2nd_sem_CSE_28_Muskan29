function App() {
  return (
    <div>
      <h1> Student List</h1>
<Student name="Aman" marks={92} />
      <Student name="Priya" marks={88} />
      <Student name="Rahul" marks={85} />
    </div>
  );
}
// Student Component
function Student({ name, marks }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Marks: {marks}</p>
    </div>
  );
}
export default App;