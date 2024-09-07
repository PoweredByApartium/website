---
layout: page
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
    title: 'General purpose library for Java & Spigot ',
    links: [
      { icon: 'github', link: 'https://github.com/PoweredByApartium/cocoa-beans' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/PoweredByApartium/cocoa-beans/main/Writerside/cfg/beans.png',
    name: 'Core',
    title: 'Shhhhhh this is a top secret',
    links: [
      { icon: 'discord', link: 'https://discord.com/users/331785139656851457' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our products
    </template>
    <template #lead>
      TOOD VOIGON
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="products"
  />
</VPTeamPage>