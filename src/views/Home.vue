<template>
  <div>
    <about-me></about-me>
    <work-experience></work-experience>
    <portfolio-work></portfolio-work>
    <hard-skills></hard-skills>
  </div>
</template>

<script>
    import AboutMe from "@/components/AboutMe";
    import WorkExperience from "@/components/WorkExperience";
    import PortfolioWork from "@/components/PortfolioWork";
    import HardSkills from "@/components/HardSkills";
    export default {
        name: "Home",
        components: {HardSkills, PortfolioWork, WorkExperience, AboutMe}
    }
</script>

<style>
.icon > img {
  width: 3em;
  margin-right: 1em;
}
.title-container {
  display: flex;
  align-items: center;
}
.title {
  width: 100%;
  border-bottom: 1px solid #bbbbbb;
  color: #444444;
  margin: 0;
  margin-bottom: 0.3em;
  font-size: 1.5em;
}
</style>