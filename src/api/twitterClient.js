import firebase from 'firebase/app'
import 'firebase/auth'

const provider = new firebase.auth.TwitterAuthProvider()

const facebookClient = () => {
  const login = () =>
    new Promise(resolve =>
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          console.log(result)
          resolve(true)
        })
        .catch(error => {
          console.log(error)
          resolve(false)
        })
    )
  return {
    login,
  }
}

export default facebookClient()