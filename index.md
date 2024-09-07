---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Apartium Development"
  text: "TODO Vogion continue here :)"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<center>
    <VPTeamPageTitle>
        <template #title>Our Team</template>
        <template #lead>...</template>
    </VPTeamPageTitle>
    <VPTeamPageSection>
          <VPTeamMembers
            size="medium" :members="member"
          />
    </VPTeamPageSection>
</center>