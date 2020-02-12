<template>
  <section class="hero is-link is-fullheight is-bold">
    <div class="hero-body">
      <div class="column is-desktop is-three-fifths is-offset-one-fifth">
        <form @submit.prevent="onSubmit()">
          <input-base inputType='email' label="" :inputPlaceholder="`Email`" />
          <input-base inputType='password' label="" :inputPlaceholder="`Password`" />

          <button class="button is-success">Login</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import InputBase from '@/components/InputBase.vue';

export default {
  name: 'Main',
  components: {
    InputBase,
  },
};
</script>
