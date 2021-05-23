<template>
  <div>
    <about-me></about-me>
    <work-experience></work-experience>
  </div>
</template>

<script>
    import AboutMe from "@/components/AboutMe";
    import WorkExperience from "@/components/WorkExperience";
    export default {
        name: "Home",
        components: {WorkExperience, AboutMe}
    }
</script>

<style scoped>

</style>