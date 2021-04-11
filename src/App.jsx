import styles from './App.module.css';
import Quote from './components/Quote';

export function App() {
  return (
    <main className={styles.main}>
      {/* <Header /> */}
      {/* <Converter/> */}
      <Quote />
    </main>
  );
}
