import styles from './App.module.scss';
import { OcpiConnectionForm } from './components/ocpi-connection-form/ocpi-connection-form';

function App() {
    return (
        <div className={styles.App}>
            <OcpiConnectionForm />
        </div>
    );
}

export default App;
