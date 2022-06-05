import styles from "./App.module.css";
import NavBar from "./compoents/generalComponents/NavBar/NavBar";

function App() {
  return (
    <div className={styles.appContainer}>
      <NavBar />
    </div>
  );
}

export default App;
