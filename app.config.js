import 'dotenv/config';

export default ({ config }) => ({
  "expo": {
    "name": "FruitExpress",
    "slug": "FruitExpress",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/logo.png",
    "userInterfaceStyle": "light",
    "scheme": "FruitExpress",
    "newArchEnabled": true,
    "splash": {
      "image": "./assets/logo.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "permissions": ["ACCESS_FINE_LOCATION", "ACCESS_COARSE_LOCATION"],
      "config": {
        "googleMaps": {
          "apiKey": process.env.GOOGLE_MAPS_API_KEY
        }
      },
      "adaptiveIcon": {
        "backgroundColor": "#ffffff"
      },
      "edgeToEdgeEnabled": true,
      "package": "com.lucasbonny.FruitExpress"
    },
    "web": {
      "favicon": "./assets/logo.png"
    },
    "plugins": [
      "expo-router"
    ],
    "extra": {
      "router": {},
      "eas": {
        "projectId": "54c22128-6357-431c-a238-9352d6af8dc8"
      }
    }
  }
});