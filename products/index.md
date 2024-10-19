---
layout: page
footer: true
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

const products = [
  {
    avatar: 'https://raw.githubusercontent.com/PoweredByApartium/cocoa-beans/main/Writerside/cfg/beans.png',
    name: 'Cocoa beans',
    title: 'General purpose library for Java & Spigot',
    links: [
      { icon: 'github', link: 'https://github.com/PoweredByApartium/cocoa-beans' }
    ]
  },
  {
    avatar: '/img/COREIMAGE.png',
    name: 'Core',
    title: 'Our flagship framework - supercharging high scale minecraft networks development',
    links: [
      {        
        icon: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="36px" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"></path></svg>'
        }, 
        link: 'mailto:lior@apartium.net' 
    },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/138163162?s=400&u=6ebce5650da88c12d2a6705f69ea47e95cec457b&v=4',
    name: 'Project Zero',
    title: 'Our own Minecraft network - our personal space for showcases and experiments',
    links: [
        { icon: 'github', link: 'https://github.com/projectzeroil/'},
        { icon: 'discord', link: 'https://discord.gg/Q2q6jgMF' }
    ]
    
  }
]
</script>

<VPTeamPage style="margin-top: -5px;">
  <VPTeamPageTitle>
    <template #title>
      Our projects
    </template>
    <template #lead>
      While most of our work is done in collaboration with our partners under strict non-disclosure agreements, we are proud to present our public facing projects. 
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="products"
  />
</VPTeamPage>