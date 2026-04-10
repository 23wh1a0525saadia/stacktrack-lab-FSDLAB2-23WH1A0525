import { Link } from 'react-router-dom';
// TODO: Replace placeholder values with actual student and lab identifiers
const STUDENT_ID = '23WH1A0525';
const LAB_ID = 'FSDLAB2';

function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: 'Arial'
      }}
    >
      <h1>Stack Track Lab</h1>
      <p>Student ID: {STUDENT_ID}</p>
      <p>Lab ID: {LAB_ID}</p>

      <Link to="/tasks">
        <button>Go to Tasks</button>
      </Link>
      {/* TODO: Replace this placeholder with your question set UI */}
      

    </div>
  );
}

export default Home;
