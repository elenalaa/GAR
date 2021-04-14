import firebase from 'firebase';


const doLogin = async (userCreds) => {

    const {email, password} = userCreds;
    console.log(email, password);

    try {
        // Firebase auth getting and returning user info
        const authi = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log('apihooks sisäl authi: ', authi);

        if (authi.operationType == 'signIn') {
            return authi;
        }

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
        console.log('api register funktio: ', newUser.operationType);

        if (newUser.operationType == 'signIn') {
            return newUser;
        }

    } catch (e) {
        console.log(e)
    }
}


const doAddItem = async (newItem) => {
    const {title, description, amount, code} = newItem;

    try {
        const newItem = await firebase.firestore.items
        console.log('new item added', newItem);

        return newItem;

    } catch (e) {
        console.log(e)
    }
}




export {doLogin, doRegister, doAddItem};