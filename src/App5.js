import { Button } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const App5 = () => {

    return (
        <div className="site-button-ghost-wrapper2">
            <Button type="primary" ghost>
                Primary
            </Button>
            <Button ghost>Default</Button>
            <Button type="dashed" ghost>
                Dashed
            </Button>
        </div>
    );
};

export default App5