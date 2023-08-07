import { Layout } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const MainLayout: React.FC  = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { Header } = Layout;
    return (
        <Layout>
            <Header>

			</Header>
        </Layout>
    );
};
export default MainLayout;