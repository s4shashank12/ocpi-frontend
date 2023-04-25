import styles from './ocpi-connection-form.module.scss';
import classNames from 'classnames';
import App_module from '../../App.module.scss';

export interface OcpiConnectionFormProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-ocpi-connection-forms-and-templates
 */
export const OcpiConnectionForm = ({ className }: OcpiConnectionFormProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1>OCPI Connection</h1>
            <p>Fill out this form to initiate the credentials exchange with the CPO.</p>
            <form className={styles['ocpi-connection-form-style']} onSubmit={submitOcpiForm()}>
                <label className={styles['ocpi-text-details']}>CPO URL</label>
                <input type="text" className={styles['ocpi-form-input-field']} />
                <br />
                <label className={styles['ocpi-text-details']}>ENDPOINT</label>
                <input type="text" className={styles['ocpi-form-input-field']} />
                <br />
                <button className={styles['ocpi-button']}>Submit</button>
            </form>
        </div>
    );
};

const submitOcpiForm = () => {
    console.log("submitted form")
    return undefined;
}
