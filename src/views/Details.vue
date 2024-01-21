<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleClick" class="delete">delete post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import { useRoute, useRouter } from "vue-router";
import { projectFirestore } from "@/firebase/config";

// component imports
import Spinner from "../components/Spinner.vue";

export default {
  props: ["id"],
  components: { Spinner },
  setup(props) {
    const route = useRoute();

    const { error, post, load } = getPost(route.params.id);
    //another way of using id on router usefull if there is on id on props
    // const { error, post, load } = getPost(props.id);
    const router = useRouter();

    load();

    const handleClick = async () => {
      await projectFirestore.collection("posts").doc(props.id).delete();

      router.push({ name: "Home" });
      // or  router.push("/");
    };

    return { error, post, handleClick };
  },
};
</script>

<style scoped>
.tags a {
  margin-right: 10px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
button.delete {
  margin: 10px auto;
  color: #fc63bf;
  margin-top: 50px;
}
</style>
