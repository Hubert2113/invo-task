import styles from './App.module.scss';
import Header from "../Header/Header";
import Main from "../Main/Main";
import LogoBar from "../LogoBar/LogoBar";
import AdContainter from "../AdContainer/AdContainer";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <LogoBar />
      <AdContainter />
    </div>
  );
}

export default App;
