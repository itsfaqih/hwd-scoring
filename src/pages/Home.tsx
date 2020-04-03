import { IonInput, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [scorePlayer1, setScorePlayer1] = useState(0);
  const [scorePlayer2, setScorePlayer2] = useState(0);

  function addScorePlayer1() {
    setScorePlayer1(score => (scorePlayer1 + 1));
  }

  function delScorePlayer1() {
    setScorePlayer1(score => scorePlayer1 - 1);
  }

  function addScorePlayer2() {
    setScorePlayer2(score => (scorePlayer2 + 1));
  }

  function delScorePlayer2() {
    setScorePlayer2(score => scorePlayer2 - 1);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Badminton Scoring</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <div>Albert</div>
              <div>
                <IonButton onClick={addScorePlayer1}>+</IonButton>
              </div>
              <div>
                <IonInput value={String(scorePlayer1)}></IonInput>
              </div>
              <div>
                <IonButton onClick={delScorePlayer1}>-</IonButton>
              </div>
            </IonCol>
            <IonCol>
              <div>Einstein</div>
              <div>
                <IonButton onClick={addScorePlayer2}>+</IonButton>
              </div>
              <div>
                <IonInput value={String(scorePlayer2)}></IonInput>
              </div>
              <div>
                <IonButton onClick={delScorePlayer2}>-</IonButton>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
