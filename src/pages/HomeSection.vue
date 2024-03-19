<template>
  <q-page style="margin-top:10px">
    <q-card class="item-card" >
      <div style="margin-left:60px">

        <InformationItem>
          <template #icon>
            <q-avatar size="80px" icon="person" style="margin-right: 60px"/>
          </template>
          <template #heading>About Me</template>
          Hi, I'm Cristhian. A student, developer, and IT technician passionate about computer programming.Eager for challenges, I constantly seek opportunities to enhance my skills in programming. 
          <br/>What truly sets me apart is my insatiable hunger for challenges. I thrive in environments where innovation and adaptation are paramount, constantly seeking out opportunities to expand my knowledge and refine my skills. 
          <br/>Whether it's tackling complex algorithms solo or collaborating with a team to bring ambitious projects to fruition, I embrace each challenge as an opportunity for growth and self-improvement.
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
          For the whole section of the non-commercial projects I've made, refers to the specific section on the left.<br>Otherwise, you can go on my <a href="https://github.com/CristhianPeverelli/" target="_blank" rel="noopener">GitHub profile</a> to see directly all the code.
        </InformationItem>

        <InformationItem>
          <template #icon>
            <q-avatar size="80px" icon="work" style="margin-right: 60px"/>
          </template>
          <template #heading>Work Experience</template>
          ✶ IT Support @ <a href="https://atlantic-technologies.com/it/" target="_blank" rel="noopener">Atlantic Technologies</a> > Apr 2023 - Present
          <br/>
          Activities: Technical Support, Google Suite, Software/Hardware Installation, Computer Repair, Network Management
          <br/>
          ✶ IT Intern @ <a href="https://comune.sedriano.mi.it/" target="_blank" rel="noopener">Comune di Sedriano</a> > Sep 2020 - Jun 2021
          <br/>
          Activities: Assisted system administrator at the CED. Responsibilities included software and hardware support at key municipal buildings and computer maintenance.
          <br/>
          <br/>
          You can find more info in the specific section on the left.
        </InformationItem>

        <InformationItem>
          <template #icon>
            <q-avatar size="80px" icon="school" style="margin-right: 60px"/>
          </template>
          <template #heading>Education</template>
          ✶ <strong>Bachelor's Degree</strong> in Computer Science @ <a href="https://www.unimi.it/it" target="_blank" rel="noopener">Università degli Studi di Milano "La Statale"</a> > 2021 - <strong>expected</strong> mid 2025
          <br/>
          ✶ <strong>High School Diploma</strong> @ <a href="https://www.alessandrinimainardi.it/" target="_blank" rel="noopener">ITIS Emilio Alessandrini, Vittuone </a> > Sep 2016 - Jun 2021
        </InformationItem>

        <InformationItem>
          <template #icon>
            <q-avatar size="80px" icon="sports_esports" style="margin-right: 60px"/>
          </template>
          <template #heading>Passions and Hobbies</template>
          I am a lover of video games, mainly MMORPGs such as <strong>World of Warcraft</strong> but also industrial management games such as <strong>Factorio</strong> or 
          <strong>Dyson Sphere Programm</strong>. I also participated together with a group of 20 people in 2 international World of Warcraft tournaments, finishing in second 
          and then third place. 
          <br/>I think that video games provide 2 enormous benefits, first of all they allow you to release some stress and stimulate the brain a lot. 
          <br/>I am also passionate about football having played it at a competitive level for 12 years, and finally I practice a bit of chess in my free time.
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
