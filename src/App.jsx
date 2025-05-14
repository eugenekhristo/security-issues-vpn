import { Route, Routes, Navigate } from 'react-router';
import './styles/index.scss';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Step4 from './pages/Step4';
import Step5 from './pages/Step5';
import { PlansProvider } from './contexts/PlansContext';

function App() {
  return (
    <PlansProvider>
      <Routes>
        <Route index element={<Navigate to="/step-1" replace />} />
        <Route path="/step-1" element={<Step1 />} />
        <Route path="/step-2" element={<Step2 />} />
        <Route path="/step-3" element={<Step3 />} />
        <Route path="/step-4" element={<Step4 />} />
        <Route path="/step-5" element={<Step5 />} />
        <Route path="*" element={<Navigate to="/step-1" replace />} />
      </Routes>
    </PlansProvider>
  );
}

export default App;
