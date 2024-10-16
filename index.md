---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Apartium Development"
  text: ""
  tagline: Bringing scalable Java game development to the next level
  image:
    src: /img/index-logo.png
    alt: Apartium Development
  actions:
    - theme: brand
      text: Our products
      link: /products
    - theme: alt
      text: blog
      link: /blog

features:
  - icon: 🛠️    
    title: Highly skilled team members
    details: Our development team is highly trained and motivated, with each time member having their own area of expertise. 
  - icon: 📋
    title: Enhanced workflow
    details: We employ a streamlined workflow that includes code testing, ci/cd pipelines, documentation and more. We are always looking for ways to improve our workflow with the latest word in the industry.
  - icon: 🚩
    title: Security first
    details: Security is not even a task for us, its part of every line of code we write. Where relevant our products boast extensive security measures to ensure your players are safe.
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

const member = [
  {
    avatar: 'https://www.github.com/liorsl.png',
    name: 'Lior Slakman',
    title: 'Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/liorsl' },
      { icon: 'discord', link: 'https://discord.com/users/331785139656851457' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/lior-slakman-3076a2219/' },
      { icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"></path></svg>'
        }, link: 'mailto:lior@apartium.net' }
    ]
  },
  {
    avatar: 'https://www.github.com/ofirtim.png',
    name: 'Ofir Hoffman',
    title: 'Senior Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/ofirtim' },
      { icon: 'discord', link: 'https://discord.com/users/201095264021250048' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/ofir-hoffman-503518221/' }
    ]
  },
 {
    avatar: 'https://www.github.com/ikfir.png',
    name: 'Kfir Botnik',
    title: 'Senior Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/ikfir' },
      { icon: 'discord', link: 'https://discord.com/users/248460319117017088' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/kfir-botnik/' },
      { 
        icon: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"></path></svg>'
        }, 
        link: 'mailto:kfir@apartium.net' 
      }
    ]
  },
{
    avatar: 'https://i.ibb.co/0cgDgBX/download.jpg',
    name: 'Elay Sasy',
    title: 'Senior UX/UI Designer',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/216930746340868096' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/elay-sasy-658102189/' },
      { 
        icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>'
    }, 
        link: 'https://behance.net/mutedlyfx' 
      },
{ icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"></path></svg>'
        }, link: 'mailto:elay@edvin.co.il' }
    ]
  },
  {
    avatar: 'https://www.github.com/IdanKoblik.png',
    name: 'Idan Koblik',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/IdanKoblik' },
      { icon: 'discord', link: 'https://discord.com/users/429212281914785793' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/idan-k/' }
    ]
  },
  {
    avatar: 'https://www.github.com/justnotro.png',
    name: 'Eilon Hafzadi',
    title: 'Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/justnotro' },
      { icon: 'discord', link: 'https://discord.com/users/333628700321120257' }
    ]
  }
]
</script>


<style>

.VPTeamMembers > div {
    grid-template-columns: repeat(auto-fit, minmax(204px, 1fr)) !important;
    
}

.image-bg > img {
    border-radius: 30px !important;
}

</style>

<center>
    <VPTeamPageTitle>
        <template #title>Our Team</template>
        <template #lead>The people that makes our projects possible</template>
    </VPTeamPageTitle>
    <VPTeamPageSection>
          <VPTeamMembers
            size="small" :members="member"
          />
    </VPTeamPageSection>
</center>
