import firebase from 'firebase';


const doLogin = async (userCreds) => {

    const {email, password} = userCreds;
    console.log(email, password);

    try {

        // Firebase auth getting and returning user info
        const authi = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log('apihooks sisäl authi: ', authi)

        //console.log('oks tää nyt oikee?', token);
        return authi;

    } catch (e) {
        console.log(e)
    }
}

const doRegister = async (userCreds) => {

    const {email, password, full_name} = userCreds;
    console.log(email, password, full_name);

    try {
        // first creates user, second returns new users token
        const newUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log('api register funktio: ', newUser);

        return newUser;

    } catch (e) {
        console.log(e)
    }
}

const getToken = async () => {

    try {
        // returns current users token
        const token = await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        console.log('getToken api hookseissa toimiiko? : ', token);

        return token;
    } catch (e) {
        console.log(e)
    }
}


const doAddItem = async(newItem) => {
    const {title, description, amount, code} = newItem;
    
    try {
        const newItem = await firebase.firestore.items
        console.log('new item added', newItem);

        return newItem;

    } catch (e) {
        console.log(e)
    }
}

export {doLogin, doRegister, getToken, doAddItem};