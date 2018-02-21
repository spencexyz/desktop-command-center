Serve it up:
react-native-macos run-macos
(This has been giving me issues, but it works when I open it in Xcode)

React Native Macos project:
https://github.com/ptmt/react-native-macos

Create a config.js file:

```
const WEBHOOK_URL = "";
const FIREBASE_KEYS = {
	apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

export default {
  WEBHOOK_URL,
  FIREBASE_KEYS,
};
```