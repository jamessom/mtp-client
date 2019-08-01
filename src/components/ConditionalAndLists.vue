<template>
  <div>
    <p v-if="show">Você pode me vê</p>
    <p v-else>Agora Você me vê</p>
    <p>Você está me vendo?</p>
    <p v-show="show">Ainda me vê?</p>
    <button @click="show = !show">switch</button>
    <hr>

    <ul class="ConditionalAndLists">
      <li v-for="ingredient in ingredients">{{ ingredient }}</li>
    </ul>

    <hr>

    <ul>
      <li v-for="person in persons">{{ person.nome }}</li>
    </ul>

    <hr>

    <ul>
      <li v-for="person in persons">
        <div v-for="(value, key, index) in person">
          {{ key }}: {{ value }} ({{ index }})
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ConditionalAndLists',
  data: () => {
    return {
      show: true,
      ingredients: ['carne', 'frutas', 'biscoitos'],
      persons: [
        {nome: 'James', idade: 29, cor: 'perto'},
        {nome: 'West', idade: 23, cor: 'branco'},
      ]
    }
  }
}
</script>

<style>
.ConditionalAndLists {
  text-align: left;
}
</style>
