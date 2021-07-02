import { Button } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const App7 = () => {

    return (
        <>
            <Button type="primary" block>
                Primary
            </Button>
            <Button block>Default</Button>
            <Button type="dashed" block>
                Dashed
            </Button>
            <Button type="link" block>
                Link
            </Button>
        </>
    );
};

export default App7