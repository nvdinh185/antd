import { Button } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const App6 = () => {

    return (
        <>
            <Button type="primary" danger>
                Primary
            </Button>
            <Button danger>Default</Button>
            <Button type="dashed" danger>
                Dashed
            </Button>
            <Button type="text" danger>
                Text
            </Button>
            <Button type="link" danger>
                Link
            </Button>
        </>
    );
};

export default App6