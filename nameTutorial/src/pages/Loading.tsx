import { useEffect } from 'react';
import { IonContent, IonPage, IonSpinner } from '@ionic/react';
import { useHistory, useLocation } from 'react-router-dom';
import './Loading.css';

interface LocationState {
  name?: string;
}

const Loading: React.FC = () => {
  const history = useHistory();
  const location = useLocation<LocationState>();
  const name = location.state?.name ?? '';

  useEffect(() => {
    if (!name) {
      history.replace('/');
      return;
    }
    const timer = setTimeout(() => {
      history.replace('/result', { name });
    }, 15000);
    return () => clearTimeout(timer);
  }, [history, name]);

  return (
    <IonPage>
      <IonContent fullscreen className="loading-content">
        <div className="loading-container">
          <IonSpinner name="crescent" className="loading-spinner" />
          <p className="loading-text">Doing something, please wait…</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Loading;
