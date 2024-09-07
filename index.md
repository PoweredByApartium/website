---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Apartium Development"
  text: ""
  tagline: Bringing scalable Java game development to the next level
  image:
    src: https://cdn.discordapp.com/icons/576785784120803356/3336ed9c69c9dd3a726a6ffeaa702607.png?size=2048
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
    title: Feature A
    details: TODO VOIGON A
  - icon: 📋
    title: Feature B
    details: TODO VOIGON B
  - icon: 🚩
    title: Feature C
    details: TODO VOIGON C
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

const member = [
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
    avatar: 'https://www.github.com/ikfir.png',
    name: 'Kfir Botnik',
    title: 'Senior Contributor',
    links: [
      { icon: 'github', link: 'https://github.com/ikfir' },
      { icon: 'discord', link: 'https://discord.com/users/248460319117017088' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/kfir-botnik/' }
    ]
  },
  {
    avatar: 'https://www.github.com/liorsl.png',
    name: 'Lior Slakman',
    title: 'Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/liorsl' },
      { icon: 'discord', link: 'https://discord.com/users/331785139656851457' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/lior-slakman-3076a2219/' }
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
