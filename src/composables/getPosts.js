import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'


const getPosts = () => {

    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try {

            const restore = await projectFirestore.collection('posts').get()

            posts.value = restore.docs.map(doc => {

                return { ...doc.data(), id: doc.id }
            })

        }
        catch (err) {
            error.value = err.message
        }
    }

    return { posts, error, load }
}

export default getPosts
