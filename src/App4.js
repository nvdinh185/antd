import { Button, Menu, Dropdown } from 'antd';
import 'antd/dist/antd.css';

function handleMenuClick(e) {
    console.log('click', e);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
);

const App4 = () => {

    return (
        <>
            <Button type="primary">primary</Button>
            <Button>secondary</Button>
            <Dropdown.Button overlay={menu}>Actions</Dropdown.Button>
        </>
    );
};

export default App4