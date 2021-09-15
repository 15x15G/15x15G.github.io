<template>
  <div></div>
</template>

<!--  <div id="giscusdiv" style="padding: 2rem 2.5rem">
    <br />
    <script
      src="https://giscus.app/client.js"
      data-repo="15x15G/15x15G.github.io"
      data-repo-id="MDEwOlJlcG9zaXRvcnkzODgzNzc5NTI="
      data-category="页面"
      data-category-id="DIC_kwDOFyYtYM4B_Avg"
      data-mapping="url"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-theme="light"
      crossorigin="anonymous"
      async
    ></script>
  </div>-->

<!--<template>
  <Giscus
    repo="15x15G/15x15G.github.io"
    repoId="MDEwOlJlcG9zaXRvcnkzODgzNzc5NTI"
    category="页面"
    categoryId="DIC_kwDOFyYtYM4B_Avg"
    mapping="url"
    term=""
    reactionsEnabled="1"
    emitMetadata="0"
    theme="light"
  />
</template>

<script setup lang="ts">
import { Giscus } from "@giscus/vue";
</script>-->


<script>
const commentDomID = "giscusdiv";
let timer = null;
export default {
  mounted() {
    timer = setTimeout(() => {
      const frontmatter = {
        to: {},
        from: {},
        ...this.$frontmatter,
      };
      renderComment(frontmatter);
    }, 1000);
    this.$router.afterEach((to, from) => {
      if (to && from && to.path === from.path) {
        return;
      }
      const frontmatter = {
        to,
        from,
        ...this.$frontmatter,
      };
      renderComment(frontmatter);
    });
  },
};

function initgiscus() {
  const div = document.createElement("div");
  div.id = commentDomID;
  div.style = "padding: 2rem 2.5rem";
  const js = document.createElement("script");
  js.src = "https://giscus.app/client.js";
  js.setAttribute("data-repo", "15x15G/15x15G.github.io");
  js.setAttribute("data-repo-id", "MDEwOlJlcG9zaXRvcnkzODgzNzc5NTI=");
  js.setAttribute("data-category", "页面");
  js.setAttribute("data-category-id", "DIC_kwDOFyYtYM4B_Avg");
  js.setAttribute("data-mapping", "url");
  js.setAttribute("data-reactions-enabled", "1");
  js.setAttribute("data-emit-metadata", "0");
  js.setAttribute("data-theme", "light");
  js.crossorigin = "anonymous";
  js.async = true;
  div.appendChild(js);
  return div;
}

function renderComment(frontmatter) {
  clearTimeout(timer);
  const parentDOM = document.querySelector("main.page");
  const commentDOM = document.querySelector(`#${commentDomID}`);
  const b = frontmatter.comment !== false && frontmatter.comments !== false;

  if (b) {
    if (parentDOM) {
      if (commentDOM) return;
      else parentDOM.appendChild(initgiscus());
    } else {
      timer = setTimeout(() => renderComment(frontmatter), 200);
      console.log("loading giscus");
      return;
    }
  } else {
    if (commentDOM) {
      commentDOM.remove();
    }
    return;
  }
}
</script>
