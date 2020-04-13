<template>
  <div class="columns is-centered is-vcentered">
    <div class="column is-3 is-offset-0">
      <div class="container">
        <div class="has-text-centered">
            <img
              class="login-logo"
              :src="require('@/assets/images/logo_horizontal.png')"
            />
        </div>

        <input-base label="E-mail" inputType='email' v-model="email" />
        <input-base label="Senha" inputType='password' v-model="password" />

        <div class="has-text-centered is-pulled-right">
          <a class="button is-vcentered is-primary is-outlined">Login</a>
        </div>

        <div class="is-vcentered is-pulled-left">
          <a href="/register">
            Você não tem uma conta? <br>
            Crie uma agora
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputBase from '@/components/InputBase.vue';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  components: {
    InputBase,
  },
};
</script>
