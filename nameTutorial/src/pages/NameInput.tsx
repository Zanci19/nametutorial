import { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonInput,
  IonItem,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './NameInput.css';

const NameInput: React.FC = () => {
  const [name, setName] = useState('');
  const history = useHistory();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && name.trim()) {
      history.push('/loading', { name });
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen className="name-input-content">
        <div className="name-input-container">
          <IonItem lines="none" className="name-input-item">
            <IonInput
              type="password"
              placeholder="Enter your name"
              value={name}
              onIonInput={(e) => setName(e.detail.value ?? '')}
              onKeyDown={handleKeyDown}
              autofocus
            />
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NameInput;
