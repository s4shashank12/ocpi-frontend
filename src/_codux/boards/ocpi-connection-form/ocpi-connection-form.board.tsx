import { createBoard } from '@wixc3/react-board';
import { OcpiConnectionForm } from '../../../components/ocpi-connection-form/ocpi-connection-form';

export default createBoard({
    name: 'OcpiConnectionForm',
    Board: () => <OcpiConnectionForm />
});
