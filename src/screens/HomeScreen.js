import React, { Component } from 'react';
import { 
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styles from './styles/HomeScreenStyles';
import * as firebase from 'firebase';
import CONFIG from '../../config.js';

class App extends Component {
  constructor() {
    super();
    this.itemRef = firebaseApp.database().ref('stats');
    this.state = {
      stats: null
    }
  }

  componentDidMount() {
    this.listenNewStats(this.itemRef);
    //refreshes every 5 minutes
    setInterval(() => this.refreshData(), 300000);
  }

  listenNewStats(itemRef) {
    itemRef.on('value', (snap) => {
      this.setState({
        stats: snap.val()
      });
    });
  }

  async refreshData() {
    await fetch(CONFIG.WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'message': 'fire'
      })
    });
  }

  get renderStatsView() {
    if (this.state.stats) {
      let values = [];
      values.push({ key: 'Total Replies', val: this.state.stats.total_replies });
      values.push({ key: 'Customers Helped', val: this.state.stats.customers_helped });
      values.push({ key: 'Happiness Score', val: this.state.stats.happiness_score });
      values.push({ key: 'Average Handle Time', val: this.state.stats.average_handle_time });

      let viewArray = [];

      for (let i = 0; i < values.length; i++) {
        viewArray.push(
          <View style={styles.lineItem} key={i}>
            <View style={styles.leftItem}>
              <Text style={styles.title}>{values[i].key}:</Text>
            </View>
            <View style={styles.rightItem}>
              <Text style={styles.value}>{values[i].val}</Text>
            </View>
          </View>
        );
      }

      return viewArray;
    }

    return null;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          {this.renderStatsView}
        </View>
        <TouchableOpacity
          style={styles.refreshButton}
          onPress={() => this.refreshData()}
        >
          <Text style={styles.refreshButtonText}>Refresh</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const firebaseConfig = {
  apiKey: CONFIG.FIREBASE_KEYS.apiKey,
  authDomain: CONFIG.FIREBASE_KEYS.authDomain,
  databaseURL: CONFIG.FIREBASE_KEYS.databaseURL,
  projectId: CONFIG.FIREBASE_KEYS.projectId,
  storageBucket: CONFIG.FIREBASE_KEYS.storageBucket,
  messagingSenderId: CONFIG.FIREBASE_KEYS.messagingSenderId
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default App;
