import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'

const getPost = (id) => {

    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            let restore = await projectFirestore.collection('posts').doc(id).get()
            console.log(restore)

            if (!restore.exists) {
                throw Error('The post dose not exist')
            }

            post.value = { ...restore.data(), id: restore.id }
            console.log(post.value)
        }
        catch (err) {
            error.value = err.message
        }
    }

    return { post, error, load }
}

export default getPost