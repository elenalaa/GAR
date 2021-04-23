import firebase from 'firebase';
import {projectStorage, projectFirestore} from '../firebase/config';



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



const postStore = async (newItem, url) => {
    const {title, description, type, code} = newItem;

    // posts inputs and img url for storage
    try {
        //console.log(title, url)

        const task = await projectFirestore
            .collection('item')
            .add({
                title: title,
                description: description,
                type: type,
                code: code,
                url: url,
            })
            .then(() => {
                console.log('Post Added!');
            })
        return task;
    } catch (e) {
        console.log(e)
    }
}


const postItem = async (data, inputs) => {

    // tries to posts image to storage and returns url for it

    const {title, description, type, code} = inputs;
    const storageRef = projectStorage.ref(`items/${title}`);
    const task = storageRef.put(data)

    try {
        console.log('storage ref?', inputs);

        task.on('state_changed', (snapshot) => {
            console.log(`${snapshot.bytesTransferred} transferred out of ${snapshot.totalBytes}`,);
        });

        try {
            await task;
            const url = await storageRef.getDownloadURL();
            return url;
        } catch (e) {
            console.log(e);
            return null;
        }
    } catch (e) {
        console.log(e)
    }
}


const doAddItemWish = async (newItem) => {
    const {title, description, amount, code} = newItem;

    try {
        const newItem = await firebase.firestore.itemswish
        console.log('new item added', newItem);
        return newItem;

    } catch (e) {
        console.log(e)
    }
}


export {doLogin, doRegister, postStore, doAddItemWish, postItem};
