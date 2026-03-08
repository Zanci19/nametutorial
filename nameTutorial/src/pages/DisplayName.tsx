import { useEffect } from 'react';
import { IonContent, IonPage, IonButton } from '@ionic/react';
import { useLocation, useHistory } from 'react-router-dom';
import './DisplayName.css';

interface LocationState {
  name?: string;
}

const DisplayName: React.FC = () => {
  const location = useLocation<LocationState>();
  const history = useHistory();
  const name = location.state?.name ?? '';

  useEffect(() => {
    if (!name) {
      history.replace('/');
    }
  }, [history, name]);

  return (
    <IonPage>
      <IonContent fullscreen className="display-name-content">
        <div className="display-name-container">
          <h1 className="display-name-heading">Hello,</h1>
          <p className="display-name-value">{name}</p>
          <IonButton
            fill="clear"
            className="display-name-back"
            onClick={() => history.replace('/')}
          >
            Start over
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DisplayName;
