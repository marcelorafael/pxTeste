import firebase from './firebaseConnection';

let check = false

async function signInAuth(email, password) {
  let data = null
  
  await firebase.auth().signInWithEmailAndPassword(email, password)
  .then(async (value) => {
    let uid = value.user.uid

    await firebase.database().ref('users').child(uid).once('value')
    .then((snapshot) => {
      data = {
        uid: uid,
        nome: snapshot.val().nome,
        email: value.user.email
      }

      check = true
    })
  })
  .catch(error => {
    check = false
    if (error.code === 'auth/invalid-email') {
      alert('E-mail inválido!');
      return;
    }

    if (error.code === 'auth/user-not-found') {
      alert('Usuário não exite');
      return;
    }

    if (error.code === 'auth/wrong-password') {
      alert('Senha Inválida!!');
      return;
    }

    if (error.code === 'auth/too-many-requests') {
      alert('Muitas tentativas');
      return;
    }

    alert('Código de erro ' + error);
  })

  if (check) {
    return data
  } else {
    return null
  }
}

async function signUpAuth(email, password, name) {
  let data = {};
  await firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(async (value) => {
    let uid = value.user.uid

    await firebase.database().ref('users').child(uid).set({
      nome: name,
      email: email
    })
    .then(() => {
      data = {
        uid: uid,
        nome: name,
        email: value.user.email,
        avatarUrl: null
      }

      check = true
    })
    .catch(error => {
      check = false
      // if (error.code === 'auth/email-already-in-use') {
      //   alert('E-mail já está cadastrado')
      //   return;
      // }
      // if (error.code === 'auth/weak-password') {
      //   alert('Senha muito curta, mínimo 6 caracters')
      //   return;
      // }
      alert(error.code)
    })
  })

  if (check) {
    return data
  } else {
    return null
  }
}

async function signOutAuth() {
  await firebase.auth().signOut()
}

export { signInAuth, signUpAuth, signOutAuth }