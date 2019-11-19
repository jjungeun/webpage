import { apiKey } from 'api';

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: apiKey,
  authDomain: 'finweb-49326.web.app',
  projectId: 'finweb-49326'
});

export var db = firebase.firestore();

// https://firebase.google.com/docs/firestore?hl=ko 참고

export const initID = () => {
  return db.collection("post").doc("postID");
}

export const initFire = () => {
  return db.collection("post").where("isPost", "==", true);
}

export const createPostToDB = (data) => {
  db.collection("post").add({
    id: data.id,
    title: data.title,
    writer: data.writer,
    content: data.content,
    date: data.date,
    isPost: true,
  })
  db.collection("post").doc("postID").update({
    id: data.id + 1
  })
}

export const updatePostToDB = (id, data) => {
  db.collection("post").where("isPost", "==", true).where("id", "==", id).get().then(res => {
    res.forEach((doc) => {
      const ref = db.collection("post").doc(doc.id)
      ref.update({
        title: data.title,
        writer: data.writer,
        content: data.content,
      })
    })
  })
}

export const deletePostToDB = (id) => {
  db.collection("post").where("isPost", "==", true).where("id", "==", id).get().then(res => {
    res.forEach((doc) => {
      const ref = db.collection("post").doc(doc.id)
      ref.delete();
    })
  })
}