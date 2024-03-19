<template>
  <q-page style="margin-top:10px">
    <q-card class="item-card" >
      <div style="margin-left:60px">

        <InformationItem>
          <template #icon>
            <q-avatar size="80px" icon="person" style="margin-right: 60px"/>
          </template>
          <template #heading>About Me</template>
          Hi, I'm Cristhian. A student, developer, and IT technician passionate about computer science. Eager for challenges, I constantly seek opportunities to enhance my skills in programming. 
          With experience in independent and team projects using Java, Vue, Quasar, Golang, and Node.
        </InformationItem>

        <InformationItem>
          <template #icon>
            <q-avatar size="80px" icon="build" style="margin-right: 60px"/>
          </template>
          <template #heading>Skills</template>
          Programming Languages: <strong>Java, Vue, Quasar, Golang, Node</strong><br/>
          Database Management: <strong>MySQL, PostgreSQL</strong><br/>
          Code Maintenance: <strong>Git, GitHub</strong>
        </InformationItem>
      
        <InformationItem>
          <template #icon>
            <q-avatar size="80px" icon="code" style="margin-right: 60px"/>
          </template>
          <template #heading>Projects</template>
          You can find every non-commercial project I've made on my <a href="https://github.com/CristhianPeverelli/" target="_blank" rel="noopener">GitHub</a>.
        </InformationItem>

        <InformationItem>
          <template #icon>
            <q-avatar size="80px" icon="work" style="margin-right: 60px"/>
          </template>
          <template #heading>Work Experience</template>
          You can find every non-commercial project I've made on my <a href="https://github.com/CristhianPeverelli/" target="_blank" rel="noopener">GitHub</a>.
        </InformationItem>

        <InformationItem>
          <template #icon>
            <q-avatar size="80px" icon="school" style="margin-right: 60px"/>
          </template>
          <template #heading>Education</template>
          You can find every non-commercial project I've made on my <a href="https://github.com/CristhianPeverelli/" target="_blank" rel="noopener">GitHub</a>.
        </InformationItem>

        <InformationItem>
          <template #icon>
            <q-avatar size="80px" icon="sports_esports" style="margin-right: 60px"/>
          </template>
          <template #heading>Passions and Hobbies</template>
          You can find every non-commercial project I've made on my <a href="https://github.com/CristhianPeverelli/" target="_blank" rel="noopener">GitHub</a>.
        </InformationItem>
      
        <InformationItem>
          <template #icon>
            <q-avatar size="80px" icon="favorite" style="margin-right: 60px"/>
          </template>
          <template #heading>Contact Me</template>
      
          Email: <strong>cristhian.peverelli@gmail.com</strong> <br/>
          <a href="https://www.linkedin.com/in/cristhian-peverelli/" target="_blank" rel="noopener">LinkedIn</a> <br/>
          Other refs on the left menu :)
        </InformationItem>

      </div>
    </q-card>    
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'HomeSection'
});
</script>

<script>
import InformationItem from './InformationItem.vue'

export default {
  data() {
    return {
      personalInfo: "John Doe is a passionate software engineer based in San Francisco, CA. Born on May 15, 1985, he brings a unique blend of technical expertise and creativity to his work.",
      skills: "John is proficient in a variety of programming languages and technologies, including JavaScript, Python, HTML/CSS, React, and Node.js. He also possesses strong problem-solving skills and a keen eye for detail.",
      projects: "Throughout his career, John has led and contributed to numerous software projects spanning web development, mobile app development, and cloud-based solutions. Some notable projects include a real-time chat application, an e-commerce platform, and a data visualization dashboard.",
      work: "With over a decade of experience in the tech industry, John has held various roles in both startups and established companies. He has worked as a software engineer, team lead, and technical architect, collaborating with cross-functional teams to deliver innovative solutions.",
      education: "John holds a Bachelor's degree in Computer Science from Stanford University, where he graduated with honors. During his academic journey, he gained a solid foundation in computer science principles, algorithms, and software engineering practices.",
      hobbies: "Outside of his professional pursuits, John enjoys various hobbies to unwind and stay balanced. He is an avid reader, a fitness enthusiast, and a passionate traveler who loves exploring new cultures and cuisines.",
      extras: "In addition to his technical skills, John is a lifelong learner who is always eager to explore emerging technologies and trends. He actively participates in hackathons, meetups, and online communities, fostering continuous growth and knowledge sharing."
    };
  }
};
</script>

<style scoped>
.item-card {
  max-width: 98%;
  margin: auto;
  padding: 20px;
  margin-bottom: 3px;
}

.biography-page {
  padding: 20px;
}

.item-card {
  margin-bottom: 20px;
}

.biography-title {
  font-size: 18px;
  margin-left: 10px;
}

.item-text {
  font-size: 16px;
  line-height: 1.6;
}
</style>
